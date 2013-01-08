<!DOCTYPE html>
<html lang="nl">
	<head>
		<title>Menukaarten-docs</title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<link rel="stylesheet" href="assets/css/stylesheet.css">
	</head>
	
	<body id="main">
		<div id="container">
			<div id="menu-wrapper">
				<div id="menu">
					<h1>Inhoudsopgave</h1>
					<ul>
						<li><a href="security.html">Security</a></li>
						<li><a href="controllers.html">Controllers</a></li>
						<li><a href="views.html">Views</a></li>
						<li><a href="models.html">Models</a></li>
					</ul>
				</div>
			</div>
			<div id="content-wrapper">
				<div id="content">

<!-- START CONTENT -->
<h1>Security</h1>
<h2>Password hashing</h2>
Passwords are that are saved to the database are appended with a security salt. This salt is hardcoded in the user model and can only be changed by the technical staff. After adding the salt the password gets encrypted as a SHA1 hash.
Example of the file: 
<span class="bold">models/user_model.php</span>
<pre>
private $salt = 'PAwEr&^52sd+=2Y%T';

public function encrypt($password) {
  return sha1($this->salt.$password);
}
</pre>
<h2>Login procedure</h2>
<p>
To login as a user the following steps has to be performed:
</p>
<ul class="list">
	<li>Point the webbrowser to http://restaurantname.menukaarten.nl/login</li>
	<li>Enter the login credentials
		<ul>
			<li>Check if a user with the specified email address exist</li>
			<li>Hash the submitted password and compare it with the database</li>
		</ul>
	</li>	
	<li>When the credentials are valid:
		<ul>
			<li>Set the session</li>
			<li>Update the last visit date</li>
		</ul>
	</li>
	
	<li>When the credentials aren’t valid:
	<ul>
		<li>Display an error message (E-mail/password don’t match)</li>
	</ul>
	</li>
	
</ul>

<h2>Logout procedure</h2>
<p>When the user click on the logout link:</p>
<ul class="list">
	<li>The session is being unset</li>
	<li>The user get redirected to the base path (homepage)</li>
</ul>

<h2>Forgot password</h2>
<p>
When a user has forgotten it’s password there a option at the login page to reset the password. This involves the following actions:
</p>
<ul class="list">
	<li>A user clicks the Forgot password link</li>
	<li>Insert the e-mail address</li>
	<li>When the inserted e-mail address is valid
		<ul>
			<li>Create a unique token</li>
			<li>Send the password reset link with to token to the e-mail address</li>
			<li>When the user clicks on the link it sees a page with to input fields</li>
			<li>Insert the new password twice (to check no mistakes are made)</li>
			<li>If the passwords match, save it to the database and login the user</li>
		</ul>
	</li>
	<li>No valid e-mail address inserted, show a message noting that the e-mail address is not valid and stay on the page.</li>
</ul>

<h2>Sessions</h2>
<p>Because all controllers used for the dashboard extend on the Admin_Controller they have access to the session function. When checking if a user is logged in you can use the following function:</p>
<pre>
if ($this->logged_in) {
  // user is logged in
}
</pre>

<p>
	When a user signs in the following session vars get set:
</p>
<table>
	<tr>
		<th>var</th>
		<th>content</th>
	</tr>
	<tr>
		<td>logged_in</td>
		<td>true or false</td>
	</tr>
	<tr>
		<td>firstname</td>
		<td>user firstname</td>
	</tr>
	<tr>
		<td>lastname</td>
		<td>user lastname</td>
	</tr>
	<tr>
		<td>uid</td>
		<td>user id</td>
	</tr>
	<tr>
		<td>role</td>
		<td>user role (ex. 100)</td>
	</tr>
	<tr>
		<td>location_id</td>
		<td>location of the subdomain the user logs in to.</td>
	</tr>
</table>



User rights/roles
Different controllers or methods can require a certain minimal role a user has to be. These user rights can be set in the class variable $access. See the following example:
protected $access = array(
  'default_access' => 100,
  'login' => 0,
  'logout' => 0,
  'forgot_password' => 0,
  'reset_password' => 0
);
In this example all methods require a user with a role of at least 100. The methods login, logout, forgot_password and reset_password require a role of 0, this means users that aren’t logged in.
When the $access variable is omitted, it defaults to the user role of 1. Which means that all controllers extended on the Admin_Controller are protected so only logged in users can access that methods.

Changing user settings
The user role is saved in the session, we’ve done it this way so we don’t have to pull the user from the database on each page. The downside of storing the user role in the session is that it doesn’t get updated when the role is changed in the database. To work around this, the user session gets unset when the roles are changed. This means the user needs to login again when the page get refreshed.
<!-- END CONTENT -->

				</div>
			</div>
		</div>	
	</body>
</html>

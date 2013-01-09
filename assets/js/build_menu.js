var pages = {
	'index.html':'Introduction',
	'conventions.html':'Conventions',
	'security.html':'Security',
	'controllers.html':'Controllers',
	'views.html':'Views',
	'models.html':'Models',
	'version_history.html':'Version history',
	'database.html':'Database design',
	'routing.html':'Routing'
};

$(function() {
	$.each(pages, function(page, name) {
		menu_item = '<li><a href="'+page+'">'+name+'</a></li>';
		$('#menu ul').append(menu_item);
	});
});
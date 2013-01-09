var pages = [
	{
		'desc':'Introduction',
		'page':'index.html'
	},
	{
		'desc':'Conventions',
		'page':'conventions.html'
	},
	{
		'desc':'Security',
		'page':'security.html'
	},
	{
		'desc':'Controllers',
		'page':'controllers.html'
	},
	{
		'desc':'Views',
		'page':'views.html'
	},
	{
		'desc':'Models',
		'page':'models.html'
	},
	{
		'desc':'Version history',
		'page':'version_history.html'
	},
	{
		'desc':'Database design',
		'page':'database.html'
	},
	{
		'desc':'Routing',
		'page':'routing.html'
	},
	{
		'desc':'Helpers',
		'page':'helpers.html'
	}
];

$(function() {
	$.each(pages, function(index, item) {
		var menu_item = '<li><a href="'+item.page+'">'+item.desc+'</a></li>';
		$('#menu ul').append(menu_item);
	});
});
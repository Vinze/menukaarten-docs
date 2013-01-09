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
		'desc':'User security',
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
		'page':'helpers.html',
		'subpages':[
			{
				'desc':'Form',
				'page':'form_helper.html'
			},
			{
				'desc':'HTML',
				'page':'html_helper.html'
			},
			{
				'desc':'Plural',
				'page':'plural_helper.html'
			}
		]
	},
	{
		'desc':'Decisions &amp; research',
		'page':'decisions_research.html',
		'subpages':[
			{
				'desc':'Where clauses',
				'page':'where_clauses.html'
			}
		]
	}

];


function build_menu(pages) {
	var html = '';
	$.each(pages, function(index, item) {
		html += '<li><a href="'+item.page+'">'+item.desc+'</a>';
		if (typeof item.subpages != "undefined") {
			html += '<ul>';
			html += build_menu(item.subpages);
			html += '</ul>';
		}			
		html += '</li>';
	});
	return html;	
}

$(function() {
	var menu = build_menu(pages);
	$('#menu ul').append(menu);
});

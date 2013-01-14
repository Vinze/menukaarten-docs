var pages = [
	{
		'desc':'Introduction',
		'page':'index.html',
		'subpages':[
			{
				'desc':'Installation',
				'page':'installation.html'
			},
			{
				'desc':'Specifications',
				'page':'specifications.html'
			}
		]
	},	
	{
		'desc':'Framework',
		'page':'framework.html',
		'subpages':[
			{
				'desc':'Directory Structure',
				'page':'directory_structure.html'
			},
			{
				'desc':'Conventions',
				'page':'conventions.html'
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
				'desc':'Load',
				'page':'load.html'
			},
			{
				'desc':'Routing',
				'page':'routing.html'
			},
			{
				'desc':'Form helper',
				'page':'form_helper.html'
			},
			{
				'desc':'HTML helper',
				'page':'html_helper.html'
			},
			{
				'desc':'Plural helper',
				'page':'plural_helper.html'
			}
		]
	},
	{
		'desc':'Menukaarten.nl',
		'page':'menukaarten.html',
		'subpages':[
			{
				'desc':'Version history',
				'page':'version_history.html'
			},
			{
				'desc':'Database design',
				'page':'database.html'
			},
			{
				'desc':'User security',
				'page':'security.html'
			}
		]
	},
	{
		'desc':'Decisions &amp; research',
		'page':'decisions_research.html',
		'subpages':[
			{
				'desc':'Code conventions',
				'page':'research_conventions.html'
			},
			{
				'desc':'Database categories',
				'page':'database_categories.html'
			},
			{
				'desc':'Design patterns',
				'page':'design_patterns.html'
			},
			{
				'desc':'Framework security',
				'page':'framework_security.html'
			},
			{
				'desc':'Routes file',
				'page':'routes_decicions.html'
			},			
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

/*
var i = 0;
function total_documentation(pages) {
	$.each(pages, function (index, item){
	
		var new_div = '<div id=' + i + '_content_block></div>';
		$('#content-wrapper').append(new_div);
		$('#' + i + '_content_block').load(item.page + ' #content');
	
		if (typeof item.subpages != "undefined") {
			total_documentation(item.subpages);
		}	
		
		console.log(i);
		
		i++;
	});
	
}
*/

$(function() {
	var menu = build_menu(pages);
	$('#menu ul').append(menu);
//	total_documentation(pages);
});

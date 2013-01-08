SyntaxHighlighter.defaults['gutter'] = false;
SyntaxHighlighter.defaults['toolbar'] = false;
SyntaxHighlighter.all();

$('.syntaxhighlighter.plain a').click(function(){
	e.preventDefault();
	
	return false;
});
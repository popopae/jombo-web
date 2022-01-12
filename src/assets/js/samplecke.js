CKEDITOR.replace( 'editor1', {
	toolbarGroups: [{
		"name": "basicstyles",
	}, {
		"name": "paragraph",
		"groups": ["list", "blocks"]
	}],
	height: 88,
	removePlugins: 'elementspath,resize'
});

CKEDITOR.replace( 'editor2', {
	toolbarGroups: [{
		"name": "basicstyles",
	}, {
		"name": "paragraph",
		"groups": ["list", "blocks"]
	}],
	height: 88,
	removePlugins: 'elementspath,resize'
});
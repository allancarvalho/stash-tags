$(document).ready(function() {
	var nome = 'Allan';
	var tags = $('.tag.aggregate').data('names').split(':');
	const html = tags.map(tag => { 
		return `<span class="tag" style="display:inline-block; margin-left: 5px;" data-names="${tag}" original-title=""><span class="aui-icon aui-icon-small aui-iconfont-devtools-tag-small"></span><a href="/projects/BPDP/repos/product-page/commits?until=${tag}">${tag}</a></span>`;
	});
	$('.tag.aggregate').parent().html(html);
});
/**
 *layer
 */
var layerShow = function(){
	var _obj = $(this).data('id');
	var $layer = $('#layer');
	var $content = $('#layer-wrap');
	var $text = $(_obj).text();
	$layer.show();
	$content.html($text);
	var _height = $(window).height();
	var _divHeight = $content.height();
	var setHeight = _divHeight>(_height-50) ? _height-50 : _divHeight;
	var setMargin = _divHeight > (_height-50) ? 25 : (_height-_divHeight)/2;
	$content.css({
			'height':setHeight,
			'margin-top':setMargin
		});
	$(document).on('click', '.close', function(event) {
		event.preventDefault();
		$content.html('');
		$layer.hide();
	});
};
/**
 *layer
 */
var layerShow = function(obj) {
    var _obj = obj;
    var $layer = $('#layer');
    var $content = $('#layer-wrap');
    var $text = $(_obj).text();
    $layer.show();
    $content.html($text);
    var _height = $(window).height();
    var _divHeight = $content.height();
    var setHeight = _divHeight > (_height - 50) ? _height - 50 : _divHeight;
    var setMargin = _divHeight > (_height - 50) ? 25 : (_height - _divHeight) / 2;
    $content.css({
        'height': setHeight,
        'margin-top': setMargin
    });
    $(document).on('click', '.close,.layer-close', function(event) {
        event.preventDefault();
        $content.html('');
        $layer.hide();
    });
};

/**
 * change
 */

$('#sex').change(function(event) {
    if ($(this).val() == '男') {
        $('#icon-sex').addClass('icon-boy').removeClass('icon-girl');
    } else {
        $('#icon-sex').addClass('icon-girl').removeClass('icon-boy');
    }
});
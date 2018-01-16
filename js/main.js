/**
 *layer
 */
var layerShow = function(obj) {
    var _obj = obj;
    var $body = $('body');
    var $layer = $('<div id ="layer"></div>');
    var $wrap = $('<div id="layer-wrap"></div>');
    var $close = $('<span class="close"></span>');
    var $content = $('<div id="layer-content"></div>');
    $wrap.append($close);
    $wrap.append($content);
    $layer.append($wrap);
    $body.append($layer);
    var $text = $(_obj).text();
    $content.html($text);
    $layer.show();
    // var _height = $(window).height();
    // var _divHeight = $wrap.height();
    // console.log(_height,_divHeight);
    // var setHeight = _divHeight > (_height - 50) ? _height - 50 : _divHeight;
    // var setMargin = _divHeight > (_height - 50) ? 25 : (_height - _divHeight) / 2;
    // $wrap.css({
    //     'height': setHeight,
    //     'margin-top': setMargin
    // });
    $(document).on('touchend', '.close', function(event) {
        event.preventDefault();
        $wrap.html('');
        $layer.remove();
    });
};

    //radio-checked
    $(document).on('touchend', '.spn-radio', function(event) {
        event.stopPropagation();
        var $this = $(this);
        $this.addClass('checked').siblings().removeClass('checked');
        $this.siblings().find('input').attr('checked', false);
        $this.find('input').attr('checked', true);
    });

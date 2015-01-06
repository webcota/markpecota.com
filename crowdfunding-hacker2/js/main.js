$(".email").focus();

(function ($) {
    "use strict";
    $.fn.generateBackground = function (options) {
        // Setup options
        var settings = $.extend({
            triangleSize : 100,
            trianglesHigh: 20,
            trianglesWide: 20,
            skew : 1.73205,
            opacity : 0.05,
            colors : ['#111', '#333', '#555', '#777', '#999', '#bbb', '#ddd', '#fff']
        }, options);

        return this.each(function () {
            settings.backgroundColor = settings.backgroundColor || settings.colors[0];
            var $this = $(this),
                width = settings.triangleSize * settings.trianglesWide * settings.skew,
                height = settings.triangleSize * settings.trianglesHigh,
                background = "<svg xmlns='http://www.w3.org/2000/svg' width='" + width + "' height='" + height + "'>",
                i,
                j,
                v,
                w,
                x,
                y,
                a,
                b,
                c,
                d,
                e,
                getColor = function () {
                    var hex = settings.colors[Math.floor(Math.random() * settings.colors.length)];
                    return hex;
                };

            for (i = -1; i <= settings.trianglesWide; i += 1) {
                for (j = -0.5; j <= settings.trianglesHigh; j += 0.5) {
                    v = (i + (j % 1)) * settings.triangleSize * settings.skew;
                    w = j * settings.triangleSize;
                    x = v + (settings.triangleSize * settings.skew);
                    y = w + settings.triangleSize;
                    a = v + "," + w;
                    b = x + "," + w;
                    c = (v + x) / 2 + "," + ((w + y) / 2);
                    d = v + "," + y;
                    e = x + "," + y;

                    background += "<polygon fill='" + getColor() + "' fill-opacity='" + settings.opacity + "' points='" + a + " " + c + " " + d + " " + "' />";
                    background += "<polygon fill='" + getColor() + "' fill-opacity='" + settings.opacity + "' points='" + b + " " + c + " " + e + " " + "' />";
                }
            }

            background += "</svg>";

            var b64 = 'data:image/svg+xml;base64,' + window.btoa(background),
                url = 'url("' + b64 + '")';
            
            $this.css({
                'backgroundImage': url,
                'backgroundColor' : settings.backgroundColor
            });
        });
    };
}(jQuery));

$('body').generateBackground({
    backgroundColor: '#242424'
});


$('.multi').generateBackground({
    opacity: 0.7,
    colors: ['#D13B00', '#E82A0C', '#E80C0F', '#E8690C', '#E88709']
});

$('.urgency').hide().slideDown(1500);





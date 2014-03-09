(function () {
    var dataset = {
        'JavaScript': 'https://developer.mozilla.org/docs/JavaScript',
        'JS Reference': 'https://developer.mozilla.org/docs/JavaScript',
        'JS Documentation': 'https://developer.mozilla.org/docs/JavaScript',
        'JS': 'https://developer.mozilla.org/docs/JavaScript',
        'HTML5': 'https://developer.mozilla.org/html5',
        'JS Array': 'https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/Array',
        'JS Function': 'https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/Function',
        'JS Number': 'https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/Number',
        'JS RegExp': 'https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/RegExp',
        'JS String': 'https://developer.mozilla.org/docs/JavaScript/Reference/Global_Objects/String',
        'JS Tutorial': 'https://developer.mozilla.org/docs/JavaScript/Guide',
        'Learn JavaScript': 'https://developer.mozilla.org/docs/JavaScript/Guide',
        'Learn JS': 'https://developer.mozilla.org/docs/JavaScript/Guide',
        'DOM': 'https://developer.mozilla.org/docs/DOM',
        'WebGL': 'https://developer.mozilla.org/docs/WebGL',
        'WebSockets': 'https://developer.mozilla.org/docs/WebSockets',
        'WebSocket': 'https://developer.mozilla.org/docs/WebSockets',
        'JSON': 'https://developer.mozilla.org/docs/JSON',
        'XUL': 'https://developer.mozilla.org/docs/XUL',
        'HTML': 'https://developer.mozilla.org/docs/Web/HTML',
        'CSS Reference': 'https://developer.mozilla.org/docs/Web/CSS/CSS_Reference',
        'CSS': 'https://developer.mozilla.org/docs/Web/CSS',
        'CSS3': 'https://developer.mozilla.org/docs/Web/CSS/CSS3',
        'CSS Transitions': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transitions',
        'CSS3 Transitions': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transitions',
        'CSS Gradients': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transitions',
        'CSS3 Gradients': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transitions',
        'linear-gradient': 'https://developer.mozilla.org/docs/Web/CSS/linear-gradient',
        'radial-gradient': 'https://developer.mozilla.org/docs/Web/CSS/linear-gradient',
        'repeating-linear-gradient': 'https://developer.mozilla.org/docs/Web/CSS/repeating-linear-gradient',
        'repeating-radial-gradient': 'https://developer.mozilla.org/docs/Web/CSS/repeating-radial-gradient',
        'CSS Animation': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_animations',
        'CSS3 Animation': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_animations',
        'CSS Transform': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transform',
        'CSS3 Transform': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transform',
        'CSS 3D Transform': 'https://developer.mozilla.org/docs/Web/CSS/Using_CSS_transform',
        'border-image': 'https://developer.mozilla.org/docs/Web/CSS/border-image',
        'border-image-source': 'https://developer.mozilla.org/docs/Web/CSS/border-image-source',
        'border-image-repeat': 'https://developer.mozilla.org/docs/Web/CSS/border-image-repeat',
        'border-image-width': 'https://developer.mozilla.org/docs/Web/CSS/border-image-width',
        'border-image-outset': 'https://developer.mozilla.org/docs/Web/CSS/border-image-outset',
        'CSS Flexbox': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_flexible_boxes',
        'flexbox': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_flexible_boxes',
        'flexible box': 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_flexible_boxes',
        'Media queries': 'https://developer.mozilla.org/docs/Web/CSS/Media_queries',
        'pseudo-class': 'https://developer.mozilla.org/docs/Web/CSS/pseudo-classes',
        'pseudo-classes': 'https://developer.mozilla.org/docs/Web/CSS/pseudo-classes',
        'pseudo-element': 'https://developer.mozilla.org/docs/Web/CSS/Pseudo-elements',
        'at-rule': 'https://developer.mozilla.org/docs/Web/CSS/At-rule',
        '@-rule': 'https://developer.mozilla.org/docs/Web/CSS/At-rule',
        'MDN': 'https://developer.mozilla.org/',
        'Mozilla Developer Network': 'https://developer.mozilla.org/',
        'devmo': 'https://developer.mozilla.org/',
        'Kuma': 'https://developer.mozilla.org/docs/Project:Getting_started_with_Kuma',
        'KumaScript': 'https://developer.mozilla.org/docs/Project:Introduction_to_KumaScript',
        'B2G': 'https://developer.mozilla.org/docs/Mozilla/Firefox_OS',
        'Firefox OS': 'https://developer.mozilla.org/docs/Mozilla/Firefox_OS',
        'Boot to Gecko': 'https://developer.mozilla.org/docs/Mozilla/Firefox_OS',
        'Persona': 'https://developer.mozilla.org/Persona',
        'BrowserID': 'https://developer.mozilla.org/Persona',
        'IndexedDB': 'https://developer.mozilla.org/docs/IndexedDB',
        'Vibration API': 'https://developer.mozilla.org/docs/WebAPI/Vibration',
        'Geolocation': 'https://developer.mozilla.org/docs/Using_geolocation',
        'SVG': 'https://developer.mozilla.org/docs/SVG',
        'ARIA': 'https://developer.mozilla.org/docs/Accessibility/ARIA',
        'WebRTC': 'https://developer.mozilla.org/docs/WebRTC',
        'WebAPI': 'https://developer.mozilla.org/docs/WebAPI',
        'Web apps': 'https://developer.mozilla.org/docs/Apps',
        'Mozilla Developer Program': 'https://developer.mozilla.org/docs/Mozilla/Developer_Program',
        'Emscripten': 'https://developer.mozilla.org/docs/Emscripten',
        'L20n': 'https://developer.mozilla.org/docs/L20n',
        'Firefox Marketplace': 'https://developer.mozilla.org/Marketplace',
        'Gecko': 'https://developer.mozilla.org/docs/Mozilla/Gecko',
        'XPCOM': 'https://developer.mozilla.org/docs/Mozilla/XPCOM',
        '#mdn': 'irc://irc.mozilla.org/mdn',
        '#mdndev': 'irc://irc.mozilla.org/mdndev',
        'mozilla-central': 'https://developer.mozilla.org/en-US/docs/mozilla-central',
        'Mozilla': 'https://www.mozilla.org/'
    }

    var options = {
        include_elems: ['p', 'div', 'span'],
        tracking_sting: '?utm_source=js%20snippet&utm_medium=content%20link&utm_campaign=promote%20mdn',
        maxlinks: 3
    };

    window._promote_mdn_options = (window._promote_mdn_options) ? window._promote_mdn_options : {};
    options = extend({}, options, window._promote_mdn_options);

    var replace_count = 0;
    var re = new RegExp(/<a[^>]*>(.*?)<\/a>/);

    // For the time being, we are not gonna do anything if querySelectorAll is not available in the browser
    if ('querySelectorAll' in document) {
        var elements = document.querySelectorAll(options.include_elems.join(', '));
        Array.prototype.forEach.call(elements, function(o, i){
            var text = o.innerHTML;

            if (text.match(/<a[^>]*>(.*?)<\/a>/g) && text.match(/<a[^>]*>(.*?)<\/a>/g).length) {
                var anchor_count = text.match(/<a[^>]*>(.*?)<\/a>/g).length;
                var anchors = [];
                var placeholder;
                var placeholder_index = 0;

                for (var i = 0; i < anchor_count; i++) {
                    var anchor = re.exec(text);
                    placeholder = '{_m$d$n_repl$ace_' + placeholder_index + '_}';
                    anchors[placeholder] = anchor[0];
                    text = text.replace(re, placeholder);
                    placeholder_index++;
                }

                // text is now stripped of all hyperlinks

                for (var keyword in dataset) {
                    var keyword_regex = new RegExp(keyword, 'i');
                    if (replace_count <= options.maxlinks) {
                        if (text.match(keyword_regex)) {
                            var exact_word = keyword_regex.exec(text);
                            var link = '<a href="'+ dataset[keyword] + options.tracking_sting +'">' + exact_word + '</a>';
                            placeholder = '{_m$d$n_repl$ace_' + placeholder_index + '_}';
                            placeholder_index++;
                            text = text.replace(exact_word, placeholder);
                            anchors[placeholder] = link;
                            delete dataset[keyword];
                            replace_count++;
                        }
                    } else {
                        break;
                    }
                }

                // Now let's replace placeholders with actual anchor tags, pre-existed ones and new ones.
                for (var l in anchors) {
                    text = text.replace(l, anchors[l]);
                }

                o.innerHTML = text;
            }
        });
    }

    function extend (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (!arguments[i])
                continue;

            for (var key in arguments[i]) {
                if (arguments[i].hasOwnProperty(key))
                    out[key] = arguments[i][key];
            }
        }

        return out;
    };

})();

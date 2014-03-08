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
        'WebSockets': 'https://developer.mozilla.org/docs/WebSockets'
    }

    var options = {
        include_elems: ['p', 'div', 'span'],
        tracking_sting: '?utm_source=js%20snippet&utm_medium=content%20link&utm_campaign=promote%20mdn',
        maxlinks: 3
    };

    var replace_count = 0;
    var re = new RegExp(/<a[^>]*>(.*?)<\/a>/);

    $.each($(options.include_elems.join(', ')), function (i, o) {
        var text = $(o).html();

        if (text.match(/<a[^>]*>(.*?)<\/a>/g) && text.match(/<a[^>]*>(.*?)<\/a>/g).length) {
            var anchor_count = text.match(/<a[^>]*>(.*?)<\/a>/g).length;
            var anchors = [];
            var placeholder;
            var placeholder_index = 0;

            for (var i = 0; i < anchor_count; i++) {
                var anchor = re.exec(text);
                placeholder = '{_mdn_replace_' + placeholder_index + '_}';
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
                        var link = '<a href="'+ dataset[keyword] +'">' + exact_word + '</a>';
                        placeholder = '{_mdn_replace_' + placeholder_index + '_}';
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

            $(o).html(text);
        }
    });
})();

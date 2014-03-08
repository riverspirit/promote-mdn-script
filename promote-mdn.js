/**
 * Created by jsx on 7/3/14.
 */

(function () {
    var dataset = {
        'JavaScript': 'https://developer.mozilla.org/docs/JavaScript',
        'JS Reference': 'https://developer.mozilla.org/docs/JavaScript',
        'JS Documentation': 'https://developer.mozilla.org/docs/JavaScript',
        'JS': 'https://developer.mozilla.org/docs/JavaScript',
        'HTML5': 'https://developer.mozilla.org/html5'
    }

    var options = {
        include_elems: ['p', 'div', 'span'],
        tracking_sting: '?--',
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
                if (replace_count <= options.maxlinks) {
                    if (text.match(keyword)) {
                        var link = '<a href="'+ dataset[keyword] +'">' + keyword + '</a>';
                        placeholder = '{_mdn_replace_' + placeholder_index + '_}';
                        placeholder_index++;
                        text = text.replace(keyword, placeholder);
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

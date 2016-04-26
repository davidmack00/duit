// duit.js - Direct UI Templates (requires jQuery)

$(function () {
    duitInitialize();
});

function duitInitialize() {

    function setData(obj, tmpl) {
        for (var key in obj) {

            if (key == "duit-placeholder") {

                //data for the nested template
                var sub = obj[key];

                //html for the template
                var subTmpl = $('#' + sub.tmpl).text(),
                    subData = sub.data,
                    target = '<!-- duit-placeholder ' + sub.target + ' -->';

                // if sub-template is to be used multiple times as an array
                if ($.isArray(subData)) {
                    var fullString = "";

                    // loop through each sub item (one template per item)
                    $.each(subData, function () {
                        var htmlString = setData(this, subTmpl);
                        fullString = fullString + htmlString;
                    });

                    // replace target with sub template
                    tmpl = tmpl.replace(target, fullString);
                }

                // if sub-template is to be used as one occurance
                else {
                    var htmlString = setData(subData, subTmpl);
                    tmpl = tmpl.replace(target, htmlString);
                }
            }

            else {
                // replace the key in the template with the value in the data
                tmpl = tmpl.replace(new RegExp('{{' + key + '}}','g'), obj[key]);
            }
        }

        // remove extra braces
        tmpl = tmpl.replace(/{{/g, '').replace(/}}/g, '');
        
        return tmpl;
    }

    // replace the placeholder with the data'd template
    function replaceHTML(placeholder, string) {
        placeholder.replaceWith($.parseHTML(string));
    }

    // find all the placeholders
    var placeholders = $("[data-duit]");

    // put the templates in the placeholders with data
    placeholders.each(function () {
        var curr = $(this),
            duitData = curr.data('duit'),
            currData = duitData.data;

        // find the related template and turn it into a string
        var currTmpl = $('#' + duitData.tmpl).text();
        
        // if template is to be used multiple times as an array
        if ($.isArray(currData)) {
            var fullString = "";

            // loop through each sub item (one template per item)
            $.each(currData, function () {
                var htmlString = setData(this, currTmpl);
                fullString = fullString + htmlString;
            });
            replaceHTML(curr, fullString);
        }

        // if template is to be used as one occurance
        else {
            var htmlString = setData(currData, currTmpl);
            replaceHTML(curr, htmlString);
        }
    });
}

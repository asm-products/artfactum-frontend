/*extend jquery to select elems by data-attributes*/


$.extend({
    hook: function(hookName) {
        var selector;
        if(!hookName || hookName === '*') {
            // select all data-hooks
            selector = '[data-hook]';
        } else {
            // select specific data-hook
            selector = '[data-hook~="' + hookName + '"]';
        }
        return $(selector);
    }
});

/*example*/

/***
$.hook('nav-menu-toggle').on('click', function() {
    $.hook('nav-menu').toggle();
});
***/
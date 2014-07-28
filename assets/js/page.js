+(function ($) {

    $(document).ready(function _ondocument_ready() {
        $("[data-trigger='codepen']").each(function () {
            $(this).append(codepen.build($(this).attr("data-slug-hash")));
        });
    });

})(window.jQuery);
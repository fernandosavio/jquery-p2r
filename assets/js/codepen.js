var codepen = {
    build: function (code, height, tab) {

        !height && (height = "300px");
        !tab && (tab = "result");



        var url = [
                "//codepen.io/anon/embed/", code, "?default-tab=", tab, "&slug-hash=", code, "&theme-id=7511&height=", height
            ].join(''),
            text = "<iframe ",
            n = {
                id: "cp_embed_" + code.replace("/", "_"),
                src: url,
                scrolling: "no",
                frameborder: "0",
                height: height,
                allowTransparency: "true",
                "class": "cp_embed_iframe",
                style: "width: 100%; overflow: hidden;"
            };

        for (var i in n) {
            text += i + '="' + n[i] + '" ';
        }
        text += "></iframe>";
        return text;
    }
};
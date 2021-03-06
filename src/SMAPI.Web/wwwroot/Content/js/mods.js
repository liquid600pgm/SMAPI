/* globals $ */

var smapi = smapi || {};
var app;
smapi.modList = function (mods) {
    // init data
    var data = {
        mods: mods,
        showAllFields: false,
        search: ""
    };
    for (var i = 0; i < data.mods.length; i++) {
        var mod = mods[i];

        // set initial visibility
        mod.Visible = true;

        // concatenate searchable text
        mod.SearchableText = [mod.Name, mod.AlternateNames, mod.Author, mod.AlternateAuthors, mod.Compatibility.Summary, mod.BrokeIn];
        if (mod.Compatibility.UnofficialVersion)
            mod.SearchableText.push(mod.Compatibility.UnofficialVersion);
        if (mod.BetaCompatibility) {
            mod.SearchableText.push(mod.BetaCompatibility.Summary);
            if (mod.BetaCompatibility.UnofficialVersion)
                mod.SearchableText.push(mod.BetaCompatibility.UnofficialVersion);
        }
        for (var p = 0; p < mod.ModPages; p++)
            mod.SearchableField.push(mod.ModPages[p].Text);
        mod.SearchableText = mod.SearchableText.join(" ").toLowerCase();
    }

    // init app
    app = new Vue({
        el: "#app",
        data: data,
        mounted: function() {
            // enable table sorting
            $("#mod-list").tablesorter({
                cssHeader: "header",
                cssAsc: "headerSortUp",
                cssDesc: "headerSortDown"
            });

            // put focus in textbox for quick search
            if (!location.hash)
                $("#search-box").focus();

            // jump to anchor (since table is added after page load)
            if (location.hash) {
                var row = $(location.hash).get(0);
                if (row)
                    row.scrollIntoView();
            }
        },
        methods: {
            /**
             * Update the visibility of all mods based on the current search text.
             */
            applySearch: function () {
                // get search terms
                var words = data.search.toLowerCase().split(" ");

                // make sure all words match
                for (var i = 0; i < data.mods.length; i++) {
                    var mod = data.mods[i];
                    var match = true;
                    for (var w = 0; w < words.length; w++) {
                        if (mod.SearchableText.indexOf(words[w]) === -1) {
                            match = false;
                            break;
                        }
                    }

                    mod.Visible = match;
                }
            }
        }
    });
};

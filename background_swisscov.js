chrome.contextMenus.create({
    "title": "Die ausgewählte Textstelle %s in Swisscovery suchen",
    "type": "normal",
    "contexts": ["selection"],
    "onclick": function(info) {
        chrome.tabs.create({
            url: 'https://uzb.swisscovery.slsp.ch/discovery/search?query=any,contains,'+encodeURIComponent(info.selectionText)+'&tab=41SLSP_UZB_DN_and_CI&search_scope=DN_and_CI&vid=41SLSP_UZB:UZB&offset=0'
        });
    }
});

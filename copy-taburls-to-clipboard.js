javascript:(function() {
    let urls = [];
    let tabs = window.gBrowser.browsers;
    for (let i = 0; i < tabs.length; i++) {
        urls.push(tabs[i].currentURI.spec);
    }
    urls = urls.join("\n");
    Components.classes["@mozilla.org/widget/clipboardhelper;1"]
      .getService(Components.interfaces.nsIClipboardHelper)
      .copyString(urls);
})();

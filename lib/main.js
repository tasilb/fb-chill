var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["*.facebook.com", "*.facebook.com/?_rdr"],
  contentScriptFile: ["./jquery-1.11.2.min.js",
                      "./chill-feeds.js"]
});

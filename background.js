// background.js

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== "undefined";

let brwsr;
if (isFirefox && browser !== undefined) {
    brwsr = browser;
} else {
    brwsr = chrome;
}

let GITHUB_REPO = "ballerina-platform/ballerina-lang";

brwsr.runtime.onInstalled.addListener(() => {
    brwsr.storage.local.set({ GITHUB_REPO });
    console.log("Github repo is set to", `GITHUB_REPO: ${GITHUB_REPO}`);
});

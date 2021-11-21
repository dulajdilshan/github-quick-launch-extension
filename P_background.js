// background.js

let GITHUB_REPO = 'ballerina-platform/ballerina-lang';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ GITHUB_REPO });
  console.log('Github repo is set to', `GITHUB_REPO: ${GITHUB_REPO}`);
});

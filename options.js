var isFirefox = typeof InstallTrigger !== 'undefined';

let brwsr;
if (isFirefox && browser !== undefined) {
    brwsr = browser;
} else {
    brwsr = chrome;
}

let githubRepoInput = document.getElementById("githubRepo");
let saveOptionsBtn = document.getElementById("saveOptions");

brwsr.storage.local.get("GITHUB_REPO", ({ GITHUB_REPO }) => {
    githubRepoInput.value = GITHUB_REPO;
});


saveOptionsBtn.addEventListener("click", (event) => {
    brwsr.storage.local.set({ GITHUB_REPO: githubRepoInput.value });
    alert("Options saved");
})


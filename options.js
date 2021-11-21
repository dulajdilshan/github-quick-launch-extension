let githubRepoInput = document.getElementById("githubRepo");
let saveOptionsBtn = document.getElementById("saveOptions");

chrome.storage.sync.get("GITHUB_REPO", ({ GITHUB_REPO }) => {
    githubRepoInput.value = GITHUB_REPO;
});


saveOptionsBtn.addEventListener("click", (event) => {
    chrome.storage.sync.set({ GITHUB_REPO: githubRepoInput.value });
})


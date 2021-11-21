var isFirefox = typeof InstallTrigger !== 'undefined';

let brwsr;
if (isFirefox && browser !== undefined) {
    brwsr = browser;
} else {
    brwsr = chrome;
}

const GITHUB_BASE_URL = "https://github.com";
const PREFIX_issues = "issues";
const PREFIX_pr = "pull";
let githubRepo = "";

let userInput = document.getElementById("issueNumerInput");
let linkForIssuePage = document.getElementById("linkForIssuePage");
let linkForPRPage = document.getElementById("linkForPRPage");
let linkForRepoPage = document.getElementById("linkForRepoPage");

userInput.addEventListener("change", (event) => {
    let userInputValue = event.target.value;
    let githubIssueLink = createUri(GITHUB_BASE_URL, githubRepo, PREFIX_issues, userInputValue);
    let githubPRLink = createUri(GITHUB_BASE_URL, githubRepo, PREFIX_pr, userInputValue)
    linkForIssuePage.href = githubIssueLink;
    linkForPRPage.href = githubPRLink;
});

brwsr.storage.local.get("GITHUB_REPO", ({ GITHUB_REPO }) => {
    githubRepo = GITHUB_REPO;
    linkForRepoPage.href = createUri(GITHUB_BASE_URL, githubRepo);
    document.getElementById("repoName").innerHTML = githubRepo;
});

// utils
const createUri = (base, ...other) => {
    let uriString = getUri(base);

    if (other.length > 0) {
        other.forEach(el => {
            uriString = getUri(uriString).concat(el);
        });
    }

    return uriString;
}

const getUri = (str) => {
    return str.endsWith("/") ? str : str.concat("/");
}


/* ===============================
   CAREERNEST JOB FILTERING
================================ */

const jobSearchForm = document.getElementById("jobSearchForm");
const jobSearchInput = document.getElementById("jobSearch");
const jobLocationInput = document.getElementById("jobLocation");
const searchMessage = document.getElementById("searchMessage");

const jobCards = document.querySelectorAll(".job-card");
const categoryCards = document.querySelectorAll(".category-card");

// Store the selected category
let currentCategory = "";

// Filter and update all job cards

function filterJobs() {
    const keyword = jobSearchInput.value.trim().toLowerCase();
    const location = jobLocationInput.value.trim().toLowerCase();

    let visibleJobs = 0;

    jobCards.forEach(function (card) {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const company = card.querySelector(".company-name").textContent.toLowerCase();
        const details = card.querySelector(".job-details").textContent.toLowerCase();
        const category = (card.dataset.category || "").toLowerCase();

        const matchesKeyword =
            !keyword ||
            title.includes(keyword) ||
            company.includes(keyword);

        const matchesLocation =
            !location || details.includes(location);

        const matchesCategory =
            !currentCategory || category === currentCategory;

        const matches =
            matchesKeyword &&
            matchesLocation &&
            matchesCategory;

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleJobs++;
        }
    });

    if (searchMessage) {
        if (visibleJobs === 0) {
            searchMessage.textContent =
                "No jobs found. Try a different search.";
        } else if (keyword || location || currentCategory) {
            searchMessage.textContent =
                `Showing ${visibleJobs} job${visibleJobs === 1 ? "" : "s"}.`;
        } else {
            searchMessage.textContent = "";
        }
    }
}

/* LIVE SEARCH WHILE TYPING */

if (jobSearchInput) {
    jobSearchInput.addEventListener("input", filterJobs);
}

if (jobLocationInput) {
    jobLocationInput.addEventListener("input", filterJobs);
}


// Search form
if (jobSearchForm) {
    jobSearchForm.addEventListener("submit", function (event) {
        event.preventDefault();
        filterJobs();

        document.getElementById("jobs")
            ?.scrollIntoView({ behavior: "smooth" });
    });
}

// Category cards
categoryCards.forEach(function (card) {
    card.addEventListener("click", function (event) {
        event.preventDefault();

        currentCategory =
            (card.dataset.category || "").toLowerCase();

        filterJobs();

        document.getElementById("jobs")
            ?.scrollIntoView({ behavior: "smooth" });
    });
});

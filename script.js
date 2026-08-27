
const searchInput = document.querySelector(".text-box textarea");
const searchBox = document.querySelector(".search-box");

searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        let query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${query}`;
        }
    }
});

document.querySelector(".shbox").addEventListener("click", () => {
    let name = prompt("Shortcut name?");
    let url = prompt("URL daalo");
    if (name && url) {
        console.log("Shortcut added:", name, url);
    }
});
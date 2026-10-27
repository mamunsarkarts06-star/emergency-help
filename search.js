const searchBox = document.getElementById("search");
const items = document.querySelectorAll(".list-item");

searchBox.addEventListener("input", function () {
    const text = searchBox.value.toLowerCase();

    items.forEach(function (item) {
        if (item.textContent.toLowerCase().includes(text)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
});
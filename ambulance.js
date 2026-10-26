// ===== শুধু এই অংশটা বদলাবে =====
const ambulances = [
    {
        name: "Square Hospital Ambulance Service",
        area: "Panthapath, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Manikganj Sador Hospital Ambulance Service",
        area: "Manikganj sador, Manikganj",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Pabna Sador Hospital Ambulance Service",
        area: "Manikganj sador, Pabna",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Savar Model Hospital Ambulance Service",
        area: "Savar, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Enam Medical College & Hospital Ambulance Service",
        area: "Savar thana rode, Savar",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Evercare Ambulance Service",
        area: "Bashundhara R/A, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Kurmitola Ambulance Service",
        area: "Kurmitola, Dhaka Cantonment",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },

    {
        name: "United Hospital Ambulance Service",
        area: "Satarkul, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Labaid Hospital Ambulance Service",
        area: "Dhanmondi, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Popular Diagnostic Centre Ambulance Service",
        area: "Dhanmondi, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Ibn Sina Hospital Ambulance Service",
        area: "Dhanmondi, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Bangladesh Specialized Hospital Ambulance Service",
        area: "Shyamoli, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    },
    {
        name: "Anwer Khan Modern Medical College Hospital Ambulance Service",
        area: "Dhanmondi, Dhaka",
        driver: "Driver Name",
        phone: "01XXXXXXXXX"
    }




];

// ===== No change below =====


const list = document.getElementById("ambulance-list");
const searchBox = document.getElementById("search");

function showList(items) {
    list.innerHTML = "";

    if (items.length === 0) {
        list.innerHTML = "<p>No result found.</p>";
        return;
    }

    items.forEach(function (item) {
        list.innerHTML += `
            <div class="list-item">
                <h3>${item.name}</h3>
                <p class="area">${item.area}</p>
                <p class="driver">Driver: ${item.driver}</p>
                <a href="tel:${item.phone}" class="call-small">Call ${item.phone}</a>
            </div>
        `;
    });
}

showList(ambulances);

searchBox.addEventListener("input", function () {
    const text = searchBox.value.toLowerCase();

    const result = ambulances.filter(function (item) {
        return item.name.toLowerCase().includes(text) ||
               item.area.toLowerCase().includes(text);
    });

    showList(result);
});
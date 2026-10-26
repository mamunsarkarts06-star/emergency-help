// ===== শুধু এই অংশটা বদলাবে =====
const ambulances = [
    {
        name: "Square Hospital Ambulance Service",
        area: "Panthapath, Dhaka",
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
    }
];
// ===== এর নিচে কিছু বদলাবে না =====

const list = document.getElementById("ambulance-list");

ambulances.forEach(function (item) {
    list.innerHTML += `
        <div class="list-item">
            <h3>${item.name}</h3>
            <p class="area">${item.area}</p>
            <p class="driver">Driver: ${item.driver}</p>
            <a href="tel:${item.phone}" class="call-small">Call ${item.phone}</a>
        </div>
    `;
});
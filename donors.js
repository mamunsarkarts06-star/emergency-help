// ===== শুধু এই অংশটা বদলাবে (নমুনা তথ্য) =====
const donors = [
    { name: "Sample Donor 1", group: "A+", area: "Mirpur, Dhaka",  phone: "01XXXXXXXXX" },
    { name: "Sample Donor 2", group: "B+", area: "Uttara, Dhaka",  phone: "01XXXXXXXXX" },
    { name: "Sample Donor 3", group: "O+", area: "Savar, Dhaka",   phone: "01XXXXXXXXX" },
    { name: "Sample Donor 4", group: "O-", area: "Khulna Sadar",   phone: "01XXXXXXXXX" },
    { name: "Sample Donor 5", group: "A+", area: "Rajshahi Sadar", phone: "01XXXXXXXXX" }
];
// ===== এর নিচে কিছু বদলাবে না =====

const list = document.getElementById("donor-list");
const groupBox = document.getElementById("group");

function showDonors(items) {
    list.innerHTML = "";

    if (items.length === 0) {
        list.innerHTML = `
            <div class="list-item">
                <p>No donor found for this blood group.</p>
            </div>
        `;
        return;
    }

    items.forEach(function (donor) {
        list.innerHTML += `
            <div class="list-item">
                <span class="blood-badge">${donor.group}</span>
                <h3>${donor.name}</h3>
                <p class="area">${donor.area}</p>
                <a href="tel:${donor.phone}" class="call-small">Call ${donor.phone}</a>
            </div>
        `;
    });
}

showDonors(donors);

groupBox.addEventListener("change", function () {
    const chosen = groupBox.value;

    if (chosen === "all") {
        showDonors(donors);
    } else {
        const result = donors.filter(function (donor) {
            return donor.group === chosen;
        });
        showDonors(result);
    }
});
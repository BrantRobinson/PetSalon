let pets = [
    {
        name: "Fido",
        bday: "2020-09-13",
        gender: "male",
        service: "bath",
        type: "dog",
        timeIn: "14:30:08"
    },
    {
        name: "Daisy",
        bday: "2022-01-22",
        gender: "female",
        service: "nails clipped",
        type: "cat",
        timeIn: "14:32:22"
    },
    {
        name: "Tweetie",
        bday: "2024-06-06",
        gender: "male",
        service: "wings clipped",
        type: "bird",
        timeIn: "14:12:32"
    }
];

calculateTotalPets ();
populateRegTable ()

function calculateTotalPets () {
    let totalPets = pets.length;
    document.getElementById("js-total-pets").innerHTML = totalPets;
}

function populateRegTable () {
    for (let i = 0; i < pets.length; i++) {
        document.getElementById("js-registration-table").innerHTML += `
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].type}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].timeIn}</td>
        </tr>`
    }
}
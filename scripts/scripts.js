//create array of pets
// let pets = [
//     {
//         name: "Fido",
//         bday: "2020-09-13",
//         gender: "male",
//         service: "bath",
//         type: "dog",
//         timeIn: "14:30:08"
//     },
//     {
//         name: "Daisy",
//         bday: "2022-01-22",
//         gender: "female",
//         service: "nails clipped",
//         type: "cat",
//         timeIn: "14:32:22"
//     },
//     {
//         name: "Tweetie",
//         bday: "2024-09-05",
//         gender: "male",
//         service: "wings clipped",
//         type: "bird",
//         timeIn: "14:12:32"
//     }
// ];
//create pets object constructor instead of using the array method above
class Pet {
  constructor(name, bday, gender, service, type, timeIn) {
    this.name = name;
    this.bday = bday;
    this.gender = gender;
    this.service = service;
    this.type = type;
    this.timeIn = timeIn;
  }
}

//add 3 pets using the constructor

let pets = [
  new Pet("Fido", "2020-09-13", "male", "bath", "dog", "2:30:08 PM"),
  new Pet("Daisy", "2022-01-22", "female", "nails clipped", "cat", "2:32:22 PM"),
  new Pet("Tweetie", "2024-09-05", "male", "wings clipped", "bird", "2:48:32 PM")
];


const salon = {
    name: "Spite Pet Salon",
    street: "123 Main St.",
    city: "San Diego",
    state: "CA",
    zip: "91942",
    owner: "Larry David",
    about: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate ex ipsam nam fugiat deleniti commodi in. Explicabo fugit atque illo quibusdam nesciunt illum, quia, a vero eos id officiis animi!"
}

//add up the number of pets in the pets array and display it
function calculateTotalPets () {
    let totalPets = pets.length;
    document.getElementById("js-total-pets").innerHTML = totalPets;
}

//calculates the age of the pet based on the birthday and stores it in each object of the array. I chose to use bdays instead of ages in case this is something that will be stored later since ages change.
function calculateTotalAge () {
    const today = new Date();

    pets.forEach(pet => {
        const bday = new Date(pet.bday);
        //calculate approximate age
        let age = today.getFullYear() - bday.getFullYear();
        //adjust age if bday hasn't passed yet
        //see if month hasn't arrived yet or if it is the birth month, if the day hasn't arrived yet
        const hasBdayNotPassed =
        (today.getMonth() < bday.getMonth()) ||
        ((today.getMonth() == bday.getMonth()) && (today.getDate() <= bday.getDate())) 

        //if birthday has not passed then subtract a year from age
        if(hasBdayNotPassed) {
            age --;
        }
        //store the age in the object
        pet.age = age;
    });
    //recalculate average age each time a new pet is added
    calculateAverageAges();
    }


//calculate the average age of pets in the table
function calculateAverageAges () {
    let totalAge = 0;
    pets.forEach(pet => {
        totalAge = totalAge + pet.age;
    });
    const averageAge = (totalAge / pets.length).toFixed(1);

    //diplay average age on webpage
    document.getElementById("js-average-age").innerHTML = `${averageAge} years old`;
}
//populates the registration table
function populateRegTable () {
    for (let i = 0; i < pets.length; i++) {
        document.getElementById("js-registration-table").innerHTML += `
        <tr>
            <td>${pets[i].name}</td>
            <td class="no-display">${pets[i].type}</td>
            <td class="no-display">${pets[i].age}</td>
            <td>${pets[i].service}</td>
            <td>${pets[i].timeIn}</td>
        </tr>`
    }
}

//clears the registration table to add the ability to add more pets and not get duplicates
function clearRegTable () {
    document.getElementById("js-registration-table").innerHTML = "";
}

//testing out adding a pet to the array using push function
function addPet() {
    let now = new Date();
    pets.push(new Pet("Brant", "1979-01-26", "male", "brain checked", "human", now.toLocaleTimeString()));

//recalulate ages and average age, clear the table and repopulate
    calculateTotalPets ();
    calculateTotalAge ();
    clearRegTable ();
    populateRegTable ();
}

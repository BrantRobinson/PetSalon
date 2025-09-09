
//populates the registration cards
function populateRegCards() {
  const container = document.getElementById("js-regCards");
  container.innerHTML = ""; // clear old content

  for (let i = 0; i < pets.length; i++) {
    container.innerHTML += `
      <div class="col-md-4 mb-3">
        <div class="card shadow-lg h-100">
          <div class="card-body">
            <h5 class="card-title">${pets[i].name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${pets[i].type}</h6>
            <p class="card-text">Service: ${pets[i].service}</p>
            <p>Time In: ${pets[i].timeIn}</p>
            <p>Age: ${pets[i].age}</p>
          </div>
        </div>
      </div>`;
  }
}

console.log("connected");

calculateTotalAge();
populateRegCards();
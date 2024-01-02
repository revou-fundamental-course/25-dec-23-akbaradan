function hitungSegitiga() {
    // Fetching input values
    var alas = parseFloat(document.getElementById("alas").value);
    var tinggi = parseFloat(document.getElementById("tinggi").value);

    // Validating input
    if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
        alert("Please enter valid positive numbers for Alas and Tinggi.");
        return;
    }

    // Calculating area and perimeter
    var luas = 0.5 * alas * tinggi;
    var keliling = alas + tinggi + Math.sqrt(alas**2 + tinggi**2);

    // Displaying result as Bootstrap cards
    var resultContainer = document.getElementById("hasil");

    // Create Luas card
    var luasCard = document.createElement("div");
    luasCard.classList.add("col");
    luasCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Luas Segitiga</h5>
                <p class="card-text text-center">${luas.toFixed(2)} cm<sup>2</sup></p>
            </div>
        </div>
    `;
    resultContainer.appendChild(luasCard);

    // Create Keliling card
    var kelilingCard = document.createElement("div");
    kelilingCard.classList.add("col");
    kelilingCard.innerHTML = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title text-center">Keliling Segitiga</h5>
                <p class="card-text text-center">${keliling.toFixed(2)} cm</p>
            </div>
        </div>
    `;
    resultContainer.appendChild(kelilingCard);
}
function resetResults() {
    document.getElementById("hasil").innerHTML = "";
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
}

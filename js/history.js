// Call History section
let buttonForHistory = document.querySelectorAll('.call-button');

for (let button of buttonForHistory) {
    button.addEventListener('click', function () {
        let card = this.closest('.card-container');
        let cardTittle = card.querySelector('.card-tittle').innerText;
        let number = card.querySelector('.number').innerText;

        let createHistory = document.createElement("div");
        createHistory.className = "bg-[#66666617] px-2 py-5 flex justify-between items-center rounded-sm  mb-3";
        createHistory.innerHTML = `
            <div>
            <h1 class="text-black font-semibold">${cardTittle}</h1>
            <p class="text-[#666666]">${number}</p>
            </div>
            <div> 
                <p>${new Date().toLocaleTimeString()}</p> 
            </div>    
                `;
        let historyCard = document.querySelector('.history-card');
        historyCard.appendChild(createHistory);

    });

};

// clear all history 
document.getElementById('clearButton')
    .addEventListener('click', function () {
        let historyCard = document.querySelector('.history-card');
        historyCard.innerText = "";
    });



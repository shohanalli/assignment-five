let copyButtons = document.querySelectorAll('.copy-button');

for (let copyButton of copyButtons){
    copyButton.addEventListener("click", function (){
        let card = this.closest('.card-container');
        let number = card.querySelector('.number').innerText;
        alert("নাম্বার কপি হয়েছে : " + number);
        navigator.clipboard.writeText(number);
        let copyCount = document.querySelector('.copy-count');
        let currentCount = parseInt(copyCount.innerText);
        copyCount.innerText = currentCount + 1;
    });



};
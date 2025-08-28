//  4. Heart Icons
// Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar
let hartCounter = document.getElementById('hart-counter');
let hartButtons = document.getElementsByClassName('hart-button');

for(let hartButton of hartButtons){
    hartButton.addEventListener('click', function(){
    let counter = parseInt(hartCounter.textContent);
    hartCounter.textContent = counter + 1;
  });
};

// On clicking a card's **Call Button**, following actions will happen
var callButtons = document.querySelectorAll(".call-button");

for(let callButton of callButtons){
  callButton.addEventListener('click', function () {
    let card = this.closest('.card-container');
    let cardTittle = card.querySelector('.card-tittle');
    let number = card.querySelector('.number');

    let coinCounter =document.querySelector('.coin-counter');
    let coinCounterConvert = parseInt(coinCounter.innerText);

    if (coinCounterConvert < 20){

      alert("আপনার পর্যাপ্ত কয়েন নাই, কল করতে কমপক্ষে ২০ টি কয়েন প্রয়োজন");
    }else{
          alert (cardTittle.innerText + " - " + number.innerText);
       let newCoins = coinCounterConvert - 20;
       coinCounter.innerText = newCoins;
    }
   

  })
}



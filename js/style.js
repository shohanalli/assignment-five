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
'use strict';
let items =[];
let divEl = document.getElementById('conrainer');
let img1 = document.getElementById('firstImg');
let img2 = document.getElementById('secondImg');
let img3 = document.getElementById('thirdImg');
let maxRounds = 25;
let rounds = 1;


function Solditems(itemName) {
    this.name = itemName.split('.')[0];
    this.img = 'img/' + itemName;
    this.clicks=0;
    this.views=0;
    items.push(this);

}

let images = ['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];

for (let i=0; i<images.length; i++) {
    new Solditems(images[i])
}

function randImg (){
   return Math.floor ((Math.random())*images.length);
}

function render() {
    let firstImg = randImg();
    window.firstImg2=firstImg
    let secondImg = randImg();
    window.secondImg2=secondImg
    let thirdImg = randImg();
    window.thirdImg2=thirdImg
    while (firstImg === secondImg || firstImg === thirdImg || secondImg === thirdImg ) {
        firstImg = randImg();
        secondImg= randImg();
    }
    img1.setAttribute('src', items[firstImg].img);
    img2.setAttribute('src', items[secondImg].img);
    img3.setAttribute('src', items[thirdImg].img);
    items[firstImg].views++;
    items[secondImg].views++;
    items[thirdImg].views++;
}

render ();

img1.addEventListener('click',interaction);
img2.addEventListener('click',interaction);
img3.addEventListener('click',interaction);
function interaction(event) {
if (rounds<=maxRounds){
    let chosen1=event.target.id;
    if (chosen1==='firstImg') {
        items[firstImg2].clicks++;
}
else if (chosen1==='secondImg') {
    items[secondImg2].clicks++;
}
else if (chosen1==='thirdImg') {
    items[thirdImg2].clicks++;
}
render();
}
else {
    let divEl2=document.getElementById('container2')
    let button = document.getElementById('button');
    button.addEventListener('click',Results);
    function Results(event) {
        let ulEl=document.createElement('ul');
        divEl2.appendChild(ulEl);
        for (let i=0; i<items.length; i++) {
            let liEl=document.createElement('li')
            liEl.textContent= items[i].name + ' has ' + items[i].clicks+' votes and ' +items[i].views+' views'
            ulEl.appendChild(liEl);
        }
        
    }
    
}
rounds++;
}

'use strict';
let items =[];
let divEl = document.getElementById('conrainer');
let img1 = document.getElementById('firstImg');
let img2 = document.getElementById('secondImg');
let img3 = document.getElementById('thirdImg');
let maxRounds = 25;
let rounds = 1;
let currentImg=[];
let names =[];
let votes=[];
let shows =[];
let total=0;


function Solditems(itemName) {
    this.name = itemName.split('.')[0];
    this.img = 'img/' + itemName;
    this.clicks=0;
    this.views=0;
    
    items.push(this);
    names.push (this.name);

    

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
    window.firstImg2=firstImg;
    let secondImg = randImg();
    window.secondImg2=secondImg;
    let thirdImg = randImg();
    window.thirdImg2=thirdImg;
    
    
   
    while (firstImg === secondImg || firstImg === thirdImg || secondImg === thirdImg|| currentImg.includes(firstImg) || currentImg.includes(secondImg)|| currentImg.includes(thirdImg)) {
        firstImg = randImg();
        secondImg= randImg();
        thirdImg=randImg();

    }
    
    img1.setAttribute('src', items[firstImg].img);
    img1.setAttribute('alt', items[firstImg].name);
    img2.setAttribute('src', items[secondImg].img);
    img2.setAttribute('alt', items[secondImg].name);
    img3.setAttribute('src', items[thirdImg].img);
    img3.setAttribute('alt', items[thirdImg].name);
    items[firstImg].views++;
    items[secondImg].views++;
    items[thirdImg].views++;
    currentImg[0]=firstImg;
    currentImg[1]=secondImg;
     currentImg[2]=thirdImg;
     if (rounds===maxRounds) {
        img1.removeEventListener('click', interaction);
        img2.removeEventListener('click',interaction);
        img3.removeEventListener('click',interaction);
         storage1();
         storage2
         ulEl2.textContent=null;
         total = total + ulEl;
     }
    
}


render ();

img1.addEventListener('click',interaction);
img2.addEventListener('click',interaction);
img3.addEventListener('click',interaction);
function interaction(event) {
if (rounds<=maxRounds){
    let chosen1=event.target.id;
    if (chosen1==='firstImg') {
        items[currentImg[0]].clicks++;
}
else if (chosen1==='secondImg') {
    items[currentImg[1]].clicks++;
}
else if (chosen1==='thirdImg') {
    items[currentImg[2]].clicks++;
}
render();
}
else {
    let divEl2=document.getElementById('container2')
    let button = document.getElementById('button');
    button.addEventListener('click',Results);
    function Results(event) {
        
        let ulEl=document.createElement('ul');
        window.ulEl2=ulEl;
        divEl2.appendChild(ulEl);
        for (let i=0; i<items.length; i++) {
            let liEl=document.createElement('li')
            liEl.textContent= items[i].name + ' has ' + items[i].clicks+' votes and ' +items[i].views+' views'
            ulEl.appendChild(liEl);
            votes.push(items[i].clicks);
            shows.push(items[i].views);
        }
        
       button.removeEventListener('click',Results);
    }
  img1.removeEventListener('click', interaction);
  img2.removeEventListener('click',interaction);
  img3.removeEventListener('click',interaction); 
  barChart();

  }
  rounds++;
  
}

function barChart() {
    let ctx = document.getElementById('barchart').getContext('2d');
    let barchart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: 'no. of Votes',
                data: votes,
                backgroundColor: [
                    'rgba(125, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(245, 99, 132, 1)',
                ],
                borderWidth: 2
            },
            {
                label: 'no. of views',
                data: shows,
                backgroundColor: [
                    'rgba(210, 110, 90, 0.2)',
                ],
                borderColor: [
                    'rgba(300, 199, 120, 0.2)',
                ],
                borderWidth: 2
            }]
        },
        options: {
            // scales: {
                // y: {
                //     beginAtZero: true
                // }
            // }
        }
    });
}
 
// barChart();
// let total =0;
function storage1 () {
    let data = JSON.stringify(items);
    localStorage.setItem('products',items);
}
function storage2 () {
    let obj = JSON.parse(localStorage.getItem('products'));
   total = total + ulEl
    // render();
}
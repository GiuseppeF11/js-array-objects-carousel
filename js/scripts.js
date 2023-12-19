// Test funzionamento

console.log('Template html css js')

// VARIABILI SELEZIONATE

const prevBtn = document.querySelector('.prevBtn');
console.log('prevBtn' , prevBtn , typeof prevBtn);

const nextBtn = document.querySelector('.nextBtn');
console.log('nextBtn' , nextBtn , typeof nextBtn);

const playBtn = document.querySelector('.playBtn');
console.log('playBtn' , playBtn , typeof playBtn);



const item = document.querySelector('.item');
console.log('item' , item , typeof item);

const items = document.querySelector('.items')

// ARRAY

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

console.log('images', images, images.length, typeof images);

//Uso il ciclo for per prendere tutti gli oggetti dell'array
for (let i = 0; i < images.length; i++) {
    //Creo un div chiamato item ed aggiungo la classe item
    let item = document.createElement('div');
    item.classList.add('item');

    // Uso il ciclo forIn per selezionare le chiavi all'interno degli oggetti dell'array
    for (let key in images[i]) {
        console.log('CHIAVE: ' + key + ':', images[i][key]);

        //Se la chiave è una foto aggiungo ad item un tag img con dentro la chiave (altrimenti stampo e basta)
        if(key  === 'url') {
            item.innerHTML += `<img src="${images[i][key]}">`
        } else {
            item.innerHTML += images[i][key] + '<br>';
        }
        
    }

    if (i == 0) {
        item.classList.add('active')
    }

    items.append(item);
}

let imgAttiva = 0;

const allItems = document.querySelectorAll('.item');
console.log('allitems' , allItems , typeof allItems);

//   BONUS
var clock = setInterval(autoPlay, 3000);
function autoPlay() {
    
    console.log(allItems , imgAttiva)
  if (imgAttiva < (allItems.length -1)) {

            //Tolgo la classe active dall'elemento attualmente visibile
        allItems[imgAttiva].classList.remove('active');

        // Incremento la variabile
        imgAttiva++ ;

        //Aggiungo la classe active all'elemento successivo
        allItems[imgAttiva].classList.add('active');

        playBtn.addEventListener('click', function() {
            clearInterval(clock)
        })
    }

    // PER IL CICLO INFINITO

    else { // Se l'immagine attiva è l'ultima

        allItems[imgAttiva].classList.remove('active');

        imgAttiva = 0;  //  Selezionami la prima immagine

        allItems[imgAttiva].classList.add('active');  
    }
}

nextBtn.addEventListener('click', function(){
  if (imgAttiva < (allItems.length -1)) {

      //Tolgo la classe active dall'elemento attualmente visibile
    allItems[imgAttiva].classList.remove('active');

    // Incremento la variabile
    imgAttiva++ ;

    //Aggiungo la classe active all'elemento successivo
    allItems[imgAttiva].classList.add('active');  
  }

  // PER IL CICLO INFINITO

  else if (imgAttiva = (allItems.length -1)) { // Se l'immagine attiva è l'ultima

  allItems[imgAttiva].classList.remove('active');

  imgAttiva = 0 ;  //  Selezionami la prima immagine

  allItems[imgAttiva].classList.add('active');  
}
})

prevBtn.addEventListener('click', function(){
  if (imgAttiva > 0) {

      //Tolgo la classe active dall'elemento attualmente visibile
    allItems[imgAttiva].classList.remove('active');

    // Incremento la variabile
    imgAttiva-- ;

    //Aggiungo la classe active all'elemento successivo
    allItems[imgAttiva].classList.add('active'); 
  }

  // PER IL CICLO INFINITO 
  else if (imgAttiva == 0) {    // (Se l'immagine attiva è la prima )

    allItems[imgAttiva].classList.remove('active');
  
    imgAttiva = (allItems.length - 1);  //  (Selezionami l'ultima immagine)
  
    allItems[imgAttiva].classList.add('active');  
  }
})
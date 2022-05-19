window.onload = () => {
    schimb_stil();
  document.getElementById('addNews').onclick = addNews;
  document.getElementById('removeNews').onclick = removeNews;
  document.getElementById('biggerFont').onclick = () => incrementFontSize(1);
  document.getElementById('smallerFont').onclick = () => incrementFontSize(-1);
  toggleInterval();
  document.getElementById('buton').addEventListener('click', toggleInterval);
  const barButton = document.querySelector('.user-bar #changeDetails');
  const removeButton = document.querySelector('#removeDetails');
  const refreshButton = document.getElementById('refresh');
  barButton.addEventListener('click', changeDetails);
  removeButton.addEventListener('click', removeDetails);
  refreshButton.addEventListener('click', () => {
    window.location.reload();
  });
  renderBar();
};
function schimb_stil()
{
   document.getElementById("p1").style.fontFamily = "Fantasy";
}
const news = [
    {
      title: "Preistorie și istorie antică",
      short_description: "Dovezi ale locuirii lui Neanderthal din Gibraltar de acum aproximativ 50.000 de ani au fost descoperite la Peștera lui Gorham. Peșterile din Gibraltar au continuat să fie folosite de Homo sapiens după dispariția finală a oamenilor de Neanderthal. Unelte de piatră, vetre antice și oase de animale datând de acum aproximativ 40.000 de ani până în urmă cu aproximativ 5.000 de ani au fost găsite în depozitele rămase în Peștera lui Gorham.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/John_Mace_-_North_View_of_Gibraltar_from_Spanish_Lines.jpg/450px-John_Mace_-_North_View_of_Gibraltar_from_Spanish_Lines.jpg",
      datePublished: "2022-03-15",
    },
    {
      title: "Detalii geografice",
      short_description: "Teritoriul Gibraltarului se întinde pe 6,7 kilometri pătrați (2,6 mile pătrate) și împarte o graniță terestră de 1,2 kilometri (0,75 mile) cu Spania. Orașul La Línea de la Concepción, un municipiu din provincia Cádiz, se află pe partea spaniolă a graniței. Hinterlandul spaniol formează comarca Campo de Gibraltar (literalmente „Țara Gibraltarului”). Linia țărmului măsoară 12 kilometri (7,5 mile) în lungime.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Gibraltar2021OSM.png/330px-Gibraltar2021OSM.png",
      datePublished: "2022-03-14",
    },
    {
      title: 'Detalii demografice',
      short_description: "Gibraltar este unul dintre cele mai dens populate teritorii din lume, cu o populație rezidentă în mod obișnuit în 2012 de 32.194, echivalentul a aproximativ 4.959 de locuitori pe kilometru pătrat (12.840/sq mi). Cererea tot mai mare de spațiu este satisfăcută din ce în ce mai mult prin recuperarea terenurilor; terenurile recuperate reprezintă aproximativ o zecime din suprafața totală a teritoriului.",
      image: "https://www.indexmundi.com/flags/gi-lgflag.gif",
      datePublished: "2022-03-15",
    }
  ];
let newsIdx = 0;
function addNews() 
{
    const newsArticle = news[newsIdx];
    const articleElement = document.createElement('div');
    articleElement.classList.add('news-article');
    articleElement.title = 'Data publicării: ' + new Date(newsArticle.datePublished).toLocaleDateString();
  
    const articleContent = document.createElement('div');
    articleContent.classList.add('content');
  
    const h1 = document.createElement('h1');
    h1.textContent = newsArticle.title;
  
    const p = document.createElement('p');
    p.textContent = newsArticle.short_description;
  
    articleContent.append(h1, p);
  
    const img = document.createElement('img');
    img.src =newsArticle.image;
  
    articleElement.append(img, articleContent);
  
    document.querySelector('#newsContainer').append(articleElement);
  
    newsIdx = (newsIdx + 1) % news.length;
  }
  
  function removeNews() 
  {
    document.querySelector('#newsContainer').lastChild?.remove();
  }

  function incrementFontSize(by)
   {
    const htmlEl = document.querySelector("html");
    const current = parseInt(htmlEl.style.fontSize) || 12;
    htmlEl.style.fontSize = (current + by) + "px";
  }
const myTimeout = setTimeout(myGreeting, 5000);
function myGreeting() 
{
    document.getElementById("monkey").innerHTML = "MONKEY ATTACK!!!!"
}
function myStopFunction() 
{
    clearTimeout(myTimeout);
}
let seconds = 0;
let intervalId = null;

function toggleInterval() {
  const stop = intervalId != null;
  document.getElementById('buton').textContent = stop ? 'Rezumă' : 'Pauză';
  if(stop) {
    clearInterval(intervalId);
    intervalId = null;
  } else {
    intervalId = setInterval(() => {
      seconds++;
      document.getElementById('mesaj').textContent = `Stai pe această pagină de ${seconds} secunde.`;
    }, 1000);
  }
}
function renderBar() {
    const barMessage = document.querySelector('.user-bar .message');
    const barButton = document.querySelector('.user-bar #changeDetails');
    let userDetails = null;
    try {
      userDetails = JSON.parse(localStorage.getItem('userDetails'));
    } catch (error) {
      userDetails = null;
    }
    if(userDetails) {
      barMessage.innerHTML = `Bine ai venit, ${userDetails.name}! Ai ${userDetails.age} ani.`;
      barButton.innerHTML = "Schimbă detaliile";
    } else {
      barMessage.innerHTML = "Bine ai venit! Nu știm nimic despre tine...";
      barButton.innerHTML = "Adăugă detalii";
    }
  }
  
  function changeDetails() {
    const name = prompt('Introdu numele tău');
    if(!name) return;
    const age = prompt('Introdu vârsta');
    if(!age) return;
    const userDetails = { name, age };
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    renderBar();
  }
  
  function removeDetails() {
    localStorage.removeItem('userDetails');
    renderBar();
  }
  let para = document.getElementById('get_computed_style');
    let compStyles = window.getComputedStyle(para);
    para.textContent = 'My computed font-size is ' +
    compStyles.getPropertyValue('font-size') +
    ',\nand my computed line-height is ' +
    compStyles.getPropertyValue('line-height') +
    '.';
    function myFunction() {
        const element = document.getElementById("myDiv");
        const rect = element.getBoundingClientRect();
      
        document.getElementById("demo1").innerHTML ="Left: " + rect.left.toFixed() + ", Top: " + rect.top.toFixed() + ", Width: " + rect.width + ", Height: " + rect.height;
    }
      
    function myFunction(event) { 
       var x = event.target;
    document.getElementById("trigger").innerHTML = "Triggered by a " + x.tagName + " element";
    }
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const bod = document.querySelector('.landing');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
  bod.style.filter = 'blur(5px)';
}

function close() {
  mainMenu.style.top = '-100%';
  bod.style.filter = 'none';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const homeCard = document.getElementById('home-portfolio');

const cards = [{
  id: 1,
  title: 'Tonic',
  imageM: './images/Portfolio.png',
  imageD: './images/Portfolio1-big.png',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
},
{
  id: 2,
  title: 'Tonic',
  imageM: './images/multi-post.png',
  imageD: './images/Portfolio2.png',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
},
{
  id: 3,
  title: 'Tonic',
  imageM: './images/Portfolio3.png',
  imageD: './images/PopUpdesktop.svg',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
},
{
  id: 4,
  title: 'Tonic',
  imageM: './images/PopUpmobile.svg',
  imageD: './images/PopUpdesktop.svg',
  heading2: ['Canopy', 'Back End Dev', '2015'],
  cardDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  languages: ['html', 'css', 'javascript'],
},
];

const portfolioCards = cards
  .map(
    (card, index) => `

<li>
<section class=" card-list card-list${index}">
                    <div>
                        <img class="card" src="${
  card.imageM
}" alt="Portfolio1" />
                        <img class="animated" src="${
  card.imageD
}" alt="nature-animated-image">
                    </div>
                    <div class="cards74">
                        <h2 class="tonic-class-${index} tonic">${card.title}</h2>
                        
                        <h5 class="heading-canopy"><b>CANOPY</b> <span><img class='counter-img' src="/portfolio/images/Counter.png"></span>
                        <small> Back End Dev <span><img  class='counter-img' src="/portfolio/images/Counter.png"></span> 2015 </small> </h5>
                        <p class="description">
                           ${card.cardDescription}
                        </p>
                        
                        <ul class="tools">
                        ${card.languages
    .map((lang) => `<li class="tools-li">${lang}</li>`)
    .join('')}
                          </ul>
                        
                       <div class="view-project">
                           <button class="btn" type="button" onclick="showPop(${
  card.id
})">See Project</button>
                        </div>
                    </div>
                </section>
            </li>

`,
  )
  .join('');

homeCard.innerHTML += portfolioCards;

const modalCards = document.getElementById('modal-cards');

const modalCard = [
  {
    id: 1,
    title: 'Tonic',
    imageM: './images/PopUpmobile.svg',
    imageD: './images/PopUpdesktopcopy.svg',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    cardDescriptionD:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is    simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea, languages: html, css, javascript",
    cardDescriptionM:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It ",
    languagesD: ['github', 'ruby', 'Bootstrap'],
    languagesM: ['html', 'css', 'javascript'],
    linkLive: 'https://silviatofana.github.io/portfolio/',
    linkSource: 'https://github.com/silviatofana/portfolio/tree/popup-window',
  },
];

const modalCardDisplay = modalCard
  .map(
    (modeCard) => `

<div class="card-portfolio-1">

            <li class="pop-close"><i class="fa fa-times"></i></li>
                <h2 class="tonic-1">${modeCard.title}</h2>
                    <h5 class="heading-canopy"><b>CANOPY</b> <span>·</span><small> Back End Dev <span>·</span> 2015 </small> </h5>
         <div class="images">
         <img class="forD-1" src="${modeCard.imageD}" alt="Pop Up Desktop" >
      <img class="forM-1" src="${modeCard.imageM}" alt="Pop Up Mobile" >

         </div>    
      
      <div>
      <div class="row">
      <div class="column-left-1">
          <p class="forD-1">
              ${modeCard.cardDescriptionM}
          </p>
          <p class="forM-1">
              ${modeCard.cardDescriptionM}
          </p>

      </div>
      <div class="column-right-1">
          <ul class="modal-1">
              ${modeCard.languagesM
    .map((lang) => `<li class="modal-2">${lang}</li>`)
    .join('')}
          </ul>
          <ul id="miss" class="miss modal-1">
          ${modeCard.languagesD
    .map((lang) => `<li class="modal-2">${lang}</li>`)
    .join('')}
          
          </ul>
          <hr>
          <ul class="modal-1">
              <li class="modal-3" href="${
  modeCard.linkLive
}">See live <img class="btnimag" src="./images/icon/Icon.png"></li>
              <li class="modal-3" href="${
  modeCard.linkSource
}">See Source <i class="fa fa-github"></i></li>

          </ul>
      </div>
  </div>
      </div>
  </div>
`,
  )
  .join('');

modalCards.innerHTML += modalCardDisplay;
const boxModal = document.querySelector('.card-portfolio-1');
const openModal = document.querySelectorAll('.btn');
const body = document.querySelector('.cards-section');

openModal.forEach((open) => {
  open.addEventListener('click', () => {
    boxModal.style.display = 'block';
    body.style.filter = 'blur(5px)';
  });
});

// to close a modal
const popClose = document.querySelector('.pop-close');
popClose.addEventListener('click', () => {
  boxModal.style.display = 'none';
  body.style.filter = 'none';

});

// Form Validation

const email = document.getElementById('email');
const form = document.getElementById('form-email');
const displayMsg = document.getElementById('form-message-error');
displayMsg.innerHTML = 'Your email address should be in lowercase';
form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    displayMsg.style.visibility = 'visible';
    displayMsg.classList.add('error-msg');
    setTimeout(() => {
      displayMsg.style.visibility = 'hidden';
    }, 3000);
  } else {
    displayMsg.style.visibility = 'hidden';
  }
});


// Local storage functionality
let formData = {
  full_name: '',
  email: '',
  message: '',
};

// retrieving the local storage
if (localStorage.getItem('formData') !== null) {
  const data = localStorage.getItem('formData');
  formData = JSON.parse(data);
}

// saving data to local storage

// getting form input fields and textarea
const formElements = document.querySelectorAll('input, textarea');
// looping through the elements
formElements.forEach((element) => {
  // displaying the formData values to input fields
  element.value = formData[element.name];
  // applying input event listener on elements
  element.addEventListener('input', (e) => {
    // setting the values of input fields to the respective keys in object
    formData[e.target.name] = e.target.value;
    // saving the data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
  });
});

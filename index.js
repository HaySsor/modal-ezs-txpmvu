// Import stylesheets
import './style.css';

const buttonAccepted = document.querySelector('[data-button="Accepted"]')
const buttonRejected = document.querySelector('[data-button="rejected"]')
const buttonExit = document.querySelector('[data-button="exit"]')
const challengeButton = document.querySelector('[data-button="challenge"]')
const backGround = document.querySelector('[data-background]')

function closeModal(){
  const modalBox = document.querySelector('.modalbox')
  modalBox.classList.add('accepted')
}

function openModal(){
  const modalBox = document.querySelector('.modalbox')
  const plane = document.querySelector('.plane')
  modalBox.classList.remove('accepted')
  plane.classList.remove('fly')
 
}

function acceptedModal(){
  closeModal()
  const plane = document.querySelector('.plane')
  plane.classList.add('fly')

}

buttonExit.addEventListener('click',closeModal)
buttonRejected.addEventListener('click',closeModal)
challengeButton.addEventListener('click',openModal)
buttonAccepted.addEventListener('click',acceptedModal)
backGround.addEventListener('click',(e)=>{
    if(e.target.matches('.background')){
      closeModal()
    }
})


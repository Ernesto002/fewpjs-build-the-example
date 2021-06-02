// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hiddenModal = document.getElementById('modal')
const body = document.querySelector('body')
hiddenModal.className = 'hidden'
hiddenModal
function modalclassName() {
  hiddenModal.className = 'hidden'
}
function mimicServerError() {
  mimicServerCall()
  .then((responce)=>{
    modalclassName()
    return responce
  })
  .catch(function(error) {
    hiddenModal.className = ''
    setTimeout(modalclassName,5000)
  })
}
body.addEventListener('click',function(e){
  if(e.target.className === 'like-glyph' && modal.className.className === 'hidden'){
    e.target.className = 'activated-heart'
    e.target.textContext = FULL_HEART
  }else if(e.target.className === 'activated-heart' && modal.className === 'hidden'){
    e.target.className = 'like-glyph'
    e.target.textContext = EMPTY_HEART
  }
})
mimicServerError()

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

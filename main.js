// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Get all hearts on page
const hearts = document.querySelectorAll('.like-glyph');

// Add event listener 
for (heart of hearts){
  heart.addEventListener('click',handleHeartClick);
}

// Function to handle heart getting clicked
function handleHeartClick(e){
  mimicServerCall()
  .then(()=>{
    heartClassList = e.target.classList;
    if (heartClassList.contains('activated-heart')){
      heartClassList.remove('activated-heart')
    }else{
      heartClassList.add('activated-heart')
    }
  })
  .catch((e)=> {
    console.log(e);
    const errorModal = document.querySelector("#modal");
    errorModal.classList.remove('hidden');
    const errorModalMessage = document.querySelector("#modal-message");
    errorModalMessage.textContent = e;
    setTimeout(()=>{
      errorModal.classList.add('hidden');
    },3000)
  });
  console.log(e.target);
}



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

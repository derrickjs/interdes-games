function hover(element) {
    element.setAttribute('src', 'https://res.cloudinary.com/derrickstahlman/image/upload/v1667407118/mod8_gif1_fwy13y.gif');
  }
  
  function unhover(element) {
    element.setAttribute('src', 'https://res.cloudinary.com/derrickstahlman/image/upload/v1667407130/mod8_img1_awm80y.png');
  }
  
function addAnimate(){
  document.querySelector('.headerleft').classList.add("animate__animated");
  document.querySelector('.headerleft').classList.add("animate__bounce");
}

document.querySelector('.headerleft').addEventListener("mouseenter", addAnimate)

function removeAnimate(){
  document.querySelector('.headerleft').classList.remove("animate__animated");
  document.querySelector('.headerleft').classList.remove("animate__bounce");
}

document.querySelector('.headerleft').addEventListener("mouseleave", removeAnimate)



  
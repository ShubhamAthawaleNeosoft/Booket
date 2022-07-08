$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin:60,
        center:true,
        nav:true,
        navText:[
            "<i class='bi bi-arrow-left-circle text-white'></i>",
            "<i class='bi bi-arrow-right-circle text-white'></i>",
        ]
    });
});

var toggle_btn=document.getElementById("toggle");
var mobile_links=document.getElementById("mobile_links");

function show() {
    console.log("hiiiiiiii")
    var x = document.getElementById("mobile_links");
    if (x.style.display === "none") {
      x.classList.toggle("show");
    } else {
      x.style.display = "none";
    }
  }

const boxes = document.querySelectorAll('.wishlist-icon');

boxes.forEach(box => {
  box.addEventListener('click', function handleClick(event) {
    console.log('box clicked', event);

    box.setAttribute('style', 'color: red;');
    box.classList.toggle("text-danger")
  });
});


const el = document.querySelectorAll(".bi-share");
const hiddenDiv = document.querySelectorAll(".hidden-div");
for (let i = 0; i < el.length; i++) {
  el[i].addEventListener('mouseover', function handleMouseOver() {
    hiddenDiv[i].style.display = 'block';
  });
  
  el[i].addEventListener('mouseout', function handleMouseOut() {
    hiddenDiv[i].style.display = 'none';
  });
}

const heart = document.querySelectorAll(".bi-heart");
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener('click', function handleClickEvent() {
    // hiddenDiv[i].style.display = 'block';
    heart[i].classList.toggle("bi-heart");
    heart[i].classList.toggle("bi-heart-fill");
    heart[i].classList.toggle("text-danger")
  });
}

const close_btn = document.querySelectorAll(".close");
const close_event = document.querySelectorAll(".hide_card");
for (let i = 0; i < close_event.length; i++) {
  close_btn[i].addEventListener('click', function handleClickEvent() {
    // hiddenDiv[i].style.display = 'block';
    close_event[i].style.display="none";
    
  });
}


function showevent(){
  // console.log("hiiiiiiii");
  var show_event=document.getElementById("hidden-event")
  if(show_event.style.display="none"){
    show_event.style.display="block";
  }
}
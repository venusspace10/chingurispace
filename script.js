let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[i].classList.add("active");
}

document.querySelector(".next").onclick = function(){
  index = (index + 1) % slides.length;
  showSlide(index);
};

document.querySelector(".prev").onclick = function(){
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
};

/* Auto Slide (opsional bisa dimatikan) */
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000); // ganti 5000 = 5 detik

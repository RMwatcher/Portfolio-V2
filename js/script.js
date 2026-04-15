const icons = document.querySelectorAll(".icons");

icons.forEach((icon) => {

  icon.addEventListener("mouseover", (e) => {
    e.target.style.background = "#F5E616";
  });
  
  icon.addEventListener("mouseout", (e) => {
    e.target.style.background = "#dadfe7";
  });

});

const copyrightYear = new Date();

const year = document.querySelector("#year");

year.textContent = copyrightYear.getFullYear();
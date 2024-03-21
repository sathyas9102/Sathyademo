const loader = document.querySelector("#loader");
let load = 0;
setInterval(function () {
  loader.textContent = `${load} %`;
  if (load < 60) {
    load++;
  } else {
    // just to make it repeat i used this
    setTimeout(function () {
      load = 0;
    }, 2000);
    //-----------------------------------
  }
}, 30);

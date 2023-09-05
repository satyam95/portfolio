window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
    if(window.innerWidth > 768){
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
          ) {
            document.getElementById("navbar").style.top = "0";
          } else {
            document.getElementById("navbar").style.top = "-102px";
          }
      }
}

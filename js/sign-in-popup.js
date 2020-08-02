((d, w) => {
    let popup = d.getElementById("sign-in-pop");
    let signIn = d.getElementById("sign-in-button");
    let body = d.getElementById("body");

    body.addEventListener("click", e => {
      let clicked = e.target;
      if(clicked.matches("*:not(#sign-in-pop):not(.sign_in)")){
        console.log(clicked);
        if (popup.classList.contains("box-active")) {
          // hide
          popup.classList.remove("box-active");
          popup.classList.add("box-transition");
          popup.classList.add("box-hidden");
        } else if(clicked.matches("#sign-in-button, #sign-in-button *")) {
          // show
          popup.classList.add("box-visible");
          popup.clientWidth;
          popup.classList.add("box-transition");
          popup.classList.add("box-active");
        }
      }
    });
      

  popup.addEventListener("transitionend", () => {
      popup.classList.remove("box-transition");
      popup.classList.remove("box-visible");
      popup.classList.remove("box-hidden");
    });
    
})(document, window);


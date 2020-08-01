((d, w) => {
    let popup = d.getElementById("sign-in-pop");
    let signIn = d.getElementById("sign-in-button");

    signIn.addEventListener("click", () => {
          if (popup.classList.contains("box-active")) {
            // hide
            popup.classList.remove("box-active");
            popup.classList.add("box-transition");
            popup.classList.add("box-hidden");
          } else {
            // show
            popup.classList.add("box-visible");
            popup.clientWidth;
            console.log(popup.clientWidth);
            popup.classList.add("box-transition");
            popup.classList.add("box-active");
          }
        },
        false
      );
    
      popup.addEventListener("transitionend", () => {
          popup.classList.remove("box-transition");
          popup.classList.remove("box-visible");
          popup.classList.remove("box-hidden");
        },
        false
      );
    
})(document, window);


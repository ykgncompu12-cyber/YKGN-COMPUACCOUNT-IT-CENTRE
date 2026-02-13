let formSubmitted = false;

window.onload = function () {
  if (!localStorage.getItem("hideLeadPopup")) {
    document.getElementById("leadPopup").style.display = "flex";
  }

  const iframe = document.getElementById("gForm");

  iframe.addEventListener("load", function () {
    if (formSubmitted) {
      // form submit ke baad popup close
      document.getElementById("leadPopup").style.display = "none";
      localStorage.setItem("hideLeadPopup", "true");
    } else {
      // pehli baar load
      formSubmitted = true;
    }
  });
};

function closeLead() {
  document.getElementById("leadPopup").style.display = "none";
}

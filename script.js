document.addEventListener("DOMContentLoaded", function () {
  function smoothScroll(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function scrollAndFocus() {
    smoothScroll('#form-section');
    setTimeout(() => {
      const firstInput = document.querySelector('#form-section input');
      if (firstInput) {
        firstInput.focus();
      }
    }, 400); 
  }

  const layoutButton = document.querySelector('.layout__button');
  if (layoutButton) {
    layoutButton.addEventListener('click', function(e) {
      e.preventDefault();
      scrollAndFocus();
    });
  }

  const layoutCoverImg = document.querySelector('.layout__cover-img');
  if (layoutCoverImg) {
    layoutCoverImg.addEventListener('click', function(e) {
      e.preventDefault();
      scrollAndFocus();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const phoneInput = document.querySelector("#phone-input");

  if (phoneInput) { 
    window.intlTelInput(phoneInput, {
      initialCountry: "auto",
      geoIpLookup: callback => {
        fetch('https://ipinfo.io/json')
        .then(res => res.json())
        .then(data => callback(data.country))
        .catch(() => callback("us")); 
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
  } else {
    console.error("Phone input field not found!");
  }
});
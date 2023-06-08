const input= document.querySelector('.input')
const submitBtn= document.querySelector('.btn')
const inputBox= document.querySelector('.input-box')
const errorMessage= document.querySelector('.error-message')
const errorIcon= document.querySelector('.error-icon')

let isValid = false;

validateInput()

function validateInput() {
    input.addEventListener("input", () => {
      if (input.value == "") {
        inputBox.classList.add("error");
        errorMessage.innerHTML = `Please provide a valid email`;
        errorIcon.classList.add('active')
        isValid = false;

      } else if ( input.value != "" &&
        input.value.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
      ) {
        errorIcon.classList.remove('active')
        inputBox.classList.remove("error");
        errorMessage.innerHTML = "";
        isValid = true;
      }
    });
  }
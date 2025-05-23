

let myForm = document.querySelector('#myForm');

let inputs = document.querySelectorAll('.input');


myForm.addEventListener('submit', function(e) {
  e.preventDefault();

  inputs.forEach(function(el) {
    let tempName = el.getAttribute('name');
    let tempValue;

    if (el.type === 'checkbox') {
      tempValue = el.checked;
      if(!tempValue){
         let forError_2 = document.querySelector('.for-error-2');
          showError("required",forError_2);
      }
    } else if (el.type === 'radio') {
        tempValue =  el.checked;
       if(!tempValue){
         let forError = document.querySelector('.for-error');
          showError("required",forError);
      }
    } else {
      tempValue = el.value;
      if(tempValue.length == 0){
        showError("required",el);
      }
    //   console.log(tempName + ': ' + tempValue);
    }
  });
});


function showError(message, el) {
  let errText = el.nextElementSibling;
  if (errText) {
    errText.classList.remove('hidden');
    errText.textContent = message;
  }
}

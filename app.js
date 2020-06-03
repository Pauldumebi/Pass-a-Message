(function() {
   //Select the input element
   const form = document.getElementById('form')
   const resultEntered = document.getElementById('resultEntered')
   //Set up Submit Button
   form.addEventListener('submit', function(event){
      //Prevent the form from refreshing
      event.preventDefault()
      //Get user's input from form
      const formInput = document.querySelector('#text-input')
      const feedback = document.querySelector('#feedback')
      const resultEntered = document.querySelector('#resultEntered')

      if (formInput.value === '') {
         alert('Please enter a message')
      } else {
         resultEntered.textContent = formInput.value
         formInput.value = ''
      }

   })
     resultEntered.addEventListener('submit', addResultEntered)
      function addResultEntered () {
         const resultEntered = document.createElement('addResultEntered');
         //quoteDiv.classList.add("quote");
      }
}) ()
let testString = document.getElementById('input')
let output = document.getElementById('output')
let button = document.getElementById('button')


function reversal() {
   button.addEventListener('click', function () {
      output.innerHTML = testString.value.split('').reverse().join('')
   })
}

function alphabits() {

}

function palindrome() {

}

// reversal(testString);
// alphabits(testString);
// palindrome(testString);

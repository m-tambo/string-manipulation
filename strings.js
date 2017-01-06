let string = document.getElementById('input')
let output = document.getElementById('output')
let reverseButton = document.getElementById('reverseButton')
let alphaButton = document.getElementById('alphaButton')
let palButton = document.getElementById('palindromeButton')


function reversal() {
   reverseButton.addEventListener('click', function () {
      output.innerHTML = string.value.split('').reverse().join('')
   })
}

function alphabits() {
   alphaButton.addEventListener('click', function () {
      output.innerHTML = string.value.split('').sort().join('')
   })
}

function palindrome() {
   palButton.addEventListener('click', function () {
         if (string.value === string.value.split('').reverse().join('')) {
            output.innerHTML = "It's a palindrome!"
         }
         else {
            output.innerHTML = "It's not a palindrome!"
         }
   })
}

reversal()
alphabits()
palindrome()

// clear button
document.getElementById('clear').addEventListener('click', function () {
   output.innerHTML = "";
   string.value = "";
})

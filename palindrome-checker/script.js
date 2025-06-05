const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');


const checkForPalindrome = () => {
  const regex = /[^_\W]+/g;
  const userInputString = textInput.value
  if (!userInputString) {
    alert("Please input a value");
    return;
  }

  const cleanString = Array.from(userInputString.match(regex).join('').toLowerCase());
  console.log(cleanString.join());

  const reversedString = cleanString.slice().reverse();
  console.log(reversedString.join());

  const resultText = reversedString.join('') === cleanString.join('') ? `${userInputString} is a palindrome` : `${userInputString} is not a palindrome`;

  result.style.display = 'block';
  result.textContent = resultText;
}

checkBtn.addEventListener("click", checkForPalindrome);
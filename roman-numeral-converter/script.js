const inputNumber = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const form = document.getElementById('form');

const intToRoman = (int) => {
  const numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';

  numerals.forEach((arr) => {
    while (int >= arr[1]) {
      result += arr[0];
      int -= arr[1];
    }
  });
  return result;
}

//Check for acceptable input
const isValidInput = (str, int) => {
  let alertText = '';
  
  if (!str || str.match(/[e.]+/g)) {
    alertText = "Please enter a valid number"
  } else if (int < 1) {
    alertText = "Please enter a number greater than or equal to 1"
  } else if (int > 3999) {
    alertText = "Please enter a number less than or equal to 3999"
  } else {
    return true;
  }

//Update output text
output.innerText = alertText;
output.classList.add('alert');
output.classList.remove('hidden');
return false;
}

const refreshUI = () => {
  output.classList.remove('alert');
  output.innerText = '';
}

//Handle retrieval of input and making changes to UI
const updateUI = () => {
  const inputStr = inputNumber.value;
  const int = parseInt(inputStr);

  refreshUI();

  if (isValidInput(inputStr, int)) {
    output.innerText = intToRoman(int);
    output.classList.remove('hidden');
  }
}

//Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault;
  updateUI();
})

//Handle button clicks
convertBtn.addEventListener('click', () => {
  updateUI();
})

//Handle enter key press
inputNumber.addEventListener('keydown', (e) => {
  if (e.key === "Enter") {
    updateUI();
  }
})
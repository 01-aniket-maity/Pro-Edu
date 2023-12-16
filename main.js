// flashcard code starts

const flashcardsData = [
  {
    word: 'Serendipity',
    meaning:
      'The occurrence and development of events by chance in a happy or beneficial way',
  },
  { word: 'Ephemeral', meaning: 'Lasting for a very short time' },
  { word: 'Ubiquitous', meaning: 'Present, appearing, or found everywhere' },
  { word: 'Mellifluous', meaning: 'Sweet or musical; pleasant to hear' },
  {
    word: 'Quixotic',
    meaning: 'Extremely idealistic; unrealistic and impractical',
  },
  {
    word: 'Pernicious',
    meaning: 'Having a harmful effect, especially in a gradual or subtle way',
  },
  { word: 'Eloquent', meaning: 'Fluent or persuasive in speaking or writing' },
  {
    word: 'Resilience',
    meaning: 'The capacity to recover quickly from difficulties; toughness',
  },
  {
    word: 'Ineffable',
    meaning: 'Too great or extreme to be expressed or described in words',
  },
  {
    word: 'Sycophant',
    meaning:
      'A person who acts obsequiously toward someone important in order to gain advantage',
  },
];

const cardContainer = document.getElementById('card-container');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const doneButton = document.getElementById('done-button');
const scoreElement = document.getElementById('score-card');
let score = 10;
let clickedItems = [];

const handleStart = () => {
  flashcardsData.forEach((item) => {
    //* Card add section
    const cardElement = document.createElement('div');
    cardElement.className = 'border-2 border-green-500 rounded-md p-5 h-full ';
    cardElement.innerText = item.word;
    cardContainer.appendChild(cardElement);

    //* Card click event
    cardElement.addEventListener('click', () => {
      console.log(item.word);
      cardElement.classList.add('border-red-500');
      cardElement.innerHTML = `<strong>${item.word}:</strong> ${item.meaning}`;
      score--;
      scoreElement.textContent = `Score = ${score}`;
      clickedItems.push(item);
    })
  });

  resetButton.classList.remove('hidden');
  doneButton.classList.remove('hidden');
  startButton.classList.add('hidden');
};

const handleReset = () => {
  cardContainer.innerHTML = '';

  startButton.classList.remove('hidden');
  resetButton.classList.add('hidden');
  doneButton.classList.add('hidden');
  scoreElement.textContent = 'score = 10';
};
const handleDone = () => {
  
  cardContainer.innerHTML = '';

  
  clickedItems.forEach((item) => {
    const clickedElement = document.createElement('div');
    clickedElement.innerHTML = `<strong>${item.word}:</strong> ${item.meaning}`;

    cardContainer.appendChild(clickedElement);
  });

  
  flashcardsData.forEach((item) => {
    if (!clickedItems.some((clickedItem) => clickedItem.word === item.word)) {
      const unclickedElement = document.createElement('div');
      unclickedElement.innerHTML = `<strong>${item.word}:</strong> ${item.meaning}`;
      unclickedElement.style.display = 'none'; 
      cardContainer.appendChild(unclickedElement);
    }
  });

  
  doneButton.classList.add('hidden');
  resetButton.classList.remove('hidden');
  startButton.classList.remove('hidden');



  scoreElement.textContent = `Score = ${score}`;
};



// flashcard code ends









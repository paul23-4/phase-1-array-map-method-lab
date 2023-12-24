function titleCased() {
  const tutorials = [
    "What does the this keyword mean?",
    "What is the Constructor OO Pattern?",
    "Implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how can we check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "What is the difference between == and ===?",
    "What is the difference between event capturing and bubbling?",
    "What is JSONP?"
  ];

  return tutorials.map(titleCase);
}

function titleCase(sentence) {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


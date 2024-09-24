const quizData = [
    {
      question: "dessine ce diagramme de venn",
      options: ["A", "B", "C", "D"],
      answer: "A"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "C"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "B"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "A"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "D"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "A"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "C"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "D"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "B"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["A", "B", "C", "D"],
      answer: "A"
    },
    // Add more questions here...
    ];
    
    const questionElement = document.getElementById("question");
    const questionImageElement = document.getElementById("question-image");
    const optionsElement = document.getElementById("options");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      
      // Show the question text
      questionElement.innerText = question.question;
      
      // Display the image if available
      if (question.image) {
        questionImageElement.src = question.image;
        questionImageElement.style.display = "block"; // Show image
      } else {
        questionImageElement.style.display = "none"; // Hide image if not available
      }
      
      // Display the answer options
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      const answer = quizData[currentQuestion].answer;
    
      if (selectedButton.innerText === answer) {
        score++;
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
    
    function showResult() {
      quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score}/${quizData.length}</p>
      `;
    }
    
    showQuestion();
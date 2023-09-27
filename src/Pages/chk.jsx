import React, { useRef, useState } from "react";

const Form = () => {
  const questions = [
    { question: "Question 1", options: ["Option 1", "Option 2", "Option 3"] },
    { question: "Question 2", options: ["Option 4", "Option 5", "Option 6"] },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestionRef = useRef(null);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);

    if (nextQuestionRef.current) {
      nextQuestionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                value={option}
                onChange={() => {}}
              />
              {option}
            </label>
          </li>
        ))}
      </ul>
      {currentQuestionIndex < questions.length - 1 && (
        <button onClick={handleNextQuestion}>Next</button>
      )}
      <div ref={nextQuestionRef} />
    </div>
  );
};

export default Form;

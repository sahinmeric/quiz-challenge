import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";

const Quiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      question:
        "Which of the following is the term for surgical complications resulting from surgical sponges left inside the patient's body?",
      options: [
        "Gauze grievance disorder",
        "Retained surgical sponge syndrome",
        "Sponge-induced septicemia",
        "Fabric foreign object syndrome",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Which of the following is the term for surgical complications resulting from surgical sponges left inside the patient's body?",
      options: [
        "Gauze grievance disorder",
        "Retained surgical sponge syndrome",
        "Sponge-induced septicemia",
        "Fabric foreign object syndrome",
      ],
      correctAnswer: 1,
    },
    {
      question:
        "Which of the following is the term for surgical complications resulting from surgical sponges left inside the patient's body?",
      options: [
        "Gauze grievance disorder",
        "Retained surgical sponge syndrome",
        "Sponge-induced septicemia",
        "Fabric foreign object syndrome",
      ],
      correctAnswer: 1,
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = index;
    setSelectedOptions(updatedSelectedOptions);

    if (index === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    navigate("/result", { state: { score, total: questions.length } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-700 p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Question {currentQuestionIndex + 1}/{questions.length}
      </h2>
      <QuestionCard
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        selectedOption={selectedOptions[currentQuestionIndex]}
        onSelectOption={handleOptionSelect}
      />
      {currentQuestionIndex < questions.length - 1 ? (
        <button
          onClick={handleNextQuestion}
          className={`mt-6 px-6 py-2 font-semibold rounded ${
            selectedOptions[currentQuestionIndex] !== undefined
              ? "bg-blue-700 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={selectedOptions[currentQuestionIndex] === undefined}
        >
          Next
        </button>
      ) : (
        <button
          onClick={handleFinishQuiz}
          className={`mt-6 px-6 py-2 font-semibold rounded ${
            selectedOptions[currentQuestionIndex] !== undefined
              ? "bg-blue-700 text-white"
              : "bg-gray-400 text-gray-200 cursor-not-allowed"
          }`}
          disabled={selectedOptions[currentQuestionIndex] === undefined}
        >
          Finish
        </button>
      )}
    </div>
  );
};

export default Quiz;

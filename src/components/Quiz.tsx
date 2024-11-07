import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./QuestionCard";
import useFetchQuizQuestions from "../hooks/useFetchQuizQuestions";

const Quiz = () => {
  const { questions, loading, error } = useFetchQuizQuestions();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [score, setScore] = useState(0);

  const handleOptionSelect = (index: number) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = index;
    setSelectedOptions(updatedSelectedOptions);

    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswerIndex = Object.values(
      currentQuestion.correct_answers
    ).findIndex((value) => value === "true");

    if (index === correctAnswerIndex) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleFinishQuiz = () => {
    navigate("/result", { state: { score, total: questions.length } });
  };

  if (loading) return <p>Loading questions...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-blue-700 p-4">
      {questions.length > 0 && (
        <>
          <h2 className="text-6xl mb-4 bebas">
            Question {currentQuestionIndex + 1}/{questions.length}
          </h2>
          <QuestionCard
            question={questions[currentQuestionIndex]?.question}
            options={Object.values(
              questions[currentQuestionIndex]?.answers
            ).filter((answer) => answer !== null)}
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
        </>
      )}
    </div>
  );
};

export default Quiz;

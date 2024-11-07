import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-700 text-white">
      <h1 className="text-6xl font-bold">QUIZZLER</h1>
      <p className="mt-4 text-lg">Let’s start the quiz →</p>
      <button
        onClick={() => navigate("/quiz")}
        className="mt-8 px-6 py-2 bg-white text-blue-700 font-semibold rounded hover:bg-gray-200"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;

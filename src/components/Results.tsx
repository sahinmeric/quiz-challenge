import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-700 text-white">
      <div className="flex flex-col md:flex-row items-center text-center md:text-left">
        <div className="md:mr-8">
          <h1 className="text-6xl font-bold">BRAVO!</h1>
          <p className="text-2xl mt-4">YOU HAVE SCORED</p>
          <button
            onClick={() => navigate("/quiz")}
            className="mt-4 text-lg underline"
          >
            Wanna Play Again?
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8 text-8xl font-bold">
          {score}/{total}
        </div>
      </div>
    </div>
  );
};

export default Results;

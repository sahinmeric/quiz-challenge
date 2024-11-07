import { useLocation, useNavigate } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-blue-700 text-white p-8">
        <h1 className="text-[180px] font-bold leading-[0.76]">BRAVO!</h1>
        <p className="text-[80px] font-bold mt-4">YOU HAVE SCORED</p>
        <div
          className="mt-4 text-lg underline hover:text-gray-300 cursor-pointer"
          onClick={() => navigate("/quiz")}
        >
          Wanna Play Again?
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center bg-[#EBEFF2] text-blue-700">
        <span className="text-[180px] font-bold leading-[0.76]">
          {score}/{total}
        </span>
      </div>
    </div>
  );
};

export default Results;

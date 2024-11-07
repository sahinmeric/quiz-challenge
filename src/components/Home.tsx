import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <h1 className="large-title bebas">QUIZZLER</h1>
      <p className="subtitle" onClick={() => navigate("/quiz")}>
        Let’s start the quiz →
      </p>
    </div>
  );
};

export default Home;

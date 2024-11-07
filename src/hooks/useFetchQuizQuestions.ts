import { useState, useEffect } from "react";
import { Question } from "../types/types";

const API_KEY = "3i9jAMiHuHYJp61v0RG07tEHjBp8dvIDMTKNLDn0";
const API_URL = "https://quizapi.io/api/v1/questions";

const useFetchQuizQuestions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${API_URL}?apiKey=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
        }
        const data = await response.json();
        setQuestions(data.slice(0, 10));
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  return { questions, loading, error };
};

export default useFetchQuizQuestions;

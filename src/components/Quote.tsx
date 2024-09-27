import { Button } from "@radix-ui/themes";
import { useState } from "react";

type QuoteType = {
  id: number;
  imgSrc: string;
};

type TriviaQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

const Quote = () => {
  const quotes: QuoteType[] = [
    {
      id: 1,
      imgSrc: "https://i.pinimg.com/736x/8a/4e/1e/8a4e1e6e73474877806c0f7fbf814eef.jpg",
    },
    {
      id: 2,
      imgSrc: "https://i.pinimg.com/564x/9e/e4/7c/9ee47c7220aaa10162ef5dd1c8c83275.jpg",
    },
    {
      id: 3,
      imgSrc: "https://i.pinimg.com/564x/6e/8f/ee/6e8fee7a4bc6abcac8cd40ae5999ae1a.jpg",
    },
    {
      id: 4,
      imgSrc: "https://i.pinimg.com/564x/24/3c/77/243c77e6f784ab34c2bd236bbbac722b.jpg",
    },
    {
      id: 5,
      imgSrc: "https://i.pinimg.com/736x/f8/75/34/f875346aec1e7c4214e1e9db07fbaf06.jpg",
    },
    {
      id: 6,
      imgSrc: "https://i.pinimg.com/736x/5f/a5/7d/5fa57d137ac96f8bdc453e2d2fbcbf3b.jpg",
    },
    {
      id: 7,
      imgSrc: "https://i.pinimg.com/564x/7c/5b/54/7c5b545e48c37ef25318e52e21b1c235.jpg",
    },
    {
      id: 8,
      imgSrc: "https://i.pinimg.com/564x/a8/9e/78/a89e78344dd2936adc01427671aa18db.jpg",
    },
    {
      id: 9,
      imgSrc: "https://i.pinimg.com/564x/c1/42/db/c142dbee13021acb3d70793562a352e1.jpg",
    },
    {
      id: 10,
      imgSrc: "https://i.pinimg.com/564x/e4/e0/d7/e4e0d76f62e380385786613b38e1869e.jpg",
    },
  ];

  const triviaQuestions: TriviaQuestion[] = [
    {
      question: "What is Loki's full name?",
      options: ["Loki Laufeyson", "Loki Odinson", "Loki Asgardian", "Loki Silvertongue"],
      correctAnswer: "Loki Laufeyson",
    },
    {
      question: "Who is Loki’s adoptive brother?",
      options: ["Thor", "Odin", "Heimdall", "Balder"],
      correctAnswer: "Thor",
    },
    {
      question: "In which movie does Loki first appear in the MCU?",
      options: ["Thor", "The Avengers", "Thor: Ragnarok", "Iron Man 2"],
      correctAnswer: "Thor",
    },
    {
      question: "What is the name of Loki’s weapon?",
      options: ["Mjolnir", "Gungnir", "Scepter", "Stormbreaker"],
      correctAnswer: "Scepter",
    },
  ];

  const [quote, setQuote] = useState<QuoteType>(quotes[Number((Math.random() * 10).toFixed())]);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    setCurrentQuestion((prev) => (prev + 1) % triviaQuestions.length);
  };

  const checkAnswer = (option: string) => {
    setSelectedAnswer(option);
    setIsCorrect(option === triviaQuestions[currentQuestion].correctAnswer);
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 bg-zinc-900 p-10 rounded-lg shadow-lg">
        <div className="flex flex-col items-center gap-5">
          <img
            className="w-80 rounded-lg shadow-lg"
            src={`${quote?.imgSrc || "https://i.pinimg.com/564x/eb/70/e3/eb70e33f78dd077511eb4d3d62e7972b.jpg"}`}
            alt="Loki Quote"
          />
          <Button
            className="px-4 py-2 bg-blue-500 hover:bg-blue-400 transition-all text-white rounded-lg shadow-lg"
            onClick={() => {
              setQuote(quotes[Number((Math.random() * 10).toFixed())]);
            }}
          >
            Generate Quote
          </Button>
        </div>

        {/* Trivia Quiz Section */}
        <div className="flex flex-col items-center gap-4 bg-zinc-700 p-6 rounded-lg shadow-lg text-white w-full md:w-80">
          <h2 className="text-2xl font-bold">Loki Trivia Quiz</h2>
          <p className="text-lg">{triviaQuestions[currentQuestion].question}</p>

          <div className="w-full grid grid-cols-1 gap-3">
            {triviaQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`px-4 py-2 text-lg rounded-lg transition-all ${
                  selectedAnswer === option
                    ? isCorrect
                      ? "bg-green-500 hover:bg-green-400"
                      : "bg-red-500 hover:bg-red-400"
                    : "bg-zinc-500 hover:bg-zinc-400"
                }`}
                onClick={() => checkAnswer(option)}
                disabled={selectedAnswer !== null}
              >
                {option}
              </button>
            ))}
          </div>

          {isCorrect !== null && (
            <p
              className={`mt-2 text-lg font-bold ${
                isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {isCorrect ? "Correct!" : "Incorrect!"}
            </p>
          )}

          {selectedAnswer && (
            <Button
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-400 transition-all text-white rounded-lg shadow-lg"
              onClick={handleNextQuestion}
            >
              Next Question
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quote;

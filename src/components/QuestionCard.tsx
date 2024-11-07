import Option from "./Option";

interface QuestionCardProps {
  question: string;
  options: string[];
  selectedOption: number | null;
  onSelectOption: (index: number) => void;
}

const QuestionCard = ({
  question,
  options,
  selectedOption,
  onSelectOption,
}: QuestionCardProps) => {
  return (
    <div className="w-full max-w-md">
      <p className="text-lg mb-8 text-center">{question}</p>

      {options.map((option, index) => (
        <Option
          key={index}
          text={option}
          isSelected={selectedOption === index}
          onClick={() => onSelectOption(index)}
        />
      ))}
    </div>
  );
};

export default QuestionCard;

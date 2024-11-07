interface OptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const Option = ({ text, isSelected, onClick }: OptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full px-4 py-2 mb-4 rounded border ${
        isSelected ? "bg-blue-700 text-white" : "bg-white text-blue-700"
      }`}
    >
      {text}
    </button>
  );
};

export default Option;

function Button({ type, text, color, onClick }: IButton) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2 rounded-sm hover:cursor-pointer hover:scale-105 transition-transform bg-${color}`}
    >
      {text}
    </button>
  );
}

type IButton = {
  type: "submit" | "button";
  text: string;
  color: string;
  onClick?: () => void;
};

export default Button;

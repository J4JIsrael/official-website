interface HeadlineBtnProps {
  text: string;
  className: string;
  onClick: () => void;
}

export const HeadlineBtn = ({ text, className, onClick }: HeadlineBtnProps) => {
  return (
    <div
      onClick={onClick}
      className={`flex h-16 w-48 select-none flex-row items-center justify-center overflow-hidden bg-gradient-to-r from-aqua-dark to-violetTransparent 
      opacity-40 transition-all duration-300  hover:opacity-80 ${className}`}
    >
      <h3 className="font-sans text-lg font-bold text-white text-center">{text}</h3>
    </div>
  );
};

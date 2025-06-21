const ButtonWithIcon = ({ children, text, className = "" }) => {
  return (
    <button
      className={`flex items-center border border-black pr-4 rounded-full hover:bg-black hover:text-white transition ${className}`}
    >
      {children}
      {text}
    </button>
  );
};

export default ButtonWithIcon;

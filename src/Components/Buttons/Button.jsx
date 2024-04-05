import clsx from "clsx";
export const Button = ({ children, variant, onClick, type, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        "py-[10px] text-sm",
        {
          "bg-black text-white": variant === "primary",
          "border-2 border-black bg-white text-black": variant === "secondary",
          "bg-white text-black": variant === "neutral",
        },
        className
      )}
    >
      {" "}
      {children}
    </button>
  );
};

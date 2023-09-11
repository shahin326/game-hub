import React from "react";

interface Props {
  buttonLabel: string;
  buttonClass?: "btn btn-primary" | "btn btn-secondary";
  onClick: () => void;
}

const Button = ({ buttonClass, buttonLabel, onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={buttonClass}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Button;

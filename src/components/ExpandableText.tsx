import React from "react";

interface Props {
  children: string;
  maxChars: number;
  onButtonClick: () => void;
  buttonLabel: string;
}

const ExpandableText = ({
  onButtonClick,
  children,
  buttonLabel,
  maxChars,
}: Props) => {
  const firstChars = children.slice(0, maxChars);

  return (
    <div>
      <p>{firstChars}</p>
      <button onClick={onButtonClick}>{buttonLabel}</button>
    </div>
  );
};

export default ExpandableText;

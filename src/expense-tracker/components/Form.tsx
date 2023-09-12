import React, { useState } from "react";
import { categories } from "../../App";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input id="Description" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input id="Amount" type="number" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Select an option:
        </label>

        <select
          id="Category"
          value={selectedOption || ""}
          onChange={handleSelectChange}
          className="form-select"
        >
          <option value="" disabled>
            Select an option
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

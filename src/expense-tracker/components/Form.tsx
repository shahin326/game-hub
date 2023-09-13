import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../../Categories";

// this is used for form validation
const schema = z.object({
  description: z
    .string()
    .min(5, { message: "Description must be at least 5 char long" })
    .max(80),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(1000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })} // this will make sure onlu number input is accepted
          id="Amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Select an option:
        </label>

        <select
          {...register("category")} // register this select to zod schema field
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
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

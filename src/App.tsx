import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import DismissableAlert from "./components/DismissableAlert";
import ExpandableText from "./components/ExpandableText";
import Form from "./expense-tracker/components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import categories from "./Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(""); // we need to this to cause rerender
  const [expenses, setExpenses] = useState([
    { id: 1, amount: 10, description: "blah", category: "Utility" },
    { id: 2, amount: 4, description: "rff", category: "Food" },
    { id: 3, amount: 50, description: "ccx", category: "Drink" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div>
      <Form
        onSubmit={(newExpense) =>
          setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }])
        }
      ></Form>
      <div className="mb-3">
        <ExpenseFilter
          categories={categories}
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>

      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) =>
          setExpenses(visibleExpenses.filter((e) => e.id !== id))
        }
      ></ExpenseList>
    </div>
  );
}

export default App;

import "./index.css";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteHandle = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm addFeedback={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteHandle={deleteHandle} />
      </div>
    </>
  );
}

export default App;

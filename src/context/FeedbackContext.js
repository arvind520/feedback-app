import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {

    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this item is feedback item 1',
            rating: 10
        },
        {
            id:2,
            text: 'this item is feedback item 2',
            rating: 5
        },
        {
            id:3,
            text: 'this item is feedback item 3',
            rating: 3
        },
    ])

    const deleteHandle = (id) => {
        if (window.confirm("Are you sure want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
    };

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };

    return <FeedbackContext.Provider value={{
        feedback,
        deleteHandle,
        addFeedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext
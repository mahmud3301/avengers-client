import { useEffect } from "react";


const UseTitle = (title) => {
    useEffect(() => {
        document.title = `${title} | Avengers Shop`;
    }, [title]);
};

export default UseTitle;
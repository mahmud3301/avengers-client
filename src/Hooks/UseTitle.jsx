import { useEffect } from "react";


const UseTitle = (title) => {
    useEffect(() => {
        document.title = `Avengers Shop | ${title} `;
    }, [title]);
};

export default UseTitle;
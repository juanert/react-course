import { useRef } from "react";

function UseRef() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        console.log(inputElement.current.value);
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default UseRef;
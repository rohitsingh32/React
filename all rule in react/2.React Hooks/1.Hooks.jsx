// What is a Hook?
// Hooks allow us to "hook" into React features such as state and lifecycle methods.

// Example:
// Here is an example of a Hook. Don't worry if it doesn't make sense. We will go into more detail in the next section.

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button type="button" onClick={() => setColor("blue")}>
                Blue
            </button>
            <button type="button" onClick={() => setColor("red")}>
                Red
            </button>
            <button type="button" onClick={() => setColor("pink")}>
                Pink
            </button>
            <button type="button" onClick={() => setColor("green")}>
                Green
            </button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);




import React from "react";
import initState from "./json";
import "./style.css"
function Main() {
    return (
        <div className="card-container">
            {initState.books.map((ele, index) => (
                <div className="card" key={index}>
                    <p>{ele.id}</p>
                    <p>{ele.title}</p>
                    <p>{ele.author}</p>
                    <p>{ele.isbn}</p>
                </div>
            ))}
        </div>
    );
}

export default Main;


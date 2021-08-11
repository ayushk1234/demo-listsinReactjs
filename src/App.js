import "./styles.css";
import React from "react";

var alist = ["one", "two", "threee", "foyr"];
var counter = 0;
export default function App() {
  return (
    <div className="App">
      <h1>list</h1>
      <ul>
        {alist.map((item) => {
          counter++;
          if (counter % 2 === 0) {
            return <li>{item}</li>;
          } else {
            return <li className="odd">{item}</li>;
          }
        })}
        {/* <li> {alist[0]}</li> */}
      </ul>
      {/* <h2>{alist}</h2> */}
    </div>
  );
}

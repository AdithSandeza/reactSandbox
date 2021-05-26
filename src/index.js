//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

let calc = () => {
  let wishclass = {};
  let hours = new Date().getHours();

  if (hours > 12 && hours < 18) {
    wishclass = { wish: "Good Afternoon", color: "green" };
  } else if (hours > 18 && hours < 24) {
    wishclass = { wish: "Good Evening", color: "blue" };
  } else {
    wishclass = { wish: "Good Morning", color: "red" };
  }
  return wishclass;
};

let wish = calc();

ReactDom.render(
  <div>
    <h1 className="heading" style={{ color: wish.color }}>
      {" "}
      {wish.wish}{" "}
    </h1>
  </div>,
  document.getElementById("root")
);

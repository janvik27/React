import React from "react";
import ReactDOM from "react-dom/client";

// we will write all the code in JSX, so i am commenting out all the basic lengthy code, written in pure react
/*
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
    key: "h1",
  },
  "this is heading 1 for parcel"
);
*/

// console.log(heading1);

// React.createElement => object => HTML(DOM)
// react.createlement function creates an object, which is then converted into DOM by react

/*
const heading2 = React.createElement(
  "h2",
  {
    id: "title",
    key: "h2",
  },
  "this is heading 2"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    key: "container",
  },
  [heading1, heading2]
);
*/

// NOW SUPPOSE YOU WANT TO CREATE A COMPLEX HTML DOM, DOING IT USING
// REACT.CREATEELEMENT CREATES A GREAT MESS (You can see below)
// SO, WE DO IT USING  JSX

/*
<div class="Header">
  <h1>Namaste react</h1>
  <ul>
    <li>Home</li>
    <li>Contact us</li>
    <li>Support</li>
  </ul>
</div>;

const heading = React.createElement(
  "h1",
  {
    key: "h1",
  },
  "Namaste react"
);

const li1 = React.createElement("li", {}, "Home");

const li2 = React.createElement("li", {}, "About us");

const ul = React.createElement("ul", {}, [li1, li2]);

const header = React.createElement(
  "div",
  {
    class: "header",
  },
  [heading, ul]
);
*/

// --------------------------------------- JSX --------------------------------------------

// CREATING TAGS USING JSX

// --- REACT ELEMENT ---
const heading = (
  <h1 id="title" key="h1">
    this is heading element
  </h1>
);

// REACT COMPONENT : everything in react is a component

// (1) functional component - new way of writing code - WE WILL USE THIS MOSTLY
// (2) class-based component - old way of writing code

// --> NOTE : name of any component starts with capital letter.
// its not mandatory, but its a good practice to do so

/* (1) FUNCTIONAL COMPONENT 
--> Its just a normal function, that returns something, either JSX, or react element or some piece of code
*/

// eg: functional component with arrow function
const HeaderComponent1 = () => {
  return <h1>Namaste functional component 1</h1>;
};

// function component with arrow function, without return statement
const HeaderComponent2 = () => (
  <div>
    <h1>Namaste functional component 2</h1>
  </div>
);

// functional component with a normal function
const HeaderComponent3 = function () {
  return (
    <div>
      <h1>Namaste functional component 3</h1>
    </div>
  );
};

// you can use any of the above 3 ways to create your elements, but note that
// NOTE----> In arrow fucntions, you can skip return statement, but in normal function, you cant omit return statement.

// USING ELEMENT INSIDE THE COMPONENT : just write the name of that element in curly braces
const HeaderComponent4 = function () {
  return (
    <div>
      {heading}
      <h2>This is heading component</h2>
    </div>
  );
};

// you can also write any js code , inside JSX, using curly braces {}
// eg : in js you wrte
var xyz = 10;

// USING COMPONENT INSIDE A COMPONENT : 2 ways
// (1) using curly braces and calling it as a function, bcs in the end it is a function
// (2) calling it as a tag, with angular brackets and closing slash
const HeaderComponent5 = function () {
  return (
    <div>
      {/* js inside JSX  */}
      {xyz}
      {console.log(xyz)}

      {/* calling component inside component */}
      {HeaderComponent1()}
      <HeaderComponent2 />
      <h2>This is heading component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering a react element
// root.render(heading);

// rendering a react component
// root.render(<HeaderComponent1 />);
// root.render(<HeaderComponent2 />);

// root.render(<HeaderComponent4 />);
root.render(<HeaderComponent5 />);

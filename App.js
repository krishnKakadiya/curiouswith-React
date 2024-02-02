import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "Namste react🚀 ");
const headingg = (
  <h2 className="heading" tabIndex="2">
    {" "}
    i am react element 🚀
  </h2>
);

// above code is not good way to creat element for large scale applicatio or project.
// lot's developer think jsx is part of react but not react and jsx is both are different thing .

// JSX

// JSX (transpiled before it reaches the JS) - PARCEL - BABEL

//JSX =>BABEL transples in to  React.createElement() =>  ReactElement.js(object) = >  HTMLElement(redner); with help of parcel behind babel js
const jsxHeading = (
  <h1 id="heading" className="heading">
    jsx
  </h1>
);

const Title = function () {
  return (
    <h2 className="heading" tabIndex="2">
      i am react element 🚀
    </h2>
  );
};
const Title1 = (
  <h2 className="heading" tabIndex="2">
    i am react element 🚀
  </h2>
);

// React Component

// Functional component
//Component composition
const HeadingComponent = () => (
  <>
    {Title1} // any javscripit include in jsx with curly braces
    {/* <Title /> */}
    {/* <Title></Title> */}
    {/* {Title()} */}
    <h1 id="heading">Namste code with krish make functional component🚀</h1>
  </>
);

// const headingComp1=()=>{
// return <h1>Namste code with krish make functional component</h1>
// }

// const headingComp2 = ()=> <h1>heading componenet in shortend syntax</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

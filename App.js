// here empth object is use for giving attributes your tags

// so here you can show createElement("tage/element", {attributes,props}, children which show inside the element/tag)

// ReactElement(Object) => HTML (Browser Understands);

const heading = React.createElement(
  "h1",
  { id: "heading", kan: "dscipline" },
  "heloo knao learn with thrive your experiences"
);



// nested element create using react

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "p",
    { id: "child" },
    React.createElement("h1", { id: "title" }, "i am nested tags")
  )
);



// what if if you make sibling means mutliple childeren then

const parents = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "p",
    { id: "child1" },
    // here you can use array of children to set sibling elements
    [
      React.createElement("h4", { id: "title" }, "i am nested tags1"),
      React.createElement("h3", { id: "title" }, "i am sibling paragraph1"),
    ]
  ),
  React.createElement(
    "p",
    { id: "child2" },
    // here you can use array of children to set sibling elements
    [
      React.createElement("h4", { id: "title" }, "i am nested tags2"),
      React.createElement("h3", { id: "title" }, "i am sibling paragraph2"),
    ]
  ),
]);


// debugger;
  // already exit like tesxt kano is here is replace by their parent when root.render() code run .

// root.render(parents);
 // root.render replace whatever inside in root element with whatever i pass inside react meams here parent is set inside root element exist over.

  // react only works inside root element it not take control out of root element.

  // other portion of htmle which write outside of root elemtn is work samw as html not effect  by react code.

// that is reason why we call it react is as library because it can work independently in small portion of your app as well (work only upon make your desire dive tag).


// you can show and conclusion react code make harder for create element that reason come jsx (javascript xml language);


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parents);
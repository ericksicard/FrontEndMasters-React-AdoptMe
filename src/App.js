

const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese"),
    ]);
};


const App = () => {
    return React.createElement(
        "div",
        { id: "parent-element"},
        [
            React.createElement("h1", { id: "children-element"}, "Adopt Me!"),
            React.createElement(Pet),
            React.createElement(Pet),
            React.createElement(Pet)
        ]
    );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
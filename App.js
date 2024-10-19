const parent2 = React.createElement("div",{id:"parent"},React.createElement("div",{id:"heading"},React.createElement("h1",{id:"children"},"I am h1 Tag")))

const parent = React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},"children"),
                                                        React.createElement("div",{id:"child2"},"children2"),
                                                        React.createElement("div",{id:"child3"},"children3")])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
import React, { Component } from "react";

class Facts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    let quoteNumber = prompt("How many facts would you like?");
    fetch(
      `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${quoteNumber}`
      //"https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    let path = "/cats/";
    let imgs = ["1.png", "2.png", "3.png", "4.png", "5.png"];
    //let i = Math.floor(Math.random() * imgs.length);

    const { DataisLoaded, items } = this.state;

    if (!DataisLoaded)
      return (
        <div>
          <h1>Data is loading...</h1>
        </div>
      );
    else {
      return (
        <div>
          <ul>
            {items.map((item, index) => (
              <li key={item.id}>
                <img
                  src={`${
                    path + imgs[Math.floor(Math.random() * imgs.length)]
                  }`}
                  //src={"/cats/1.png"}
                  height="80"
                  width="80"
                  alt="Logo"
                />{" "}
                Quote {index + 1}: {item.text}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Facts;

import React, { Component } from "react";
import { GiHollowCat } from "react-icons/gi";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="landingScreen">
          <div>
            <div>
              <h1>
                <GiHollowCat />
                Purrfacts
                <img
                  src={"/catheadder.png"}
                  height="50"
                  width="50"
                  alt="Logo"
                  className="testcat"
                />
              </h1>
              <h2> Your dialy dose of cat facts!</h2>
              <button>Login</button>
              <button>Sign up</button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Main;

import React, { Component } from "react";
import { GiHollowCat } from "react-icons/gi";
import Facts from "./FactsComponent";
import LoginForm from "./LoginForm";
import UserComponent from "./UserComponent";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
      isModalOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  handleLogin(event) {
    alert(
      `Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
    );
    this.toggleModal();
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid jumbotron">
          <div className="row align-items-center">
            <div className="col-4">
              <h1>
                <GiHollowCat />
                Purrfacts
              </h1>
              <h2> Your dialy dose of cat facts!</h2>
            </div>
            <div className="col text-end">
              <Button outline onClick={this.toggleModal}>
                <i className="fa fa-sign-in fa-lg" /> Login
              </Button>
            </div>
            <div className="col text-end">
              <img src={"/catheadder.png"} height="80" width="80" alt="Logo" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Facts />
            </div>
          </div>
        </div>

        <Modal
          className="testt"
          isOpen={this.state.isModalOpen}
          toggle={this.toggleModal}
        >
          <ModalHeader
            isOpen={this.state.isModalOpen}
            toggle={this.toggleModal}
          >
            Login
          </ModalHeader>
          <ModalBody>
            <UserComponent />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;

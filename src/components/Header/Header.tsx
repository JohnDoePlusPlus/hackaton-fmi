import { InputGroup, Menu, MenuItem, Popover, PopoverInteractionKind, Position } from '@blueprintjs/core';
import * as React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Fade } from 'reactstrap'

import { Button as RButton } from 'reactstrap'

import * as css from './Header.scss';

class Header extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false, 
      modal2: false,
      email: '',
      password: '',
      valid: false,
      submited: false
    };

    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  toggle1() {
    this.setState({
      modal1: !this.state.modal
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal
    });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  submit = (e) => {
    e.preventDefault();

    const valid = this.state.email === 'test@gmail.com' && this.state.password === 'admin';

    setTimeout(() => {
      this.setState({ valid, submited: true })

      if (valid) {
        setTimeout(() => {
          window.location.href = '/';
        }, 500)
      }
    }, 1000)
  }

  render() {
    return (
      <header className={css.header}>
        <h1 className={css.header__title}>Pencil.</h1>
        <Popover
          content={
            <Menu>
              <MenuItem text="Submenu">
                <MenuItem text="Child one" />
                <MenuItem text="Child two" />
                <MenuItem text="Child three" />
              </MenuItem>
            </Menu>
          }
          position={Position.BOTTOM_RIGHT}
          interactionKind={PopoverInteractionKind.HOVER}
        >
          <Button className={css.header__anchor} >
            <i className="fas fa-th" style={{ color: '#01d662', marginRight: '10px' }}></i>
            Facultati
          </Button>
        </Popover>
        <InputGroup
          className={css.header__searchInput}
          placeholder="Cauta un curs"
          type="search"
          rightElement={<img className={css.header__searchInput__icon} src="../../../static/images/search.png" alt="Search" ></img>}
          large={true}
        />
        <RButton onClick={this.toggle1} className={css.header__logInButton}>Log In</RButton>

        <Modal isOpen={this.state.modal1} toggle={this.toggle1} className={css.modal}>
          <ModalHeader toggle={this.toggle1}>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input required onChange={this.handleChange} type="email" name="email" value={this.state.email} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input required onChange={this.handleChange} type="password" name="password" value={this.state.password} />
              </FormGroup>
              <Fade in={this.state.submited} tag="h5" className="mt-3 d-flex justify-content-center">
                <span className={this.state.valid ? css.valid : css.invalid}>
                  {this.state.valid ? "Your are logged in" : 'Incorrect email or password'}
                </span>
              </Fade>
              <ModalFooter style={{ justifyContent: 'center' }}>
                <RButton type="submit" color="success">Log In</RButton>
                <RButton color="secondary" onClick={this.toggle1}>Cancel</RButton>
              </ModalFooter>
            </Form>
          </ModalBody>

        </Modal>

        <Button onClick={this.toggle2} className={css.header__registerButton}>Register</Button>
        <Modal isOpen={this.state.modal1} toggle={this.toggle2} className={css.modal}>
          <ModalHeader toggle={this.toggle2}>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.submit}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input required onChange={this.handleChange} type="email" name="email" value={this.state.email} />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input required onChange={this.handleChange} type="password" name="password" value={this.state.password} />
              </FormGroup>
              <Fade in={this.state.submited} tag="h5" className="mt-3 d-flex justify-content-center">
                <span className={this.state.valid ? css.valid : css.invalid}>
                  {this.state.valid ? "Your are logged in" : 'Incorrect email or password'}
                </span>
              </Fade>
              <ModalFooter style={{ justifyContent: 'center' }}>
                <RButton type="submit" color="success">Sign Up</RButton>
                <RButton color="secondary" onClick={this.toggle2}>Cancel</RButton>
              </ModalFooter>
            </Form>
          </ModalBody>

        </Modal>
      </header>
    )
  }
}

export default Header;


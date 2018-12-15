import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Popover, Position, Menu, MenuItem, PopoverInteractionKind, InputGroup } from "@blueprintjs/core";
import { Button } from 'reactstrap'
import { Course } from '../Course/Course';

import * as css from './Header.scss';

interface Props { }

class Header extends React.Component<Props> {
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
        <Button className={css.header__logInButton}>Log In</Button>
        <Button className={css.header__registerButton}>Register</Button>
      </header>
    )
  }
}

export default connect(null, null, null)(Header)

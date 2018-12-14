import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { Popover, Button, Position, Menu, MenuItem } from "@blueprintjs/core";

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
          position={Position.RIGHT_TOP}
        >
          <Button icon="share" text="Open in..." />
        </Popover>
      </header>
    )
  }
}

export default connect(null, null, null)(Header)

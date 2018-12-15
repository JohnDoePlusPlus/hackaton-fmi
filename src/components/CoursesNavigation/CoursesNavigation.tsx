import { Alignment, Navbar, NavbarGroup, Tab, Tabs, Classes } from '@blueprintjs/core';
import * as React from 'react';
import * as css from './CoursesNavigation.scss';
import { ICONS, TABS } from '../../constants/constants';

interface State {
  navbarTabId: string
}

export default class CoursesNavigation extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      navbarTabId: 'Home'
    }
  }

  handleNavbarTabChange = (navbarTabId: string) => this.setState({ navbarTabId });

  render() {
    const { navbarTabId } = this.state

    return (
      <div>
        <Navbar className={css.navbar}>
          <NavbarGroup className={css.navbar__group}>
            <Tabs
              className={css.navbar__group__tabs}
              animate={true}
              id="navbar"
              large={true}
              onChange={this.handleNavbarTabChange}
              selectedTabId={navbarTabId}
            >
              {TABS.map(tab => <Tab className={css.navbar__group__tab} id={tab.id} title={tab.title}>
                <img className={css.navbar__group__tab__icon} {...tab.icon} />
              </Tab>)}
            </Tabs>
          </NavbarGroup>
        </Navbar>
      </div >
    )
  }
}

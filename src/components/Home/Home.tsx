import * as React from 'react';
import * as css from './Home.scss';

import { Button } from 'reactstrap'
import { Link } from '../../../routes';
import Down from './Down';
import Layout from '../Layout/Layout';
import { Navbar, NavbarGroup, Alignment, Tabs, Tab } from '@blueprintjs/core';

interface State {
  navbarTabId: string
}

export default class Home extends React.Component<{}, State> {
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
      <Layout>
        <div className={css.home} >
          <div className={css.home__firstRow}>
            <h1 className={css.home__firstRow__mainHeader}>Poti deveni specialist certificat la distanta</h1>
            <h2 className={css.home__firstRow__secondaryHeader}>Invata tot ce-ti place comod la distanta</h2>
            <div>
              <Button className={css.home__firstRow__button}>Incearca acum</Button>
            </div>
          </div>
          <Navbar>
            <NavbarGroup align={Alignment.RIGHT}>
              <Tabs
                animate={true}
                id="navbar"
                large={true}

                onChange={this.handleNavbarTabChange}
                selectedTabId={navbarTabId}
              >
                <Tab id="Home" title="Home" panel={<div>1</div>} />
                <Tab id="Files" title="Files" panel={<div>2</div>} />
                <Tab id="Builds" title="Builds" panel={<div>3</div>} />
              </Tabs>
            </NavbarGroup>
          </Navbar>
          <Down />
        </div>
      </Layout>
    )
  }
}

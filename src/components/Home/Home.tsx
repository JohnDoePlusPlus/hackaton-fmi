import * as React from 'react';
import * as css from './Home.scss';

import { Button } from 'reactstrap'
import { Link } from '../../../routes';
import Down from './Down';
import Layout from '../Layout/Layout';
import { Navbar, NavbarGroup, Alignment, Tabs, Tab } from '@blueprintjs/core';

export default class Home extends React.Component {
  render() {
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
                // onChange={this.handleNavbarTabChange}
                selectedTabId={'Home'}
              >
                <Tab id="Home" title="Home" />
                <Tab id="Files" title="Files" />
                <Tab id="Builds" title="Builds" />
              </Tabs>
            </NavbarGroup>
          </Navbar>
          <Down />
        </div>
      </Layout>
    )
  }
}

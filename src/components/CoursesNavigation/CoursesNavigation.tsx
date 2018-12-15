import { Navbar, NavbarGroup, Tab, Tabs } from '@blueprintjs/core';
import * as React from 'react';
import Slider from "react-slick";
import { TABS, COURSES } from '../../constants/constants';
import * as css from './CoursesNavigation.scss';
import CarouselSlider from 'react-carousel-slider'

interface State {
  navbarTabId: string
}

export default class CoursesNavigation extends React.Component<{}, State> {
  constructor(props) {
    super(props)
    this.state = {
      navbarTabId: 'mateInfo'
    }
  }

  handleNavbarTabChange = (navbarTabId: string) => this.setState({ navbarTabId });

  renderCourse = (course) => {
    return (
      <div className={css.slider__imageContainer}>
        <img className={css.slider__imageContainer__image} src={course.img} alt="image" />
        <div>
          Diploma in <br />
          <span>{course.diplomaIn}</span>
        </div>
      </div>
    )
  }

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
              {TABS.map(tab => <Tab key={tab.id} className={css.navbar__group__tab} id={tab.id} title={tab.title}>
                <img className={css.navbar__group__tab__icon} {...tab.icon} />
              </Tab>)}
            </Tabs>
          </NavbarGroup>
        </Navbar>
        <Slider
          className={css.slider}
          speed={500}
          slidesToShow={4}
          slidesToScroll={1}
          arrows={true}
          draggable={false}
        >
          {COURSES[navbarTabId].map(this.renderCourse)}
        </Slider>
      </div >
    )
  }
}

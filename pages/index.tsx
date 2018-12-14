import * as React from 'react';

import Header from '../src/components/Header/Header';
import SingleButton from '../src/components/SingleButton/SingleButton';
import { ICONS, STEPS } from '../src/constants/constants';
import { WELCOME_PAGE_TEXTS } from '../src/constants/texts';
import * as css from '../static/index.scss';

export default class Index extends React.Component {
  render() {
    return (
      <div className={css.welcomePage}>
        <Header isWelcomePage={true} />
        <h1 className={css.welcomePage__mainHeader}>Your people are here!</h1>
        <p className={css.welcomePage__icons}>
          <img {...ICONS.facebook} />
          <img {...ICONS.twitter} />
          <img {...ICONS.linkedin} />
          <img {...ICONS.instagram} />
        </p>
        <p className={css.welcomePage__text}>
          {WELCOME_PAGE_TEXTS.first}
          <br />
          <span className={css.welcomePage__text__span}>{WELCOME_PAGE_TEXTS.second}</span>
        </p>
        <div className={css.welcomePage__background} />
        <div className={css.welcomePage__button}>
          <SingleButton redirectToStep={STEPS.goal}>
            Target the right people
          </SingleButton>
        </div>
      </div>
    )
  }
}

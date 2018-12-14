import Router, { withRouter } from 'next/router';
import * as React from 'react';

import { EstimatedTargetingPotential } from '../src/components/EstimatedTargetingPotential/EstimatedTargetingPotential';
import FAQButton from '../src/components/FAQButton/FAQButton';
import Layout from '../src/components/Layout/Layout';
import Radios from '../src/components/Radios/Radios';
import Review from '../src/components/Review/Review';
import { Title } from '../src/components/Title/Title';
import { STEPS } from '../src/constants/constants';
import { STEPS_TEXTS } from '../src/constants/texts';

interface Props {
  router: {
    query: {
      step: string
    }
  }
}

class SettingUp extends React.Component<Props> {
  static getInitialProps({ res }) {
    if (res) {
      res.writeHead(302, {
        Location: '/'
      })
      res.end()
    }
  }

  render() {
    const { step } = this.props.router.query;

    return (
      <Layout>
        <EstimatedTargetingPotential />
        <Title currentStep={step} />
        {step === STEPS.review ?
          <Review /> : [
            <Radios key="radios" currentStep={step} />,
            <FAQButton key="faq">{STEPS_TEXTS[step] && STEPS_TEXTS[step].faq}</FAQButton>
          ]
        }
      </Layout>
    )
  }
}

export default withRouter(SettingUp)

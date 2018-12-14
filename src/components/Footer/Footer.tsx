import { withRouter } from 'next/router';

import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import * as css from './Footer.scss';


class Footer extends React.Component {
  render() {

    return (
      <Container style={{ marginTop: '100px', height: '200px' }} className='d-flex align-items-center '>
        <footer className={css.footer}>
          <Row className="justify-content-between">
            <Col sm={4}>
              <h1 className={css.logo}>Pencil.</h1>
              <span>
                The process of launching your own desing studio or web agency is very time consuming.
              </span>
            </Col>

            <Col sm={7} className="d-flex align-items-center ml-2">
              <Container style={{height: "100%", display: 'flex', flexDirection: 'column' ,justifyContent: 'space-around'}}>
                <Row className="d-flex justify-content-around">
                  <a style={{ width: "25%" }}>Facultati</a>
                  <a style={{ width: "25%" }}>Cumpara un curs</a>
                  <a style={{ width: "25%" }}>Despre noi</a>
                  <a style={{ width: "25%" }}>info@work.com</a>
                </Row>

                <Row className="d-flex justify-content-around">
                  <a style={{ width: "25%", paddingTop: '10px' }}>Profesori</a>
                  <a style={{ width: "25%", paddingTop: '10px' }}>Support</a>
                  <a style={{ width: "25%", paddingTop: '10px' }}>Parteneri</a>
                  <a style={{ width: "25%", paddingTop: '10px' }}>+12307390273</a>
                </Row>
              </Container>

            </Col>
          </Row>

          <hr />

          <Row>
            <Col sm={9}>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Terms of service</a>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Privacy policy</a>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Embed slack</a>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Slack chat widget</a>
            </Col>
            <Col sm={3}>
              <span style={{ fontSize: '15px' }}>
                2018, All rights reserved
            </span>
            </Col>
          </Row>
        </footer>
      </Container>
    )
  }
}

export default Footer;

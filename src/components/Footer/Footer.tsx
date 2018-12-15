import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';

import * as css from './Footer.scss';

class Footer extends React.Component {
  render() {

    return (
      <Container fluid style={{ marginTop: '100px', height: '200px' }} className='d-flex align-items-center justify-content-center'>
        <footer className={css.footer}>
          <Row className="justify-content-between pb-4">
            <Col sm={4} style={{ height: '120px' }}>
              <img src='/static/images/logoo.png' width="280" height="80" />
            </Col>

            <Col sm={7} className="d-flex align-items-center ml-2">
              <Container style={{ height: "80%", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
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

          <hr style={{ borderWidth: '1px solid black', width: '100%' }} />

          <Row className="pb-4 ">
            <Col sm={9}>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Terms of service</a>
              <a style={{ fontSize: '15px', paddingRight: '25px' }}>Privacy policy</a>
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

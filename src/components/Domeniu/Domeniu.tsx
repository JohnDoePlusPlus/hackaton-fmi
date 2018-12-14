import * as React from 'react';
import * as css from './Domeniu.scss';

import { Container, Row, Col, Button } from 'reactstrap'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';

import Link from 'next/link';

const clientImage = '/static/images/domain.png'

export default class Domeniu extends React.Component {
    render() {
        return (
        <React.Fragment>
            <Container fluid className={css.domeniu}>
                <Row style={{width: '80%'}} className={css.header__row}>
                    <Col  xs={12}>
                        <h1>Informatica Aplicata</h1>
                    </Col>
                    <Col className='p-0 m-0' >
                        <Container fluid className={css.maininfo}>
                            <Col >
                                <img src={clientImage} />
                            </Col>
                            <Col>
                               <p>
                               Programarea informatică este o activitate informatică de elaborare 
a produselor-program, a programelor (software) necesare activităților 
realizate cu ajutorul calculatorului. Programarea informatică conține 
următoarele subactivități: specificarea, proiectarea, implementarea, 
documentarea și întreținerea produsului program.
                               </p>
                            </Col>
                        </Container>
                    </Col>

                </Row>
            </Container>
        </React.Fragment>
        )
    }
}

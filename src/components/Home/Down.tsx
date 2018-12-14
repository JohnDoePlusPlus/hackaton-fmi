import * as React from 'react';
import * as css from './Down.scss';

import { Container, Row, Col, Button } from 'reactstrap'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle,
} from 'reactstrap';
import Link from 'next/link';

const clientImage = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180'

export default class Down extends React.Component {
    render() {
        return (
            <React.Fragment >
                <Container style={{ paddingTop: "50px" }}>
                    <Row>
                        <Col className="mt-sm-3 pt-md-0" sm={12} md={4}>
                            <Card className={`p-3 ${css.card}`}>
                                <CardTitle>Live Interactive Webinars</CardTitle>
                                <CardText style={{ fontFamily: 'open-sans', fontSize: "18px" }}>
                                    Our industry leading export educators ensure your
                                    live interactive lessons have the latest, most relevant, engaging content
                                    to keep you ahead of the game.</CardText>
                            </Card >
                        </Col>
                        <Col className="mt-sm-3 pt-md-0" sm={12} md={4}>
                            <Card className={`p-3 ${css.card}`}>
                                <CardTitle>24/7 Student Support</CardTitle>
                                <CardText style={{ fontFamily: 'open-sans', fontSize: "18px" }}>
                                    We provide support on all of our live webinars to ensure no questions goes unanswered.
                                     Attend live, ask questions, truly learn.
                                </CardText>
                            </Card>
                        </Col>
                        <Col className="mt-sm-3 pt-md-0" sm={12} md={4}>
                            <Card className={`p-3 ${css.card}`}>
                                <CardTitle>Gain Your Diploma</CardTitle>
                                <CardText style={{ fontFamily: 'open-sans', fontSize: "18px" }}>
                                    Complete your course and gain an Accreditated Diploma. Excellent for CV/Resume or simply hanging on your wall.
                                </CardText>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <HappyClient></HappyClient>
                <RegisterContainer></RegisterContainer>
                <Parteners></Parteners>
            </React.Fragment>
        )
    }
}


const HappyClient = (props) => (
    <div className={css.clientsContainer}>
        <div className={css.client}>
            <img src={clientImage} className={css.client__image}></img>
            <span style={{ position: 'relative', top: '-35px' }}>Sergiu Prisacar <br /> USM</span>
            <p className={css.client__review}>
                The process of launching your own design studio or web agency us vert tune consuming. There is a lot of preparation required to create notable branding, structure the website, and organize a captivationg portofolio.
            </p>
            <Link href="#">
                <a href="#">View case study of project</a >
            </Link>
        </div>

    </div>
)

const RegisterContainer = () => (
    <Container fluid className={`d-flex justify-content-around align-items-center ${css.registerContainer}`}>
        <Row className='d-flex justify-content-around' style={{width: "70%"}} >
            <Col sm={6} className='d-flex flex-column align-items-center'>
                <img src={clientImage} className={css.register__image}></img>
                <Button className={css.register__button} color="primary">Inregistreazate ca student</Button>
            </Col>
            <Col sm={6} className='d-flex flex-column align-items-center '>
                <img src={clientImage} className={css.register__image}></img>
                <Button className={css.register__button} color="primary">Inregistreazate ca profesor</Button>
            </Col>
        </Row>
    </Container>
)

const Parteners = (props) => (
    <Container className={css.partenersContainer}>
        <Row>
            <Col sm={12} md={4}>
                <img src={clientImage}></img>
            </Col>
            <Col sm={12} md={4}>
                <img src={clientImage}></img>
            </Col>
            <Col sm={12} md={4}>
                <img src={clientImage}></img>
            </Col>
        </Row>
    </Container>
)

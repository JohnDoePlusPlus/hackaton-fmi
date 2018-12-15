import * as React from 'react';
import * as css from './Down.scss';

import { Container, Row, Col, Button } from 'reactstrap'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    UncontrolledCarousel,
    Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Fade
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
                                <CardTitle className={css.cardTitle}>Live Interactive Webinars</CardTitle>
                                <CardText style={{ fontFamily: 'open-sans', fontSize: "18px" }}>
                                    Our industry leading export educators ensure your
                                    live interactive lessons have the latest, most relevant, engaging content
                                    to keep you ahead of the game.</CardText>
                            </Card >
                        </Col>
                        <Col className="mt-sm-3 pt-md-0" sm={12} md={4}>
                            <Card className={`p-3 ${css.card}`}>
                                <CardTitle className={css.cardTitle}>24/7 Student Support</CardTitle>
                                <CardText style={{ fontFamily: 'open-sans', fontSize: "18px" }}>
                                    We provide support on all of our live webinars to ensure no questions goes unanswered.
                                     Attend live, ask questions, truly learn.
                                </CardText>
                            </Card>
                        </Col>
                        <Col className="mt-sm-3 pt-md-0" sm={12} md={4}>
                            <Card className={`p-3 ${css.card}`}>
                                <CardTitle className={css.cardTitle}>Gain Your Diploma</CardTitle>
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
        <h2 className={css.client__text}>Clientii nostri</h2>
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
        <Row className={`d-flex justify-content-between ${css.registerRow}`}  >
            <Col md={12} lg={6} className='d-flex flex-column align-items-center'>
                <div className={css.register__image}>
                    <img src={'/static/images/student.png'} style={{ width: '120px' }}></img>
                </div>
                <Button className={css.register__button} color="success">Logheazate ca student</Button>
            </Col>
            <Col md={12} lg={6} className='d-flex flex-column align-items-center '>
                <div className={css.register__image}>
                    <img src={'/static/images/work.png'} style={{ width: '120px' }}></img>
                </div>
                <Button className={css.register__button} color="success">Logheazate ca profesor</Button>
            </Col>
        </Row>
    </Container>
)

const Parteners = () => (
    <Container className={css.partenersContainer}>
        <h1 style={{ fontWeight: 'bold', paddingBottom: '10px' }}>Parteneri</h1>
        <Row>
            <Col sm={12} md={4} className="d-flex align-items-center justify-content-center">
                <img src={'/static/images/starnet.jpg'} style={{ width: '80%' }}></img>
            </Col>
            <Col sm={12} md={4} className="d-flex align-items-center">
                <img src={'/static/images/usm.jpg'} style={{ width: '100%' }}></img>
            </Col>
            <Col sm={12} md={4} className="d-flex align-items-center">
                <img src={'/static/images/minister.png'} style={{ width: '100%' }}></img>
            </Col>
        </Row>
    </Container>
)

class RegisterModal extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            email: '',
            password: '',
            valid: false,
            submited: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    submit = (e) => {
        e.preventDefault();

        const valid = this.state.email === 'test@gmail.com' && this.state.password === 'admin';

        setTimeout(() => {
            this.setState({ valid, submited: true })

            if (valid) {
                setTimeout(() => {
                    window.location.href = '/';
                }, 500)
            }
        }, 1000)
    }

    render() {
        return (


            <Modal isOpen={this.state.modal} toggle={this.toggle} className={css.modal}>
                <ModalHeader toggle={this.toggle}>Sign In</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.submit}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input required onChange={this.handleChange} type="email" name="email" value={this.state.email} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input required onChange={this.handleChange} type="password" name="password" value={this.state.password} />
                        </FormGroup>
                        <Fade in={this.state.submited} tag="h5" className="mt-3 d-flex justify-content-center">
                            <span className={this.state.valid ? css.valid : css.invalid}>
                                {this.state.valid ? "Your are logged in" : 'Incorrect email or password'}
                            </span>
                        </Fade>
                        <ModalFooter style={{ justifyContent: 'center' }}>
                            <Button type="submit" color="success">Register</Button>
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </ModalBody>

            </Modal>
        )
    }
}
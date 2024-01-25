import React from 'react'
import Header from './Header'
import './Home.css'
import { useState } from 'react';
import { Carousel, Card, Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons';
import project from '../../projects'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    /* manage contact form section states */
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic 
        console.log('Form submitted:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
        });
        //can add your logic to send the data to a server or perform any other actions.
    };

    const Project = project.map(item => {
        return (
            <div className='col-md-4'>
                <Card>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.descrip}
                        </Card.Text>
                        <Button variant="secondary" href={item.view} target='blank'>
                            View <FontAwesomeIcon icon={faGithub} />
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        )
    })
    return (
        <>
            <Header />
            {/* skills carousel section */}
            <section className='skills'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <Carousel>
                                <Carousel.Item interval={600}>
                                    HTML <FontAwesomeIcon icon={faHtml5} />
                                </Carousel.Item>
                                <Carousel.Item interval={600}>
                                    CSS <FontAwesomeIcon icon={faCss3} />
                                </Carousel.Item>
                                <Carousel.Item interval={600}>
                                    JavaScript <FontAwesomeIcon icon={faJs} />
                                </Carousel.Item>
                                <Carousel.Item interval={600}>
                                    React <FontAwesomeIcon icon={faReact} />
                                </Carousel.Item>
                                <Carousel.Item interval={600}>
                                    BootStrap <FontAwesomeIcon icon={faBootstrap} />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/*Services section */}
            </section>
            <section className='services' id='Services'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h3>Services</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <FontAwesomeIcon icon={faReact} />
                                    <Card.Title>React Js Responsive Web Apps</Card.Title>
                                    <Card.Text>
                                        I build responsive websites using React Js, including state management, handling user input, and conditional rendering.
                                        BootStrap, CSS, FontAwesomeIcons and more... .
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="secondary" href={'https://github.com/mohamed17-a'} target='blank'>
                                    View More<FontAwesomeIcon icon={faGithub} />
                                </Button>
                            </Card>
                        </div>
                        <div className='col-md-6'>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <FontAwesomeIcon icon={faNodeJs} />
                                    <FontAwesomeIcon icon={faDatabase} />
                                    <Card.Title>Node Js And MongoDB</Card.Title>
                                    <Card.Text>
                                        I build responsive websites using Node Js and Express ,including using template engines as hbs.
                                        Using also MongoDB is a powerful and highly scalable database, suitable for use on any application's backend.
                                    </Card.Text>
                                </Card.Body>
                                <Button variant="secondary" href={'https://github.com/mohamed17-a'} target='blank'>
                                    View More<FontAwesomeIcon icon={faGithub} />
                                </Button>
                            </Card>

                        </div>
                    </div>
                </div>
            </section>
            {/* projects section */}
            <section className='projects' id='Projects'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h3>Projects</h3>
                        </div>
                    </div>
                    <div className='row'>
                        {Project}
                    </div>
                </div>
            </section>
            <section className='contact' id='Contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-12'>
                            <h3>Contact Me</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group controlId="formEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </Form.Group>

                            <Form.Group controlId="formMessage">
                                <Form.Label>Message</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Enter your message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required={true}
                                />
                            </Form.Group>

                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home
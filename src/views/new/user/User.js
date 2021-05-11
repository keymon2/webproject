import React from 'react';
import {getProfileUser} from '../../../controller/ContollerUser.js'
import "./styles.css"
import {updateUser} from "../../../controller/ContollerUser.js"
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
  } from "react-bootstrap";

import { Component } from 'react';
import { cilInputHdmi } from '@coreui/icons';
  
  class User extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {},
            username: "",
            userpassword: "password",
            repet: "repeat-password",
            userfirstname: "",
            userlastname: "",
            useradress: "",
            usercity: "",
            usercountry: "",
            userphone: "",
            userbio: "",
        }
        this.handlesubmit = this.handlesubmit.bind(this)
    }

    async componentDidMount() {
        const User = await getProfileUser();
        this.setState({user: User})
    }
    handlesubmit = async e =>{
        e.preventDefault();
        var input = {};
        if(this.state.username!= "" )input.name = this.state.username;
        if(this.state.userpassword != "password"){
            if(this.state.repet != this.state.userpassword)
                this.setState({
                    username: "",
                    userpassword: "password",
                    repet: "repeat-password",
                    userfirstname: "",
                    userlastname: "",
                    useradress: "",
                    usercity: "",
                    usercountry: "",
                    userphone: "",
                    userbio: "",
                })
        }
        if(this.state.userfirstname!= "" )input.firstname = this.state.userfirstname;
        if(this.state.userlastname!= "" )input.lastname = this.state.userlastname;
        if(this.state.useradress!= "" )input.adress = this.state.useradress;
        if(this.state.usercity!= "" )input.city = this.state.usercity;
        if(this.state.usercountry!= "" )input.name = this.state.username;
        if(this.state.userphone!= "" )input.phone = this.state.userphone;
        if(this.state.userbio!= "" )input.bio = this.state.userbio;
        console.log(input)
       const response = await updateUser(input);
        if(response.success == true ){
            this.setState({user: response.data})
        }
            this.setState({
                username: "",
                userpassword: "password",
                repet: "repeat-password",
                userfirstname: "",
                userlastname: "",
                useradress: "",
                usercity: "",
                usercountry: "",
                userphone: "",
                userbio: "",
            })  
    }
    render(){

        return (
      <>
        <Container fluid>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Profile</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit ={this.handlesubmit}>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>Username (disabled)</label>
                          <Form.Control
                            defaultValue={this.state.user.name}
                            disabled
                            placeholder="Username"
                            type="text"
                            onChange={e => {this.setState({username: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Password</label>
                          <Form.Control
                            placeholder={this.state.userpassword}
                            type="text"
                            onChange={e => {this.setState({userpassword: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="3">
                        <Form.Group>
                          <label >
                            Repeat-Password
                          </label>
                          <Form.Control
                            placeholder={this.state.repet}
                            type="email"
                            onChange={e => {this.setState({repet: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>First Name</label>
                          <Form.Control
                            defaultValue={this.state.user.firstname}
                            placeholder="Company"
                            type="text"
                            onChange={e => {this.setState({userfirstname: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Last Name</label>
                          <Form.Control
                            defaultValue={this.state.user.lastname}
                            placeholder="Last Name"
                            type="text"
                            onChange={e => {this.setState({userlastname: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            defaultValue={this.state.user.adress}
                            placeholder="Home Address"
                            type="text"
                            onChange={e => {this.setState({useradress: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                            defaultValue={this.state.user.city}
                            placeholder="City"
                            type="text"
                            onChange={e => {this.setState({usercity: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            defaultValue={this.state.user.country}
                            placeholder="Country"
                            type="text"
                            onChange={e => {this.setState({usercountry: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Phone-number</label>
                          <Form.Control
                            defaultValue ={this.state.user.phone}
                            placeholder="ZIP Code"
                            type="number"
                            onChange={e => {this.setState({userphone: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>About Me</label>
                          <Form.Control
                            cols="80"
                            defaultValue={this.state.user.bio}
                            placeholder="Here can be your description"
                            rows="4"
                            as="textarea"
                            onChange={e => {this.setState({userbio: e.target.value})}}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Update Profile
                    </Button>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card className="card-user">
                <div className="card-image">
                  <img
                    alt="..."
                    src="https://t1.daumcdn.net/cfile/blog/994212335A710B6C1A"
                    className= "back"
                  ></img>
                </div>
                <Card.Body>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="photo"
                      src="https://img.insight.co.kr/static/2018/05/24/700/0qgnf8a7rnm459rwq4gs.jpg"
                      
                      ></img>
                      <h5 className="title">{this.state.user.firstname +" "+ this.state.user.lastname}</h5>
                    </a>
                    <p className="description">{this.state.user.name}</p>
                  </div>
                  <p className="description text-center">
                    {this.state.user.bio}
                  </p>
                </Card.Body>
                <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );}
  }
  
  export default User;
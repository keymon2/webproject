import React,{Component} from 'react'
import {createUser} from '../../../controller/ContollerUser'

import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'



class Register extends Component{
  constructor (props) {
    super(props)
    this.state = {
      username: "",
      useremail : "",
      userpassword : "",
      repet: "",
      message: "Repeat-password"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  

  handleSubmit= async e =>{
    e.preventDefault();
      
      if(this.state.userpassword === this.state.repet){
        const response = await createUser({
          "name": this.state.username,
          "email": this.state.useremail,
          "password": this.state.userpassword
        });
        if(response.success){
          this.props.history.push('/login')
        }
        else{
          this.setState({
            username: "",
            useremail : "",
            userpassword : "",
            repet: "",
            message: "Repeat-password"
          })
        }
    }else{
      this.setState({
        message: "wrong-plz-repeat same password",
        repet:""
      })
  
    }
  }

  
  render(){
    return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit = {this.handleSubmit}>
                  <h1>회원가입</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Username" autoComplete="username" 
                    onChange ={ e =>{this.setState({username: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Email" autoComplete="email" 
                    onChange ={ e => {this.setState({useremail: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder="Password" autoComplete="new-password" 
                    onChange = {e => {this.setState({userpassword: e.target.value })}} />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="password" placeholder={this.state.message}  
                    onChange ={e => {this.setState({repet: e.target.value })}}
                    value = {this.state.repet} />
                  </CInputGroup>
                  <CButton color="success" block type= "submit"> Create Account</CButton>
                </CForm>
              </CCardBody>
              <CCardFooter className="p-4">
                
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )}
}

export default Register

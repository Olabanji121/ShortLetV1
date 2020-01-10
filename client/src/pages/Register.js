import React, { useState, useContext, useEffect } from "react";
import { Form, Checkbox } from "semantic-ui-react";
import AlertContext from '../context/alert/AlertContext'
import AuthContext from '../context/auth/AuthContext'
import { Link } from "react-router-dom";


const Register = (props) => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {setAlert} = alertContext
  const {register, error, clearError, isAuthenticated} = authContext

  useEffect(()=>{
    if(isAuthenticated){
      props.history.push('/');
    }

    if(error === 'User already exists'){
       setAlert(error, 'danger')
       clearError()
    }
    // eslint-disable-next-line
  },[error, isAuthenticated, props])

  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    passwordConfirm: ""
  });

  const { name, email, password, passwordConfirm } = user;

  const handleSubmit = async e => {
    e.preventDefault();

    if(name === ''||email === '' || password=== '' ){
        setAlert('please enter all fields', 'danger')
    }else if( password !== passwordConfirm){
      setAlert('passwords do not match ', 'danger')
    }else{
      register({
        name,
        email,
        password
      })
      // console.log(name, email, password);
      
    }
   
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="container ">
      <div className=" col-8 col-sm-6 mx-auto" style={{ paddingTop: "15%" }}>
        <h2 className="text-center text-capitalize pb-5">register</h2>
        <Form onSubmit={handleSubmit} className="ui form">
          <div className="field ">
            <Form.Field>
              <label htmlFor="firstname">Name :</label>
              <input type="text" id="name" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="email">Email :</label>
              <input type="email" id="email" onChange={handleChange} />
            </Form.Field>
            <Form.Field>
              <label htmlFor="password">Password :</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                // required
                // minLength='8'
              />
            </Form.Field>
            <Form.Field>
              <label htmlFor="passwordConfirm">Confirm Password :</label>
              <input
                type="password"
                id="passwordConfirm"
                onChange={handleChange}
                // required
                // minLength='8'
              />
            </Form.Field>
          </div>

          <Form.Field
            control={Checkbox}
            label="I agree to the Terms and Conditions"
          />
          <div className="field mx-auto">
            <button className="ui orange button btn-block text-capitalize ">
              register
            </button>

            <h6 style={{ color: "orange", paddingTop: "20px" }} >Already have an account? <Link to="/login" className=" link text-dark">Login Here.</Link></h6>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;

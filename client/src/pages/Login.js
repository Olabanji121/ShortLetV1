import React, { useState, useContext, useEffect } from "react";
import { Form} from "semantic-ui-react";
import AlertContext from '../context/alert/AlertContext'
import AuthContext from '../context/auth/AuthContext'
import { Link } from "react-router-dom";

const Login = (props) => {

  const alertContext = useContext(AlertContext)
  const authContext = useContext(AuthContext)

  const {setAlert} = alertContext
  const {login, error, clearError, isAuthenticated} = authContext

  useEffect(()=>{
    if(isAuthenticated){
      props.history.push('/');
    }

    if(error === 'incorrect email or password' || error === 'Please input password and email'){
       setAlert(error, 'danger')
       clearError()
    }
    // eslint-disable-next-line
  },[error, isAuthenticated, props])


  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });

  const {email, password } = user;

  const handleSubmit = async e => {
    e.preventDefault();

    login({email, password})
    
    console.log(user);
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="container " >
          <div className=" col-8 col-sm-6 mx-auto" style={{paddingTop: "20%"}}>
          <h2 className="text-center text-capitalize pb-5">login</h2>
          <Form onSubmit={handleSubmit} className="ui form">
            <div className="field ">
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
                />
              </Form.Field>
            </div>
            <div className="field mx-auto">
              <button className="ui orange button btn-block text-capitalize ">
                login
              </button>
              <h6 style={{ color: "orange", paddingTop: "20px" }} >Don't have an account? <Link to="/register" className=" link text-dark">Register Here.</Link></h6>
            </div>
          </Form>
          </div>
          
        </div>
  );
};

export default Login;

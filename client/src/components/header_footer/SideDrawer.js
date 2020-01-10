import React, { Fragment, useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

const SideDrawer = ({ closeDrawer, onClose }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;


  const onLogout = ()=>{
    logout()
  }
  const authLinks = (
    <Fragment>
      <ListItem button>
        <Link to="#!" className="text-uppercase link text-dark">
          Hello {user && user.name.split(' ')[0]}
        </Link> 
      </ListItem>
      <ListItem button>
        <Link to="/rooms" className="text-uppercase  link text-dark">
          apartments
        </Link>
      </ListItem>

      <ListItem button>
        <Link onClick={onLogout} to="#!" className="text-uppercase link text-dark">
          <i className="fas fa-sign-out-alt"></i>
          <span >Log out</span>
        </Link>
      </ListItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ListItem button>
        <Link to="/" className="text-uppercase link text-dark">
          Home
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/register" className="text-uppercase link text-dark">
          Register
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/login" className="text-uppercase link text-dark">
          Login
        </Link>
      </ListItem>
      <ListItem button>
        <Link to="/rooms" className="text-uppercase  link text-dark">
          apartments
        </Link>
      </ListItem>
    </Fragment>
  );

  return (
    <Drawer anchor="right" open={closeDrawer} onClose={() => onClose(false)}>
      <List component="nav">
        {isAuthenticated ? authLinks : guestLinks}
        
      </List>
    </Drawer>
  );
};

export default SideDrawer;

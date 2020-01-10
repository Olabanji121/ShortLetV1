import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { RoomProvider } from "./Context";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import BookState from "./context/book/BookState";

ReactDOM.render(
  <AuthState>
    <AlertState>
      <BookState>
        <RoomProvider>
          <Router>
            <App />
          </Router>
        </RoomProvider>
      </BookState>
    </AlertState>
  </AuthState>,
  document.getElementById("root")
);

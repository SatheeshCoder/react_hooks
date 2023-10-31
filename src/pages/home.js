import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const linkStyle = {
    display: "inline",
    padding: "10px 20px",
    margin: "10px",
    border: "1px solid #007bff",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#007bff",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "bold",
    background: "white",
  };
  const fullnav = {
    marginBottom: "10px",
    border: "1px solid red",
    padding: "20px 0px",
  };
  return (
    <div style={fullnav}>
      <Link to="/" style={linkStyle}>
        Do some Memo
      </Link>
      <Link to="/do" style={linkStyle}>
        Do some Memo
      </Link>
      <Link to="/factorial" style={linkStyle}>
        Factorial Example
      </Link>{" "}
      <Link to="/even" style={linkStyle}>
        Even Example
      </Link>
      <Link to="/cart" style={linkStyle}>
        Cart Example
      </Link>
      <Link to="/factorialfor" style={linkStyle}>
        Factorialfor Example
      </Link>
      <Link to="/incrementcallhook" style={linkStyle}>
        Incrementcallhook Example
      </Link>
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <div style={{display: "flex", paddingBottom:'10px'}}>
        <img src="seedling-emoji-clipart-original.svg" alt="logo" width={100} height={100}/>
        <h1 className="display-4" style={{paddingTop: '45px'}}>Welcome to MathSprouts</h1>
        </div>
        <p className="lead">
          A tool with metacognitive parental scaffolding for personalized, early informal math learning.
        </p>
        <hr className="my-4" />
        <p className="lead">
          This is a POC graph that demonstrates how a parent/caregiver can get a snapshot of their child's learning and interact with the data to engage with and teach their child.
        </p>
      </div>
      <div>
        <Link
            to="/demo"
            className="btn btn-lg custom-button"
            role="button"
        >
          View Demo
        </Link>
      </div>
    </div>
  </div>
);
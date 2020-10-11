import React from "react";
import { Link } from "react-router-dom";
import Graph from "react-graph-vis";

import 'vis-network/dist/vis-network.min.css';

const not_ready_nodec = "#F5F5F5";
const prox_zone_nodec = "#E1D5E7"
const learning_nodec = "#C7DCFC"
const learned_nodec = "#D5E8D4"

const not_ready_edgec = "#B85450"
const prox_zone_edgec = "#D79B00"
const learned_edgec = "#82B366"

const shape = "dot"
const width = 3

const ANS = "<h3>Approximate Number Sense (ANS)</h3>\n" +
    "<hr />\n" +
    "<p><span><a href=\"https://en.wikipedia.org/wiki/Approximate_number_system#:~:text=The%20approximate%20number%20system%20(ANS,relying%20on%20language%20or%20symbols.&amp;text=The%20ANS%20plays%20a%20crucial,exact%20number%20and%20simple%20arithmetic.\">From Wikipedia:</a> The&nbsp;</span><b>approximate number system</b><span>&nbsp;(</span><b>ANS</b><span>)<br /> is a cognitive system that supports the estimation of the&nbsp;<br /></span><a href=\"https://en.wikipedia.org/wiki/Magnitude_(mathematics)\" title=\"Magnitude (mathematics)\">magnitude</a><span>&nbsp;of a group without relying on language or symbols.&nbsp;<br />Beginning in early infancy, the ANS allows an individual to detect <br />differences in magnitude between groups. The precision of the <br />ANS improves throughout childhood development...The ANS <br />plays a crucial role in development of other numerical abilities, <br />such as the concept of exact number and simple arithmetic. <br />The precision level of a child's ANS has been shown to predict <br />subsequent mathematical achievement in school.</span></p>"

// function edge()

const graph = {
  nodes: [
    { id: 1, label: "ANS", title: ANS, shape: shape, color: learned_nodec },
    { id: 2, label: "Node 2", title: "node 2 tootip text", shape: shape, color: learning_nodec },
    { id: 3, label: "Node 3", title: "node 3 tootip text", shape: shape, color: prox_zone_nodec },
    { id: 4, label: "Node 4", title: "node 4 tootip text", shape: shape, color: prox_zone_nodec },
    { id: 5, label: "Node 5", title: "node 5 tootip text", shape: shape, color: prox_zone_nodec },
    { id: 6, label: "Node 6", title: "node 5 tootip text", shape: shape, color: not_ready_nodec }
  ],
  edges: [
    { from: 1, to: 2, color: learned_edgec },
    { from: 1, to: 3, color: prox_zone_edgec },
    { from: 2, to: 4, color: prox_zone_edgec },
    { from: 2, to: 5, color: prox_zone_edgec },
    { from: 3, to: 6, color: not_ready_edgec }
  ]
};

const options = {
  layout: {
    hierarchical: true
  },
  edges: {
    color: "#000000",
    width: width
  },
  nodes: {
    font: {
      size: 23,
      strokeWidth: 1,
    },
    // shadow: {
    //   enabled: true
    // },
  },
  height: "500px"
};

const events = {
  select: function(event) {
    var { nodes, edges } = event;
  }
};

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
      </div>
      <div>
        <Graph
            graph={graph}
            options={options}
            events={events}
            getNetwork={network => {
              //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
        />
      </div>
      <div>
        {/*<Link*/}
        {/*    to="/children"*/}
        {/*    className="btn btn-lg custom-button"*/}
        {/*    role="button"*/}
        {/*>*/}
        {/*  View Children*/}
        {/*</Link>*/}
      </div>
    </div>
  </div>
);
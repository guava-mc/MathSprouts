import React from "react";
import { Link } from "react-router-dom";
import Graph from "react-graph-vis";
import Modal from "bootstrap/js/src/modal";
import Button from "bootstrap/js/src/button";

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

const a = true

const near = 1
const norm = 5
const far = 10

const ANS = "<h3>Approximate Number Sense (ANS)</h3>\n" +
    "<hr />\n" +
    "<p><span><a href=\"https://en.wikipedia.org/wiki/Approximate_number_system#:~:text=The%20approximate%20number%20system%20(ANS,relying%20on%20language%20or%20symbols.&amp;text=The%20ANS%20plays%20a%20crucial,exact%20number%20and%20simple%20arithmetic.\">From Wikipedia:</a> The&nbsp;</span><b>approximate number system</b><span>&nbsp;(</span><b>ANS</b><span>)<br /> is a cognitive system that supports the estimation of the&nbsp;<br /></span><a href=\"https://en.wikipedia.org/wiki/Magnitude_(mathematics)\" title=\"Magnitude (mathematics)\">magnitude</a><span>&nbsp;of a group without relying on language or symbols.&nbsp;<br />Beginning in early infancy, the ANS allows an individual to detect <br />differences in magnitude between groups. The precision of the <br />ANS improves throughout childhood development...The ANS <br />plays a crucial role in development of other numerical abilities, <br />such as the concept of exact number and simple arithmetic. <br />The precision level of a child's ANS has been shown to predict <br />subsequent mathematical achievement in school.</span></p>"

// function edge()

const graph = {
    nodes: [
        { id: 1, group: 1, label: "ANS", title: ANS, shape: shape, color: learned_nodec },
        { id: 2, group: 2, label: "Count 1 to 5", title: "1 2 3 4 5", shape: shape, color: learned_nodec },
        { id: 3, group: 2, label: "Count 5 to 1", title: "5 little speckled frogs", shape: shape, color: learned_nodec },
        { id: 4, group: 2, label: "Count 1 to 10", title: "!!!!!!!!", shape: shape, color: learned_nodec },
        { id: 5, group: 2, label: "Count 10 to 1", title: "!!!!!!!!!", shape: shape, color: learning_nodec },
        { id: 6, group: 2, label: "Count 1 to 20", title: "!!!!!!!!!!!!!!!!!!!!", shape: shape, color: learning_nodec },
        { id: 7, group: 2, label: "Count 20 to 1", title: "!!!!!!!!!!!!!!!!!!!!", shape: shape, color: prox_zone_nodec },
        { id: 8, group: 2, label: "Number zero", title: "Ahh!!!", shape: shape, color: prox_zone_nodec },
        { id: 9, group: 3, label: "Basic shapes", title: "Circle, Square, Rectangle, Triangle", shape: shape, color: learned_nodec },
        { id: 10, group: 3, label: "Advanced shapes", title: "Rhombus, Pentagon, Hexagon, Octagon, etc", shape: shape, color: learning_nodec },
        { id: 11, group: 4, label: "Quantities", title: "Do you want 3 or 5 pretzels?", shape: shape, color: prox_zone_nodec },
        { id: 12, group: 4, label: "Sizes", title: "Bigger, smaller, shorter, taller, farther, closer", shape: shape, color: prox_zone_nodec },
        { id: 13, group: 4, label: "Measuring", title: "The road to being a metrologist", shape: shape, color: not_ready_nodec },
        { id: 14, group: 4, label: "Seriation", title: "Piagetian way of saying sorting!", shape: shape, color: learning_nodec },
        { id: 15, group: 4, label: "Patterns", title: "red blue green red _____ green", shape: shape, color: prox_zone_nodec },
        { id: 16, group: 5, label: "Addition L1", title: "one and another one is two", shape: shape, color: not_ready_nodec },
        { id: 17, group: 5, label: "Subtraction L1", title: "one minus one is zero", shape: shape, color: not_ready_nodec },
        { id: 18, group: 5, label: "Addition L2", title: "2 + 2 = 4", shape: shape, color: not_ready_nodec },
        { id: 19, group: 5, label: "Subtraction L2", title: "5 - 3 = 2", shape: shape, color: not_ready_nodec },
        { id: 20, group: 5, label: "Base 10", title: "10^3 10^2 10^1 10^0", shape: shape, color: not_ready_nodec }
    ],
    edges: [
        { from: 1, to: 2, color: not_ready_edgec },
        { from: 1, to: 2, color: not_ready_edgec },
        { from: 1, to: 3, color: not_ready_edgec },
        { from: 1, to: 4, color: not_ready_edgec },
        { from: 1, to: 9, color: not_ready_edgec },
        { from: 1, to: 11, color: not_ready_edgec },
        { from: 1, to: 12, color: not_ready_edgec },
        { from: 1, to: 14, color: not_ready_edgec },
        { from: 2, to: 3, color: not_ready_edgec },
        { from: 2, to: 4, color: not_ready_edgec },
        { from: 3, to: 2, color: not_ready_edgec },
        { from: 3, to: 5, color: not_ready_edgec },
        { from: 4, to: 6, color: not_ready_edgec },
        { from: 4, to: 5, color: not_ready_edgec },
        { from: 5, to: 4, color: not_ready_edgec },
        { from: 5, to: 7, color: not_ready_edgec },
        { from: 1, to: 8, color: not_ready_edgec },
        { from: 1, to: 2, color: not_ready_edgec },
        { from: 1, to: 3, color: not_ready_edgec },
        { from: 1, to: 4, color: not_ready_edgec },
        { from: 1, to: 5, color: not_ready_edgec },
        { from: 1, to: 6, color: not_ready_edgec },
        { from: 1, to: 7, color: not_ready_edgec },
        { from: 9, to: 10, color: not_ready_edgec },
        { from: 11, to: 13, color: not_ready_edgec },
        { from: 12, to: 13, color: not_ready_edgec },
        { from: 14, to: 15, color: not_ready_edgec },
        { from: 2, to: 16, color: not_ready_edgec },
        { from: 4, to: 16, color: not_ready_edgec },
        { from: 6, to: 16, color: not_ready_edgec },
        { from: 3, to: 17, color: not_ready_edgec },
        { from: 5, to: 17, color: not_ready_edgec },
        { from: 7, to: 17, color: not_ready_edgec },
        { from: 16, to: 17, color: not_ready_edgec },
        { from: 17, to: 16, color: not_ready_edgec },
        { from: 16, to: 18, color: not_ready_edgec },
        { from: 17, to: 19, color: not_ready_edgec },
        { from: 18, to: 19, color: not_ready_edgec },
        { from: 19, to: 18, color: not_ready_edgec },
        { from: 6, to: 20, color: not_ready_edgec },
        { from: 7, to: 20, color: not_ready_edgec },
        { from: 18, to: 20, color: not_ready_edgec },
        { from: 19, to: 20, color: not_ready_edgec },

    ]
};

const options = {
    layout: {
        hierarchical: true
    },
    edges: {
        color: "#000000",
        width: width,
        // length: norm,
        smooth: {
            enabled: true,
            type: 'dynamic'
        },
    },
    nodes: {
        font: {
            size: 23,
            strokeWidth: 1,
        },
    },
    physics: {
        forceAtlas2Based: {
            gravitationalConstant: -26,
            centralGravity: 0.005,
            springLength: 230,
            springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
    },
    height: "500px"
};

const events = {
    select: function(event) {
        var { nodes, edges } = event;
        alert(`Hey you clicked on the ${graph.nodes[nodes-1].label} node. One day clicking on a node will bring up a modal with different lessons and activities to perform with personalized recommendations. For now you get this alert xD`)
    }
};

export default () => (
    <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
        <div className="jumbotron jumbotron-fluid bg-transparent">
            <div className="container secondary-color">
                <div style={{display: "flex", paddingBottom:'10px'}}>
                    <img src="sunny.png" alt="logo" width={100} height={100}/>
                    <h1 className="display-4" style={{paddingTop: '45px'}}>Welcome back Sunny</h1>
                </div>
                <p className="lead">
                    You and Jupiter have been putting in a lot of great work! Now would be a great time to work on magnitude together!
                </p>
                <hr className="my-4" />
                <p className="lead">
                    Journal - Profile
                </p>
            </div>
            <div>
            {/*    {a && <Modal.Dialog>*/}
            {/*        <Modal.Header closeButton>*/}
            {/*            <Modal.Title>Modal title</Modal.Title>*/}
            {/*        </Modal.Header>*/}

            {/*        <Modal.Body>*/}
            {/*            <p>Modal body text goes here.</p>*/}
            {/*        </Modal.Body>*/}

            {/*        <Modal.Footer>*/}
            {/*            <Button variant="secondary">Close</Button>*/}
            {/*            <Button variant="primary">Save changes</Button>*/}
            {/*        </Modal.Footer>*/}
            {/*    </Modal.Dialog>}*/}
            {/*</div>*/}
                <Graph
                    graph={graph}
                    options={options}
                    events={events}
                    getNetwork={network => {
                        //  if you want access to vis.js network api you can set the state in a parent component using this property
                    }}
                />
            </div>
        </div>
    </div>
);
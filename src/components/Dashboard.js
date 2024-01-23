import React, { } from "react";

// import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Base from "../Base/Base";

function Dashboard() {

  return (
    <Base
    title={"Dashbord"}
    discription={"Dashboard Details"}
    >
      <div className="">

<div className="card-container">
  <div className="card">
    <p>Earnings[monthly]</p>
    <p>$40,000</p>
  </div>
  <div className="card">
    <p>Earnings[Annual]</p>
    <p>$215,000</p>
  </div>
  <div className="card">
    <label for="file"><p>Task</p></label>
    <progress id="file" max="100" value="70">70%</progress>
  </div>
  <div className="card">
    <p>Pending Request</p>
    <p>20</p>
  </div>
</div>

<div className="top3">
  <div className="pro">
    <h3>Projects</h3>
    <div>
      <label>Server Migration 20%</label>
      <ProgressBar variant="success" now={20} />
    </div>
    <label>Sales Tracking 40%</label>
    <ProgressBar variant="info" now={40} />
    <label>Customer Database 60%</label>
    <ProgressBar variant="warning" now={60} />
    <label>Payout Details 80%</label>
    <ProgressBar variant="primary" now={80} />
    <label>Account Setup 90%</label>
    <ProgressBar variant="danger" now={90} />


  </div>
  <div className="illu">
    <h3>Illustrations</h3>
    <p>
      Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection
      of beautiful svg images that you can use completely free and without attribution!
    </p>
  </div>
</div>

<div className="top4">
  <div className="bn">
    <div className="car1 card1">
      <p>Primary</p>
      <p>#4e73df</p>
    </div>
    <div className="car2 card1">
      <p>Success</p>
      <p>#1cc88a</p>
    </div>
    <div className="car3 card1">
      <p>Info</p>
      <p>#36b9cc</p>
    </div>
    <div className="car4 card1">
      <p>Warning</p>
      <p>#f6c23e</p>
    </div>
    <div className="car5 card1">
      <p>Danger</p>
      <p>#e74a3b</p>
    </div>
    <div className="car6 card1">
      <p>Secondary</p>
      <p>#858796</p>
    </div>
    <div className="car7 card1">
      <p>Light</p>
      <p>#f8f9fc</p>
    </div>
    <div className="car8 card1">
      <p>Dark</p>
      <p>#5a5c69</p>
    </div>
  </div>
  <div className="th">
    <h3>Development Approach</h3>
    <p>
      SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor
      page performance. Custom CSS classes are used to create custom components and custom utility classes.
      Before working with this theme, you should become familiar with the Bootstrap framework, especially
      the utility classes.
    </p>
  </div>
</div>

</div>
     </Base>

    )
}

export default Dashboard;





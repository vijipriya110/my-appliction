import React from "react";
import { Card } from "react-bootstrap";
import Base from "../Base/Base";


function Buttons() {

  return (
     <Base
     title={"Buttons"}
     discription={"Buttons Details"}
     >
          <div className="">
      <div className="title">
        <h1>Buttons</h1>
      </div>
      <div>
        <h5 className="title">Example</h5>
      </div>
      <div className="card-container title">
        <div className="card1 title" >
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Buttson Type</Card.Title>

              <Card.Text>
                Bootstrap includes several predefined button styles,
                each serving its own semantic purpose, with a few extras thrown in for more control.
              </Card.Text>


              <button type="button" class="btn btn-primary">Primary</button>
              <button type="button" class="btn btn-secondary">Secondary</button>
              <button type="button" class="btn btn-success">Success</button>
              <button type="button" class="btn btn-danger">Danger</button>
              <button type="button" class="btn btn-warning">Warning</button>
              <button type="button" class="btn btn-info">Info</button>
              <button type="button" class="btn btn-light">Light</button>
              <button type="button" class="btn btn-dark">Dark</button>
              <button type="button" class="btn btn-link">Link</button>

            </Card.Body>
          </Card>

        </div>
        <div className="card2 title" >
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Outline buttons</Card.Title>

              <Card.Text>
                In need of a button, but not the hefty background colors they bring?
                Replace the default modifier classes with the .
                btn-outline-* ones to remove all background images and colors on any button.
              </Card.Text>


              <button type="button" class="btn btn-outline-primary">Primary</button>
              <button type="button" class="btn btn-outline-secondary">Secondary</button>
              <button type="button" class="btn btn-outline-success">Success</button>
              <button type="button" class="btn btn-outline-danger">Danger</button>
              <button type="button" class="btn btn-outline-warning">Warning</button>
              <button type="button" class="btn btn-outline-info">Info</button>
              <button type="button" class="btn btn-outline-light">Light</button>
              <button type="button" class="btn btn-outline-dark">Dark</button>

            </Card.Body>
          </Card>

        </div>
        <div className="card3 title" >
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Sizes</Card.Title>

              <Card.Text>
              In need of a button, but not the hefty background colors they bring? Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
              </Card.Text>


              <button type="button" class="btn btn-primary btn-lg">Large button</button>
              <button type="button" class="btn btn-secondary btn-lg">Large button</button>
              <button type="button" class="btn btn-primary btn-sm">Small button</button>
              <button type="button" class="btn btn-secondary btn-sm">Small button</button>
              <button type="button" class="btn btn-primary btn-lg btn-block">Block level button</button>
              <button type="button" class="btn btn-secondary btn-lg btn-block">Block level button</button>

            </Card.Body>
          </Card>

        </div>
        <div className="card4 title" >
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>State</Card.Title>

              <Card.Text>
              In need of a button, but not the hefty background colors they bring? Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.
              </Card.Text>
              <p>Active</p>
              <a href="#" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Primary link</a>
<a href="#" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Link</a>
<p>Disabled</p>
<button type="button" class="btn btn-lg btn-primary" disabled>Primary button</button>
<button type="button" class="btn btn-secondary btn-lg" disabled>Button</button>



            </Card.Body>
          </Card>

        </div>
      </div>

    </div>
     </Base>

  )
}

export default Buttons


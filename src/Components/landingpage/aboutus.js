import React, { Fragment } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./aboutus.css";

export default function AboutUs() {
  return (
    <Fragment>
        
        <h1>About Us Page</h1><br />
        <div className="bg">
        <div class="containers">
            <div class="row">
                
                {/* <div id="rectangle"> */}
                    <p className="rectangle"><br/>Brain-Computer Interface (BCI) is collaboration between a brain and a device that enables signals from
                    brain to command some external activities. The interface enables a direct communication pathway between the brain and an external device. BCIs are often directed at assisting, augmenting, or repairing
                    human cognitive or sensory-motor functions.</p>
                {/* </div> */}
               
            </div>
        </div>
        <br/> <br/>
    <div className="cards">
        <div className="c1">
        <Card style={{ width: '10rem', height:'10rem' }}>
        <Card.Img variant="top" src="lap.jpg" height="50px" width="50px" />
        <Card.Body  >
          <Card.Title style={{color:'white'}}><u>Khushboo</u></Card.Title>
          <br/>
          <Card.Text>
          Some nice intro about us. <br/>Thanks!
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="c2">
      <Card style={{ width: '10rem', height:'10rem' }}>
        <Card.Img variant="top" src="lap.jpg" height="50px" width="50px" />
        <Card.Body>
          <Card.Title style={{color:'white'}}><u>Gargi</u></Card.Title>
          <br/>
          <Card.Text>
            Some nice intro about us. <br/>Thanks!
          </Card.Text>
          <Button>Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
      </div>
    </Fragment>
  );
}
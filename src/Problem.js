import React from 'react';
import 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Problem.css';

// API로 문제 가져온다고 생각하고 작성
var Proset = {
    Problem: 'Problem String',
    Choice1: 'Choice 1',
    Choice2: 'Choice 2',
    Choice3: 'Choice 3',
    Choice4: 'Choice 4',
    Answer: 3
}

export var Answerset = {
    Sid: 0,
    Asel: 0
}

// Popmodal에 들어가는 Problem 제출 양식
class Problem extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.S_id.value);
        console.log(event.target.A_sel.value);
        Answerset.Sid = event.target.S_id.value;
        Answerset.Asel = event.target.A_sel.value;
        console.log("Answerset");
        console.log(Answerset);
    }

    render () {
        return (
            <div className="Problem">
                <Form onSubmit={this.handleSubmit}>
                    <p>{Proset.Problem}</p>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>StudentID</Form.Label>
                        <Form.Control name="S_id" type="number" placeholder="Enter Student ID" />
                        <Form.Text className="text-muted">
                        Number only
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Answer select</Form.Label>
                        <Form.Control name="A_sel" as="select">
                        <option>{Proset.Choice1}</option>
                        <option>{Proset.Choice2}</option>
                        <option>{Proset.Choice3}</option>
                        <option>{Proset.Choice4}</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Problem;
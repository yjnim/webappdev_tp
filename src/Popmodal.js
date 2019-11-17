import React, {useState} from 'react';
import 'react-bootstrap';
import Problem from './Problem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// Popup으로 문제 내기

function Popmodal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Popmodal'>
            <Button variant="primary" onClick={handleShow}>
               Launch Problem
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Problem</Modal.Title>
                </Modal.Header>
                <Modal.Body><Problem></Problem></Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
    
}

export default Popmodal;
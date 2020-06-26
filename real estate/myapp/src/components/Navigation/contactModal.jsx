import React from 'react';
import {Modal, Button} from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
               
            </Modal.Header>
            <Modal.Body>
                <h4>SCHEDULE A VISIT</h4>
                <form name="sentMessage" id="contactForm" noValidate>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="subject" id="subject" className="form-control" placeholder="Subject" required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                
                            </form>

                        
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} style={{ background: '#D0A24C', border: '2px solid #D0A24C' }}>SEND MESSAGE</Button>
                
            </Modal.Footer>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;

import './App.css';
import React, { useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import MyVerticallyCenteredModal from './components/Modal';
import Header from './components/Header';

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [image, setImage] = useState();
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [name, setName] = useState("name");
  const [idNumber, setIdNumber] = useState("number");
  const [last_name, setLastName] = useState("lastname");
  const [date_of_birth, setDOB] = useState("date of birth");
  const [date_of_issue, setDOI] = useState('date of issue');
  const [date_of_expiry, setDOE] = useState("date of expiry");


  return (
    <>
      <Header />
      <div className='container'>
        <div className='form_outline'>
          {!isImageUploaded ? (
            <Button variant="light" onClick={() => setModalShow(true)}>
              Upload ID Card
            </Button>
          ) : (
            <Image src={image} thumbnail style={{ maxHeight: '200px' }} />
          )}
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            setImage={setImage}
            setIsImageUploaded={setIsImageUploaded}
          />
          {isImageUploaded ? (
            <div className="d-flex flex-column align-items-center">
              <h6 className='my-2'>Name: {name}</h6>
              <h6 className='my-2'>Last Name: {last_name}</h6>
              <h6 className='my-2'>ID Number: {idNumber}</h6>
              <h6 className='my-2'>Date Of Birth: {date_of_birth}</h6>
              <h6 className='my-2'>Date Of Issue: {date_of_issue}</h6>
              <h6 className='my-2'>Date Of Expiry: {date_of_expiry}</h6>
              <div className="my-3">
                <Button className='mt-3 ml-2' variant="success" onClick={() => setIsImageUploaded(false)}>
                  Save
                </Button>
                <Button className='mt-3 mr-2' variant="primary" onClick={() => setIsImageUploaded(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default App;

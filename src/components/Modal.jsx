import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    console.log("File uploaded:", file);
    props.setImage(URL.createObjectURL(file));
    props.setIsImageUploaded(true);
    setFile(null);
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload Image
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="text-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mb-3"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpload} disabled={!file}>
          Upload
        </Button>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyVerticallyCenteredModal;

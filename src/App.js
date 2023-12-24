import React, { useState } from 'react';
import './App.css'; 
import ImgUploader from './ImgUploader';
import JsonOutput from './JsonOutput';
import PowerButton from './PowerButton';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  const handleImageUpload = (file) => {
    setSelectedImage(file);
    // You can add additional logic here to process the image if needed
  };

  const handleDetailsClick = () => {
    // Add logic to handle Details button click
    console.log('Details button clicked');
  };

  const handleDeleteClick = () => {
    // Add logic to handle Delete button click
    console.log('Delete button clicked');
  };

  return (
    <div className="App-container"> 
      <h1>OCR Assignment</h1>

      <div className="box">
        <h2>Upload ID</h2>
        <ImgUploader onImageUpload={handleImageUpload} />
      </div>

      {selectedImage && (
        <div className="box">
          <h2>JSON</h2>
          <JsonOutput jsonData={jsonData} />
        </div>
      )}

      {selectedImage && (
        <div className="box">
          <PowerButton label="Details" onClick={handleDetailsClick} />
          <PowerButton label="Delete" onClick={handleDeleteClick} />
        </div>
      )}
    </div>
  );
};

export default App;

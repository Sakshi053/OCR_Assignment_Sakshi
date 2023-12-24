import React, { useState } from 'react';

const ImgUploader = ({ onImageUpload }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    onImageUpload(file);
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
    </div>
  );
};

export default ImgUploader;

import React from 'react';

const PowerButton = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default PowerButton;

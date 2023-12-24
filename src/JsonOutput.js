import React from 'react';

const JsonOutput = ({ jsonData }) => (
  <div>
    <pre>{JSON.stringify(jsonData, null, 2)}</pre>
  </div>
);

export default JsonOutput;

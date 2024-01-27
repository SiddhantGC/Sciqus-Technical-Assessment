import React, { useState } from 'react';

const RegistrationForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    // Add more fields as needed
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Actual API call using fetch
    actualApiCall(formData)
      .then(() => {
        console.log('Form submitted successfully:', formData);
        // Reset form fields after submission
        setFormData({
          name: '',
          age: '',
          // Reset other fields as needed
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  // Actual API call using fetch
  const actualApiCall = (data) => {
    return fetch('your-api-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add other headers as needed
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
  };

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        {/* Add more form fields here */}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

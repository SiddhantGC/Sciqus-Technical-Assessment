import React from 'react';

const StudentDetails = ({ student }) => {
  return (
    <div>
      <h2>Student Details</h2>
      <p>
        <strong>ID:</strong> {student.id}
      </p>
      <p>
        <strong>Name:</strong> {student.name}
      </p>
      <p>
        <strong>Age:</strong> {student.age}
      </p>
    </div>
  );
};

export default StudentDetails;

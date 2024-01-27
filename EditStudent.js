import React, { useState } from 'react';

const EditStudent = ({ student, onSave, onCancel }) => {
  const [editedName, setEditedName] = useState(student.name);
  const [editedAge, setEditedAge] = useState(student.age);

  const handleSave = () => {
    const editedStudent = {
      ...student,
      name: editedName,
      age: parseInt(editedAge, 10),
    };

    onSave(editedStudent);
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form>
        <label htmlFor="editedName">Name:</label>
        <input
          type="text"
          id="editedName"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />

        <label htmlFor="editedAge">Age:</label>
        <input
          type="number"
          id="editedAge"
          value={editedAge}
          onChange={(e) => setEditedAge(e.target.value)}
        />

        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditStudent;

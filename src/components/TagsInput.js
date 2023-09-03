// Import the necessary dependencies from the React library.
import React, { useState } from 'react';

// Import the CSS file for styling.
import "./TagsInput.css";

// Define a functional component called TagsInput.
function TagsInput({ tags, onChange }) {
  // Initialize a state variable called inputValue using the useState hook.
  // This state will store the value of the input field.
  const [inputValue, setInputValue] = useState('');

  // Define a function to handle changes in the input field.
  const handleInputChange = (event) => {
    // When the input value changes, update the state variable inputValue
    // with the new value entered by the user.
    setInputValue(event.target.value);
  };

  // Define a function to handle keydown events in the input field.
  const handleInputKeyDown = (event) => {
    // Check if the user pressed the Enter key and if the inputValue is not empty.
    if (event.key === 'Enter' && inputValue) {
      // If the Enter key is pressed and the inputValue is not empty,
      // call the onChange function with a new array that includes the
      // current tags and the inputValue.
      onChange([...tags, inputValue]);

      // Clear the input field by setting inputValue to an empty string.
      setInputValue('');
    }
  };

  // Render the TagsInput component.
  return (
    <div className="tags-input">
      {/* Render an input field */}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange} // Call handleInputChange when the input value changes.
        onKeyDown={handleInputKeyDown} // Call handleInputKeyDown on keydown events.
        placeholder="Enter tags and press Enter" // Placeholder text for the input field.
      />

      {/* Render a div to display the list of tags */}
      <div className="tags-list">
        {/* Map through the tags array and render a div for each tag. */}
        {tags.map((tag, index) => (
          <div className="tag" key={index}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

// Export the TagsInput component as the default export.
export default TagsInput;

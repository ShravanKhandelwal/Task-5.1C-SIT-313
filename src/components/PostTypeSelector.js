// Import the React library, which is necessary for creating React components.
import React from 'react';

// Import the CSS file for styling this component.
import "./PostTypeSelector.css";

// Define a functional component called PostTypeSelector that takes a prop onSelect.
function PostTypeSelector({ onSelect }) {
  return (
    // Create a div element with a CSS class name "post-type-selector" for styling.
    <div className="post-type-selector">

      {/* Create a div element with a CSS class name "inputs" to group the radio buttons and text. */}
      <div className="inputs">

        {/* Display a text label for the radio buttons. */}
        <p>SELECT POST TYPE : </p>

        {/* Create a radio input element for selecting "Article" type posts. */}
        <input
          type="radio"             // Set the input type to radio.
          value="Article"          // Set the value attribute to "Article".
          name="gender"            // Set the name attribute to "gender" (used to group the radio buttons).
          onClick={() => onSelect('article')} // Call the onSelect prop with 'article' when this radio button is clicked.
        />
        Article {/* Display the text "Article" next to the radio button. */}

        {/* Create a radio input element for selecting "Question" type posts. */}
        <input
          type="radio"             // Set the input type to radio.
          value="Question"         // Set the value attribute to "Question".
          name="gender"            // Set the name attribute to "gender" (used to group the radio buttons).
          onClick={() => onSelect('question')} // Call the onSelect prop with 'question' when this radio button is clicked.
        />
        Question {/* Display the text "Question" next to the radio button. */}
      </div>
    </div>
  );
}

// Export the PostTypeSelector component to make it available for use in other parts of the application.
export default PostTypeSelector;

// Importing necessary modules and components from React and custom files
import React, { useState } from 'react';
import PostTypeSelector from './components/PostTypeSelector'; // Importing a component for selecting post types
import PostInfoForm from './components/PostForm'; // Importing a component for displaying and submitting post information

// Importing a CSS file to style the application
import "./App.css";

// Define the main functional component called App
function App() {
  // Using the 'useState' hook to create a state variable 'postType' and a function 'setPostType' to update it
  const [postType, setPostType] = useState(null);

  // A function 'handlePostTypeChange' that takes a 'type' parameter and updates the 'postType' state when a post type is selected
  const handlePostTypeChange = (type) => {
    setPostType(type);
  };

  // Rendering the application's UI
  return (
    <div className="app"> {/* Creating a container div with the class name 'app' */}
      <h1>New Post</h1> {/* Displaying a heading */}
      {/* Rendering the 'PostTypeSelector' component and passing the 'handlePostTypeChange' function as a prop */}
      <PostTypeSelector onSelect={handlePostTypeChange} />
      {/* Rendering the 'PostInfoForm' component only if 'postType' is not null */}
      {postType && <PostInfoForm postType={postType} />}
    </div>
  );
}

// Exporting the 'App' component as the default export of this file
export default App;

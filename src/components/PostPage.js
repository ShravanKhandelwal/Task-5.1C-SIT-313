// Importing React and necessary components and styles
import React, { useState } from 'react';
import PostTypeSelector from './PostTypeSelector'; // Importing a component named PostTypeSelector from './PostTypeSelector.js'
import PostForm from './PostForm'; // Importing a component named PostForm from './PostForm.js'
import "./PostPage.css"; // Importing a CSS file for styling

// Defining a functional component named PostPage
function PostPage() {
  // Initializing a state variable 'postType' using the 'useState' hook
  const [postType, setPostType] = useState('');

  // Rendering the component
  return (
    <div className="post-page"> {/* Creating a div element with a CSS class 'post-page' */}
      <h1>New Post</h1> {/* Displaying a heading with the text 'New Post' */}
      {/* Rendering the PostTypeSelector component and passing it a prop onSelectType which is a function to set 'postType' */}
      <PostTypeSelector onSelectType={setPostType} />
      {/* Rendering the PostForm component and passing it a prop 'postType' */}
      <PostForm postType={postType} />
    </div>
  );
}

// Exporting the PostPage component as the default export of this module
export default PostPage;

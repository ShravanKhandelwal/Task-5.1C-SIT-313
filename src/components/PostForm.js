// Import React and useState from React library
import React, { useState } from "react";
// Import the TagsInput component from the "./TagsInput" file
import TagsInput from "./TagsInput";

// Import the CSS styles for this component from "./PostForm.css"
import "./PostForm.css";

// Define a functional component called PostInfoForm, which takes a prop called postType
function PostInfoForm({ postType }) {
  // Use the useState hook to initialize state variables
  const [title, setTitle] = useState(""); // Initialize the title state variable as an empty string
  const [description, setDescription] = useState(""); // Initialize the description state variable as an empty string
  const [tags, setTags] = useState([]); // Initialize the tags state variable as an empty array
  const [moreInfo, setMoreInfo] = useState(""); // Initialize the moreInfo state variable as an empty string

  // Define event handlers for updating the state variables when user input changes
  const handleTitleChange = (event) => {
    setTitle(event.target.value); // Update the title state with the input value
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Update the description state with the textarea value
  };

  const handleTagsChange = (newTags) => {
    setTags(newTags); // Update the tags state with the new tags provided
  };

  const handleMoreInfoChange = (event) => {
    setMoreInfo(event.target.value); // Update the moreInfo state with the textarea value
  };

  // Render the form component with input fields, textarea, and TagsInput component
  return (
    <div className="post-info-form">
      <h4>What Do You Want To Ask Or Share?</h4>

      {/* Render a dynamic title input field based on the postType prop */}
      <h2>{postType === "article" ? "Abstract" : "Title"}</h2>
      <input
        type="text"
        value={title}
        onChange={handleTitleChange}
        placeholder={postType === "article" ? "Enter abstract" : "Enter title"}
      />

      {/* Render a dynamic textarea based on the postType prop */}
      <h2>Describing Your {postType === "article" ? "Article" : "Problem"}</h2>
      <textarea
        value={description}
        onChange={handleDescriptionChange}
        placeholder={
          postType === "article"
            ? "Describe your article..."
            : "Describe your problem..."
        }
      />

      {/* Render a "More Information" textarea if the postType is "article" */}
      {postType === "article" && (
        <div>
          <h2>More Information</h2>
          <textarea
            value={moreInfo}
            onChange={handleMoreInfoChange}
            placeholder="Provide more information about your article..."
          />
        </div>
      )}

      {/* Render the TagsInput component to handle tags */}
      <h2>Tags</h2>
      <TagsInput tags={tags} onChange={handleTagsChange} />

      {/* Render a "Post" button */}
      <button>Post</button>
    </div>
  );
}

// Export the PostInfoForm component as the default export of this module
export default PostInfoForm;

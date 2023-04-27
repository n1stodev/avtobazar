import React, { useState } from "react";

const AddPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    color: "",
    author: "",
    distance: 0,
    variant: "",
    wheel: "bor",
    image: "", // use null instead of an empty string for the image property
    year: 0,
    price: 0,
    description: "",
    phoneNumber: 0,
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  console.log(postData.image);

  const handleImageChange = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    setPostData({ ...postData, image: formData });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", postData.title);
      formData.append("color", postData.color);
      formData.append("author", postData.author);
      formData.append("distance", postData.distance);
      formData.append("variant", postData.variant);
      formData.append("wheel", postData.wheel);
      formData.append("image", postData.image); // append the image to the form data
      formData.append("year", postData.year);
      formData.append("price", postData.price);
      formData.append("description", postData.description);
      formData.append("phoneNumber", postData.phoneNumber);
      formData.append("email", postData.email);

      const response = await fetch(
        "https://avtobazar-backend.onrender.com/api/posts",
        {
          method: "POST",
          headers: {
            token: localStorage.getItem("token"),
          },
          body: formData, // use the form data as the request body
        }
      );

      const data = await response.json();
      console.log("Post added successfully:", data);

      setPostData({
        title: "",
        color: "",
        author: "",
        distance: 0,
        variant: "",
        wheel: "bor",
        image: "", // reset the image property to null
        year: 0,
        price: 0,
        description: "",
        phoneNumber: 0,
        email: "",
      });
    } catch (error) {
      console.error("Failed to add post:", error);
    }
  };

  return (
    <div>
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={postData.color}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={postData.author}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">distance:</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={postData.distance}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">variant:</label>
        <input
          type="text"
          id="variant"
          name="variant"
          value={postData.variant}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">wheel:</label>
        <input
          type="text"
          id="wheel"
          name="wheel"
          value={postData.wheel}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={postData.year}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={postData.price}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={postData.description}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">phoneNumber:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          value={postData.phoneNumber}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={postData.email}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="content">image:</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={handleImageChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddPost;

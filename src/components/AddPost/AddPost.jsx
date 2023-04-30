import React from "react";
import { useState } from "react";

const AddPost = ({toast}) => {
  const [postData, setPostData] = useState({
    title: "",
    color: "",
    distance: 0,
    variant: "",
    wheel: false,
    image: "", // use null instead of an empty string for the image property
    year: 0,
    price: 0,
    description: "",
    phoneNumber: 0,
    email: "",
    imgtitle: '',
  });

  const [IsChecked, setIsChecked] = useState(false)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(event.target.checked);
  };

  

  console.log(postData.image);

  const handleImageChange = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    setPostData({ ...postData, image: event.target.files[0]});
    setPostData({ ...postData, image: event.target.files[0] });
    console.log(event.target.files[0])
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", postData.title);
      formData.append("color", postData.color);
      formData.append("distance", postData.distance);
      formData.append("variant", postData.variant);
      formData.append("wheel", IsChecked);
      formData.append("file", postData.image); // append the image to the form data
      formData.append("year", postData.year);
      formData.append("price", postData.price);
      formData.append("description", postData.description);
      formData.append("phoneNumber", postData.phoneNumber);
      formData.append("email", postData.email);
      formData.append("imgtitle", postData.imgtitle);

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
      toast.success("Car added successfully");
      console.log(data)

      setPostData({
        title: "",
        color: "",
        distance: 0,
        variant: "",
        wheel: false,
        image: "", // reset the image property to null
        year: 0,
        price: 0,
        description: "",
        phoneNumber: 0,
        email: "",
      });
      setIsChecked(false);
    } catch (error) {
      toast.error("Error", error);
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
        <label htmlFor="content">Color:</label>
        <input
          type="text"
          id="color"
          name="color"
          value={postData.color}
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
            type="checkbox"
            id="wheel"
            name="wheel"
            checked={IsChecked}
            onChange={handleCheckboxChange}
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

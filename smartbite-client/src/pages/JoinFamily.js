import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinFamily.css";

const images = [
  require("../assets/slide1.jpg"),
  require("../assets/slide2.jpg"),
  require("../assets/slide3.jpg"),
  require("../assets/slide4.jpg"),
];

const JoinFamily = () => {
  const navigate = useNavigate();

  const [currentImage, setCurrentImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "radio" ? value : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful!");
        setTimeout(() => {
          navigate("/dietplanner");
        }, 100);
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="join-container">
      <div className="image-section">
        <img src={images[currentImage]} alt="Family" className="slider-image" />
        <div className="slider-controls">
          <button onClick={handlePrev} className="slider-btn">
            ❮
          </button>
          <button onClick={handleNext} className="slider-btn">
            ❯
          </button>
        </div>
        <p className="caption">
          Our table has a seat just for you — come join the{" "}
          <span className="brand">SmartBite</span> family.
        </p>
      </div>

      <div className="form-section">
        <h2>Set Up Your Profile</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
          />
          <input
            type="text"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
          />
          <input
            type="text"
            name="weight"
            placeholder="Weight (kg)"
            value={formData.weight}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="gender-options">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />{" "}
                Female
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinFamily;

/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinFamily.css";

const images = [
  require("../assets/slide1.jpg"),
  require("../assets/slide2.jpg"),
  require("../assets/slide3.jpg"),
  require("../assets/slide4.jpg"),
];
const JoinFamily = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  return (
    <div className="join-container">
      <div className="image-section">
        <img src={images[currentImage]} alt="Family" className="slider-image" />
        <div className="slider-controls">
          <button onClick={handlePrev}>❮</button>
          <button onClick={handleNext}>❯</button>
        </div>
        <p className="caption">
          Our table has a seat just for you — come join the{" "}
          <span className="brand">SmartBite</span> family.
        </p>
      </div>

      <div className="form-section">
        <h2>Set Up Your Profile</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Age" />
          <input type="text" placeholder="Height (cm)" />
          <input type="text" placeholder="Weight (kg)" />
          <input type="tel" placeholder="Mobile Number" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <div className="gender-options">
            <label>Gender:</label>
            <div className="radio-group">
              <label>
                <input type="radio" name="gender" /> Male
              </label>
              <label>
                <input type="radio" name="gender" /> Female
              </label>
            </div>
          </div>

          <button type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default JoinFamily;*/
/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./JoinFamily.css";

const JoinFamily = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    phone: "",
    email: "",
    password: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        navigate("/dietplannerhome");
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="join-family-main">
      <div className="join-family-left">
       
        <div className="image-slider">
          <img src="/images/family1.jpg" alt="Slide 1" />

        </div>
      </div>

      <div className="join-family-right">
        <h2>Join Our SmartBite Family</h2>
        <form onSubmit={handleSubmit} className="join-family-form">
          {[
            "name",
            "age",
            "height",
            "weight",
            "phone",
            "email",
            "password",
            "gender",
          ].map((field) => (
            <input
              key={field}
              type={
                field === "password"
                  ? "password"
                  : field === "email"
                  ? "email"
                  : "text"
              }
              name={field}
              placeholder={`Enter your ${field}`}
              value={formData[field]}
              onChange={handleChange}
              required={["name", "email", "password"].includes(field)}
            />
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default JoinFamily;
*/
/*import React, { useState } from "react";
import "./JoinFamily.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const images = [
  require("../assets/slide1.jpg"),
  require("../assets/slide2.jpg"),
  require("../assets/slide3.jpg"),
  require("../assets/slide4.jpg"),
];

const JoinFamily = () => {
  const [current, setCurrent] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    mobile: "",
    email: "",
    password: "",
    gender: "",
  });

  const navigate = useNavigate();

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      if (res.status === 200 || res.status === 201) {
        alert("Registration successful!");
        navigate("/diet-home");
      } else {
        alert("Unexpected server response.");
      }
    } catch (error) {
      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else {
        alert("Registration failed. Please try again.");
      }
    }
  };

  return (
    <div className="join-family-page">
      <div className="join-content">
        
        <div className="slider-section">
          <div className="slider">
            <button onClick={prevSlide} className="nav-btn">
              ‹
            </button>
            <img src={images[current]} alt={`Slide ${current}`} />
            <button onClick={nextSlide} className="nav-btn">
              ›
            </button>
            <div className="overlay-text">Join Our Family</div>
          </div>
          <div className="quote-box">
            Our table has a seat just for you — come join the{" "}
            <span>SmartBite</span> family.
          </div>
        </div>

        
        <div className="form-section">
          <h3>Set Up Your Profile</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div className="gender-select">
              <label>Gender:</label>
              <div>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={formData.gender === "male"}
                    onChange={handleChange}
                    required
                  />{" "}
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={formData.gender === "female"}
                    onChange={handleChange}
                  />{" "}
                  Female
                </label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinFamily;
*/

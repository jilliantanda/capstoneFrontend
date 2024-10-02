import { useState, useNavigate } from "react";
import "./Form.css";
import Header from "./Header";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const Forms = (props) => {
  const [newForm, setNewForm] = useState({
    title: "",
    description: "",
    resources: "",
    active: Boolean,
  });

  const handleChange = (event) => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createGoal(newForm);
    setNewForm({
      title: "",
      description: "",
      resources: "",
      active: Boolean,
    });
  };

  return (
    <div>
      <Header />
      <br />
      <br />
      <h1 className="formheader"> Add New Goal!</h1>

      <div className="formcontainer">
      <div className="formstyle">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={newForm.title}
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              value={newForm.description}
              name="description"
              placeholder="Description"
              onChange={handleChange}
            />
            <Form.Label>Resources</Form.Label>
            <Form.Control
              type="text"
              value={newForm.resources}
              name="resources"
              placeholder="Resources"
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="secondary" type="submit" value="Add Goal">
            Add Goal
          </Button>
        </Form>
        
      </div>
        <img src="https://imgur.com/TiGiRvO.gif"></img>
      </div>
    
    </div>
  );
};

export default Forms;

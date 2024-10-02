import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Header from "./Header"
import "./Show.css";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;
  const goals = props.goals;
  const goal = goals.find((p) => p._id === id);
  const [editForm, setEditForm] = useState(goal);

  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateGoals(editForm, goal._id);
    navigate("/goals");
  };

  const removeGoal = (e) => {
    e.preventDefault();
    props.deleteGoals(goal._id);
    navigate("/goals");
  };

  return (
    <>
    <div clsasName="goaldisplay">
        <Header />
      <h3>Goal: {goal.title}</h3>
      <h3>Description: {goal.description}</h3>
      <h3>Resources: {goal.resources}</h3>

      <Form onSubmit={handleSubmit}>
        Description:
        <Form.Control
          size="lg"
          type="text"
          placeholder="Description"
          value={editForm.description}
          name="description"
          onChange={handleChange}
        />
        Resources:
        <Form.Control
          size="lg"
          type="text"
          value={editForm.resources}
          name="resources"
          placeholder="Resources"
          onChange={handleChange}
        />
        <Button
          variant="secondary"
          size="lg"
          as="input"
          type="submit"
          value="Update Goal"
        />
        <br></br>
        <Button
          variant="secondary"
          size="lg"
          as="input"
          type="submit"
          onClick={removeGoal}
          value="Remove Goal"
        />
        {/* CREATE EDIT BUTTON FOR EDIT FORM ON SEP. PAGE */}
        {/* <button id="delete" onClick={removeGoal}>
          DELETE
        </button> */}
      </Form>
      </div>
    </>
  );
};

export default Show;

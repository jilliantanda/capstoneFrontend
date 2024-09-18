import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Show.css";


const Show = (props) => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id;
    const goals = props.goals;
    const goal = goals.find((p) => p._id === id);
    const [editForm, setEditForm ] = useState(goal);

    const handleChange = (event) => {
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        props.updateGoals(editForm, goal._id);
        navigate("/goals");
      };
    
      // const removeGoal = (e) => {
      //   e.preventDefault()
      //   props.deleteGoal(goal._id);
      //   navigate("/goals");
      // };
    
    return (

      <div className="goal-detail">
      <h1>{goal.title}</h1>
      <h3>Description: {goal.description}</h3>
      <h3>Resources: {goal.resources}</h3>
    <h1> Show Component</h1>
    <form onSubmit={handleSubmit}>
    Description:{" "}
    <input
      type="text"
      value={editForm.description}
      name="description"
      placeholder="Description"
      onChange={handleChange}
    />
    Resources:
    <input
      type="text"
      value={editForm.resources}
      name="resources"
      placeholder="Resources"
      onChange={handleChange}
    />
    <input type="submit" value="Update Goal" />
  </form>
  </div>
    )
}

export default Show
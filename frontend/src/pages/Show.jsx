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
    
      const removeGoal = (e) => {
        e.preventDefault()
        props.deleteGoal(goal._id);
        navigate("/goals");
      };
    
    return (
    <h1> Show Component</h1>
    )
}

export default Show
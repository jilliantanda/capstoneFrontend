import { useState, useNavigate } from "react";
import "./Form.css";

const Form = (props) => {
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
      <h1 className="form-header"> New Goal:</h1>
      <form onSubmit={handleSubmit} className="add-player-form">
        <input
          type="text"
          value={newForm.title}
          name="title"
          placeholder="Title"
          onChange={handleChange}
        />
        Description:
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="Description"
          onChange={handleChange}
        />
        Resources:
        <input
          type="text"
          value={newForm.resources}
          name="resources"
          placeholder="Resources"
          onChange={handleChange}
        />
        {/* Active?: */}
        {/* <input 
          style={{opacity: "1", position:"relative", pointerEvents:"visible", marginLeft:"10px"}}
          type="checkbox"
          // value={newForm.active}
          name="active"
          onChange={handleChange}
        /> */}
        <br></br>
        <input type="submit" value="Add Goal" className="button-text" />
      </form>
    </div>
  );
};

export default Form;

import { useState } from "react";

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
          name="name"
          placeholder="Title"
          onChange={handleChange}
        />
        Description:
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        Resources:
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        Active?:
        <input
          type="Boolean"
          value={newForm.active}
          name="active"
          placeholder="active"
          onChange={handleChange}
        />
        </form>
    </div>
  )
};


export default Form;
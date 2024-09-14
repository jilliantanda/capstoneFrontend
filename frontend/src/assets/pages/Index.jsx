import { useState } from "react";
import { Link } from "react-router-dom";

// function Index(props) => {
//     const [newForm, serNewForm] = useState({
//                title: "",
//         description: "",
//         resources: '',
//         active: Boolean,
//     })
//     const handleChange = (event) => {
//         setNewForm({ ...newForm, [event.target.name]: event.target.value });
//       };
    

//       const handleSubmit = (event) => {
//         event.preventDefault();
//         props.createGoal(newForm);
//         setNewForm({
//             title: "",
//             description: "",
//             resources: '',
//             active: Boolean,
//         });
//       };   
      const loaded = () => {
        return props.goals.map((goal) => (
          <div key={goal._id} className="goal">
            <Link to={`/goals/${goal._id}`}>
              <h1>{goal.title}</h1>
            </Link>
            <img src={goal.image} alt={goal.name} />
            <h3>{goal.active}</h3>
          </div>
        ));
      };
      const loading = () => {
        return <h1>Loading...</h1>;
      };

return (
<h1> Index Component </h1>
)

export default Index
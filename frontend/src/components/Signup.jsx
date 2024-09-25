import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./Signup.css";
import Person2Icon from "@mui/icons-material/Person2";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";
// export default function FormPropsTextFields() {
//   return (
//     <>
//       <div className="signup">
//         <h3>Create an account</h3>
//         <Box
//           component="form"
//           sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
//           noValidate
//           autoComplete="off"
//         >
//           <TextField
//             required
//             id="username"
//             label="User Name"
//             defaultValue="Hello World"
//           />
//           <div>
//             <TextField
//               required
//               id="email"
//               label="Email"
//               defaultValue="Hello World"
//             />
//             <TextField
//               required
//               id="password"
//               label="Password"
//               type="password"
//               autoComplete="current-password"
//             />

//             <Stack spacing={2} direction="row">
//               <Button variant="outlined">Sign Up</Button>
//             </Stack>
//           </div>
//         </Box>
//       </div>
//     </>
//   );
// }

const LoginSignup = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">Sign Up</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          <div className="input">
            <img src={<Person2Icon />} alt="" />
            <input type="text" />
          </div>
          <div className="input">
            <img src={<EmailIcon />} alt="" />
            <input type="email" />
          </div>

          <div className="input">
            <img src={<PasswordIcon />} alt="" />
            <input type="password" />
          </div>
        </div>
        <div className="forget-password">
          Lost Password? <span>Click Here!</span>
        </div>
        <div className="submit-container">
          <div className="submit">Sign Up</div>
          <div className="submit">Log In</div>
          <div className="submit">Sign Up</div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;

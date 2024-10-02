import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase";

const Profile = (props) => {
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    // Check if the user is signed in
    const user = auth.currentUser.displayName;
    if (user) {
      // Set the display name to state
      setDisplayName(user);
    }
  }, []);
  return <>
  {displayName ? displayName : "Guest"}
  </>;
};

export default Profile;

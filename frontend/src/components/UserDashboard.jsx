import ArticleDisplay from "./Article";
import Header from "./Header";
import { useState, useEffect } from "react";
import ArticleForm from "./ArticleForm";
import { auth } from "../firebase/firebase"

const UserHome = (props) => {
  const apiKey = "888ed4a4b0d24207b8ae02ec60be6294";
  const [article, setArticle] = useState(null);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    // Check if the user is signed in
    const user = auth.currentUser.displayName;
    if (user) {
      // Set the display name to state
      setDisplayName(user);
    }
  }, []);

  const getArticle = async (searchTerm) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}&t=${searchTerm}`
    );
    const data = await response.json();
    setArticle(data);
  };
  useEffect(() => {
    getArticle(article);
  }, []);


  return (
    <>
      {<Header />}

      <h1> Welcome back {displayName ? displayName : 'Guest'}</h1>
      <ArticleDisplay article={article} />
      <ArticleForm search={getArticle} />
    </>
  );
};

export default UserHome;

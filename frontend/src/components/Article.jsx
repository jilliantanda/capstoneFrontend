export default function ArticleDisplay ({article}) {
    const loaded = () => {
       return (
    <div><h1>{article.title}</h1>
    <h2>{article.description}</h2>
    <h2>{article.author}</h2>
    <h1>{article.urlToImage}</h1>
    </div>  
)}
const loading = () => {
    return (
        <h1>No article to display!</h1>
    )
    }
    return article ? loaded() : loading()
}
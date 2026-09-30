import { useParams } from "react-router-dom"
import { useContext } from "react"
import { Link } from "react-router-dom";

import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";



export function AuthorPage() { //page d'un auteur
    const { tweets, toggleLike } = useContext(TweetsContext)!;
    const { handle } = useParams<{handle : string}>() //récupère le pseudo de l'auteur en paramètre de l'URL
    useDocumentTitle("Tweets de @" + handle) //hook pour le titre de la page
    const authorTweet = tweets.filter((tweet) => tweet.authorHandle === handle) //récupère les tweets de l'auteur

    if (authorTweet.length === 0) { //s'il n'y a pas de tweet correspondant au pseudo
        return (
            <>
                <p className="no-response">Nom d'utilisateur inconnu</p>
                <Link className="tweet-link" to={`/`}>Retour à l'accueil</Link>
            </> 
        )
    }

    return (
        <>
            <div className="fil-ariane">
                <Link to={`/`}>Accueil</Link> {" / "} Tweets de @{handle}
            </div>

            <TweetsList
                tweets = {authorTweet}
                linkToDetail = {false}
                onToggleLike = {toggleLike}
            />
        </>
    )
}
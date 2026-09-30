import { useContext } from "react";
import { Link } from "react-router-dom";

import { TweetsContext } from "../contexts/TweetsContext";
import { TweetsList } from "../components/TweetsList";
import { useDocumentTitle } from "../hooks/useDocumentTitle";


export function LikedTweetsPage() { //page des tweets likés
    useDocumentTitle("Tweets likés") //hook pour le titre de la page
    const { tweets, toggleLike } = useContext(TweetsContext)!; 
    const tweetsLikes = tweets.filter((tweet) => tweet.likedByMe === true) //récupère les tweets likés

    if (tweetsLikes.length === 0) { //s'il n'y a aucun tweet liké
        return (
            <>
                <p className="no-response">Aucun tweet liké</p>
                <Link className="tweet-link" to={`/`}>Retour à l'accueil</Link>
            </> 
        )
    }

    return (
        <>
            <TweetsList
                tweets = {tweetsLikes}
                onToggleLike = {toggleLike}
            />
        </>
    )
}
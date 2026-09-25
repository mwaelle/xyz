import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useContext } from 'react';

import { TweetPreview } from "../components/TweetPreview"
import { TweetsList } from "../components/TweetsList"
import type { Tweet } from "../types/Tweet"
import { TweetsContext } from '../contexts/TweetsContext';


export function TweetDetailsPage() { //page de détail d'un tweet
    const { tweets } = useContext(TweetsContext)!;
    const { id } = useParams<{id : string}>() //récupère l'id en paramètre de l'URL
    const tweet = tweets.find((tweet) => tweet.id === id) //récupère le tweet de la page grâce à son id
    const tweetsResponse = tweets.filter((tweet) => tweet.parentId === id) //récupère les tweets de réponse

    return (
        <>
            <div className="fil-ariane">
                <Link to={`/`}>Accueil</Link>
                {getAncetres(tweet).map((ancetre) => ( //crée le fil d'Ariane à partir du tableau d'ancêtres
                    <>
                        {" / "}
                        <Link to={`/tweets/${ancetre.id}`}>
                            Tweet de {ancetre.authorName}
                        </Link>
                    </>
                ))}
                {" / "} Tweet de {tweet?.authorName}
            </div>

            {tweet && ( //affiche le tweet de la page
                <TweetPreview 
                    key = {tweet.id}
                    tweet = {tweet}
                    linkToDetail = {false}
                />
            )}

            {tweetsResponse.length !== 0 && ( //affiche les réponses au tweet
                <TweetsList 
                    tweets = {tweetsResponse}
                    linkToDetail = {false}
                />
            )}
            {tweetsResponse.length === 0 && ( //affiche le fait qu'il n'y ai pas de réponse
                <p className="no-response">Aucune réponse pour le moment.</p>
            )}
        </>
    )
}

function getAncetres(tweet : Tweet | undefined) : Tweet[] { //fonction permettant de récupérer un tableau avec le fil d'Ariane d'un tweet
    const { tweets } = useContext(TweetsContext)!;
    const ancetres : Tweet[] = []
    let tweetActuel = tweet

    while (tweetActuel?.parentId) { //tant que le tweet a un parent
        const parent = tweets.find((tweet) => tweet.id === tweetActuel!.parentId)
        if (parent) {
            ancetres.unshift(parent) //ajoute le parent au début du tableau
            tweetActuel = parent
        }
    }
    return ancetres
}
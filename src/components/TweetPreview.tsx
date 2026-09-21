import React, { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";


type TweetPreviewProps = {
    tweet : Tweet
     linkToDetail? : boolean
}

export function TweetPreview({tweet, linkToDetail = true} : TweetPreviewProps) : React.JSX.Element {
    const date = new Date(tweet.createdAt); //avoir la date dans un format compréhensible

    const [isExpanded, setIsExpanded] = useState(false); //variable d'état qui stocke si le contenu est affiché entièrement ou non et une fonction pour mettre à jour la variable
    const newContent = isExpanded ? tweet.content : tweet.content.substring(0, 180) + (tweet.content.length > 180 ? "..." : ""); //contenu affiché (tout si <= 180 caractères, sinon 180 caractères et ...)

    return (
        <div className="tweet-preview"> 
            <Avatar authorName = {tweet.authorName}/>
            <div>
                <p className="tweet-header"><b>{tweet.authorName}</b> @{tweet.authorHandle} {date.toLocaleString('fr-FR')}</p>

                {tweet.image && ( //vérifie si l'image est présente et l'affiche si c'est le cas
                    linkToDetail ? (
                        <Link className="tweet-link" to={`/tweets/${tweet.id}/`}>
                            <img src={tweet.image.url} alt={tweet.image.alt} className="img"/>
                        </Link>
                    ) : (
                        <img src={tweet.image.url} alt={tweet.image.alt} className="img"/>
                    )

                )}

                <p>{newContent}</p>

                {tweet.content.length > 180 && ( //si le contenu est > 180 caractères, le bouton pour étendre est créé et le texte affiché change en fonction de l'état du contenu
                    <button className="button" onClick={() => setIsExpanded((isExpanded) => !isExpanded) }>{isExpanded ? "Voir moins" : "Voir plus"}</button>
                )}
            </div>
            {(linkToDetail) && ( 
                <Link className="tweet-link" to={`/tweets/${tweet.id}/`}>Voir la discussion</Link>
            )}
        </div> //balise pour grouper des éléments sans laisser de trace
    )
}
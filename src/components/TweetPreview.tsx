import React, { useState } from "react";
import type { Tweet } from "../types/Tweet";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";


type TweetPreviewProps = {
    tweet : Tweet
     linkToDetail? : boolean
}

export function TweetPreview({tweet, linkToDetail = true} : TweetPreviewProps) : React.JSX.Element {
    const date = new Date(tweet.createdAt).toLocaleString('fr-FR'); //avoir la date dans un format compréhensible
    const jour = date.substring(0, 2) //récupère le jour
    const moisNb = date.substring(3, 5) //récupère le mois en nombre
    const annee = date.substring(6, 10) //récupère l'année
    const heures = date.substring(11, 13) //récupère les heures
    const minutes = date.substring(14, 16) //récupère les minutes

    const [isExpanded, setIsExpanded] = useState(false); //variable d'état qui stocke si le contenu est affiché entièrement ou non et une fonction pour mettre à jour la variable
    const newContent = isExpanded ? tweet.content : tweet.content.substring(0, 180) + (tweet.content.length > 180 ? "..." : ""); //contenu affiché (tout si <= 180 caractères, sinon 180 caractères et ...)

    return (
        <div className="tweet-preview"> 
            <Avatar authorName = {tweet.authorName}/>
            <div>
                <p className="tweet-header"><b>{tweet.authorName}</b> @{tweet.authorHandle} {jour} {mois(moisNb)} {annee} à {heures}:{minutes}</p>

                {tweet.image && ( //vérifie si l'image est présente et l'affiche si c'est le cas
                    linkToDetail ? ( //si on est pas sur la page de détail, l'image est cliquable
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
            {(linkToDetail) && ( //si on est pas sur la page de détail du tweet, on a un lien vers la discussion
                <Link className="tweet-link" to={`/tweets/${tweet.id}/`}>Voir la discussion</Link>
            )}
        </div> //balise pour grouper des éléments sans laisser de trace
    )
}


function mois(moisNb : string) : string { //fonction qui retourne le mois en toutes lettres 
        switch(moisNb) {
            case "01" :
                return "janvier"
            case "02" :
                return "février"
            case "03" :
                return "mars"
            case "04" :
                return "avril"
            case "05" :
                return "mai"
            case "06" :
                return "juin"
            case "07" :
                return "juillet"
            case "08" :
                return "août"
            case "09" :
                return "septembre"
            case "10" :
                return "octobre"
            case "11" :
                return "novembre"
            default :
                return "décembre"
        }
    }
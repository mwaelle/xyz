import { useState } from "react";
import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
    tweet : Tweet
}

function TweetPreview({tweet} : TweetPreviewProps) : React.JSX.Element {
    const date = new Date(tweet.createdAt);

    const [isExpanded, setIsExpanded] = useState(false); //variable d'état qui stocke si le contenu est affiché entièrement ou non
    const newContent = isExpanded ? tweet.content : tweet.content.substring(0, 180) + (tweet.content.length > 180 ? "..." : "");; //contenu affiché (tout si <= 180 caractères, sinon 180 caractères et ...)

    return (
        <div> 
            <p><b>{tweet.authorName}</b> @{tweet.authorHandle} {date.toLocaleString('fr-FR')}</p>

            {tweet.image && ( //vérifie si l'image est présente et l'affiche si c'est le cas
                <img src={tweet.image.url} alt={tweet.image.alt} className="img"/>
            )}

            <p>{newContent}</p>

            {tweet.content.length > 180 && ( //si le contenu est > 180 caractères, le bouton pour étendre est créé et le texte affiché change en fonction de l'état du contenu
                <button onClick={() => setIsExpanded((isExpanded) => !isExpanded) }>{isExpanded ? "Voir moins" : "Voir plus"}</button>
            )}
        </div> //balise Fragment pour grouper des éléments sans laisser de trace
    );
}

export default TweetPreview
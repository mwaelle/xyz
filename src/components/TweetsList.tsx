import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview";
import { useParams } from "react-router-dom";


type TweetsListProps = {
    tweets : Array<Tweet>
}

export function TweetsList({tweets} : TweetsListProps) {
    const { id } = useParams<{id : string}>()
    let tweetsAffiche = tweets
    if (!id) {
        tweetsAffiche = tweets.filter((tweet) => tweet.parentId === undefined) //récupère les tweets de premier niveau
    }
    return (
        <div>
            {tweetsAffiche.map((tweet) => ( //transforme chaque tweet en TweetPreview grâce à son id utilisé comme clé
                <TweetPreview
                    key = {tweet.id} //identifiant stable, qui vise toujours le même élément pour mieux savoir son état
                    tweet = {tweet}
                />
            ))}
        </div>
    )
}
import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview";


type TweetsListProps = {
    tweets : Array<Tweet>
    linkToDetail? : boolean
    onToggleLike : (id : string) => void
}

export function TweetsList({tweets, linkToDetail = true, onToggleLike} : TweetsListProps) { //liste des tweets
    let tweetsAffiche = tweets
    if (linkToDetail) { //si on veut uniquement les tweets de premier niveau
        tweetsAffiche = tweets.filter((tweet) => tweet.parentId === undefined) //récupère les tweets de premier niveau
    }
    return (
        <div>
            {tweetsAffiche.map((tweet) => ( //transforme chaque tweet en TweetPreview grâce à son id utilisé comme clé
                <TweetPreview
                    key = {tweet.id} //identifiant stable, qui vise toujours le même élément pour mieux savoir son état
                    tweet = {tweet}
                    onToggleLike = {onToggleLike}
                />
            ))}
        </div>
    )
}
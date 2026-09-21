import type { Tweet } from "../types/Tweet"
import { TweetPreview } from "./TweetPreview";

type TweetsListProps = {
    tweets : Array<Tweet>
}

export function TweetsList({tweets} : TweetsListProps) {
    const tweetsPrem = tweets.filter((tweet) => tweet.parentId === undefined) //récupère les tweets de premier niveau
    return (
        <div>
            {tweetsPrem.map((tweet) => ( //transforme chaque tweet en TweetPreview grâce à son id utilisé comme clé
                <TweetPreview
                    key = {tweet.id} //identifiant stable, qui vise toujours le même élément pour mieux savoir son état
                    tweet = {tweet}
                />
            ))}
        </div>
    )
}
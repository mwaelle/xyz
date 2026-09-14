import type { Tweet } from "../types/Tweet"
import TweetPreview from "./TweetPreview"

type TweetsListProps = {
    tweets : Array<Tweet>
}

function TweetsList({tweets} : TweetsListProps) {
    return tweets.map((tweet) => (
        <TweetPreview
            key = {tweet.id}
            tweet = {tweet}
        />
    ));
}

export default TweetsList
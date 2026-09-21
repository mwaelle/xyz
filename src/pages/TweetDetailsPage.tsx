import { useParams } from "react-router-dom"
import { tweets } from "../data/tweets"
import { TweetPreview } from "../components/TweetPreview"
import { TweetsList } from "../components/TweetsList"

export function TweetDetailsPage() {
    const { id } = useParams<{id : string}>()
    const tweet = tweets.find((tweet) => tweet.id === id)
    const tweetsResponse = tweets.filter((tweet) => tweet.parentId === id)

    return (
        <>
            {tweet && (
                <TweetPreview 
                    key = {tweet.id}
                    tweet = {tweet}
                />
            )}
            {tweetsResponse && (
                <TweetsList tweets={tweetsResponse}/>
            )}
        </>
    )
}
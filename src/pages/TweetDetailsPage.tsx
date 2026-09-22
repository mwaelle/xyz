import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { tweets } from "../data/tweets"
import { TweetPreview } from "../components/TweetPreview"
import { TweetsList } from "../components/TweetsList"
import type { Tweet } from "../types/Tweet"


export function TweetDetailsPage() {
    const { id } = useParams<{id : string}>()
    const tweet = tweets.find((tweet) => tweet.id === id)
    const tweetsResponse = tweets.filter((tweet) => tweet.parentId === id)

    return (
        <>
            <div className="fil-ariane">
                <Link to={`/`}>Accueil</Link>
                {getAncetres(tweet).map((ancetre) => (
                    <>
                        {" / "}
                        <Link to={`/tweets/${ancetre.id}`}>
                            Tweet de {ancetre.authorName}
                        </Link>
                    </>
                ))}
                {" / "} Tweet de {tweet?.authorName}
            </div>

            {tweet && (
                <TweetPreview 
                    key = {tweet.id}
                    tweet = {tweet}
                    linkToDetail = {false}
                />
            )}

            {tweetsResponse.length !== 0 && (
                <TweetsList 
                    tweets = {tweetsResponse}
                    linkToDetail = {false}
                />
            )}
            {tweetsResponse.length === 0 && (
                <p className="no-response">Aucune réponse pour le moment.</p>
            )}
        </>
    )
}

function getAncetres(tweet : Tweet | undefined) : Tweet[] {
    const ancetres : Tweet[] = []
    let tweetActuel = tweet

    while (tweetActuel?.parentId) {
        const parent = tweets.find((tweet) => tweet.id === tweetActuel!.parentId)
        if (parent) {
            ancetres.unshift(parent)
            tweetActuel = parent
        }
    }
    return ancetres
}
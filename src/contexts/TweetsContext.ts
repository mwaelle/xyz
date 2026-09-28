import { createContext } from "react"
import type { Tweet } from "../types/Tweet"
import type { TweetImage } from "../types/TweetImage"

export type TweetsContextValue = {
    tweets: Array<Tweet>
    addTweet: (content : string, img? : TweetImage) => void
    toggleLike: (id : string) => void
}

export const TweetsContext = createContext<TweetsContextValue | undefined> ( //permet de faire remonter un état partagé
    undefined,
)

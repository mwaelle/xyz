import { createContext } from "react"
import type { Tweet } from "../types/Tweet"

export type TweetsContextValue = {
    tweets: Array<Tweet>
    addTweet: (content : string) => void
}

export const TweetsContext = createContext<TweetsContextValue | undefined> (
    undefined,
)

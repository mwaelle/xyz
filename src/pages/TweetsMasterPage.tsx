import { TweetForm } from '../components/TweetForm';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';

import { useContext } from 'react';


export function TweetsMasterPage() { //page avec le fil des tweets
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
    const tweetsLikes = tweets.reduce((accumulateur, tweet) => {
        return accumulateur + tweet.likes
    }, 0)
    return (
        <>
            <TweetForm onSubmit={addTweet}/>
            <p className='tweet-number'>{tweets.length} tweets ~ {tweetsLikes} mentions J'aime</p> 
            <TweetsList tweets = {tweetsTries} onToggleLike = {toggleLike}/>
        </>
    )
}
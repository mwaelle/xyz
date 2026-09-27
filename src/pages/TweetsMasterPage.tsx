import { TweetForm } from '../components/TweetForm';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';

import { useContext } from 'react';


export function TweetsMasterPage() { //page avec le fil des tweets
    const { tweets, addTweet } = useContext(TweetsContext)!;
    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
    return (
        <>
            <TweetForm onSubmit={addTweet}/>
            <p className='tweet-number'>{tweets.length} tweets</p>
            <TweetsList tweets = {tweetsTries}/>
        </>
    )
}
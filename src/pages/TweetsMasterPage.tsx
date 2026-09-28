import { TweetForm } from '../components/TweetForm';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { useContext } from 'react';


export function TweetsMasterPage() { //page avec le fil des tweets
    useDocumentTitle("Accueil") //hook pour le titre de la page
    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
    const tweetsLikes = tweets.reduce((accumulateur, tweet) => { //fait la somme des likes de chaque tweet
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
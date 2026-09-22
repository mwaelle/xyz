import { tweets } from '../data/tweets'; 
import { TweetsList } from '../components/TweetsList';


export function TweetsMasterPage() { //page avec le fil des tweets
    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
    return (
        <>
            <p className='tweet-number'>{tweets.length} tweets</p>
            <TweetsList tweets = {tweetsTries}/>
        </>
    )
}
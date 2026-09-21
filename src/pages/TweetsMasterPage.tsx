import { tweets } from '../data/tweets'; 
import { TweetsList } from '../components/TweetsList';

export function TweetsMasterPage() {
    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    return (
        <>
            <p className='tweet-number'>{tweets.length} tweets</p>
            <TweetsList tweets = {tweetsTries}/>
        </>
    )
}
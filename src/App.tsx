import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import type { Tweet } from './types/Tweet';
import type { TweetsContextValue } from './contexts/TweetsContext';
import { TweetsContext } from './contexts/TweetsContext';
import { tweets } from './data/tweets';


function App() { //contenu de la page

    const [lesTweets, setTweets] = useState<Array<Tweet>>(tweets);

    function addTweet(content : string) : void {
      const newTweet : Tweet = {
        id : crypto.randomUUID(),
        authorName : "Vous",
        authorHandle : "vous",
        content : content,
        createdAt : new Date().toISOString(),
        likes : 0,
        likedByMe : false
      }
      setTweets((lesTweets) => [newTweet, ...lesTweets])
    }

    function toggleLike(id : string) : void {
      setTweets((lesTweets) => 
        lesTweets.map((tweet) => 
          tweet.id === id
            ? {...tweet, 
              likes : tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1, 
              likedByMe : !tweet.likedByMe}
            : tweet
      ))
    }
    
    const context: TweetsContextValue = { tweets : lesTweets, addTweet : addTweet, toggleLike : toggleLike };


    return (

      <div className='app'>
        <header className='header'>
          <div>
            <img src='/favicon-32x32.png' alt='logo de XYZ'/>
            <p className='title'>XYZ</p>
          </div>
            <Link className="tweet-link-header" to={`/`}>Accueil</Link> 
            <Link className="tweet-link-header" to={`/a-propos`}>A propos</Link>
        </header>
        <TweetsContext.Provider value={context}>
          <Outlet/>
        </TweetsContext.Provider>
      </div>
      
    )
}

export default App
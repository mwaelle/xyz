import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import type { Tweet } from './types/Tweet';
import type { TweetsContextValue } from './contexts/TweetsContext';
import { TweetsContext } from './contexts/TweetsContext';
import { tweets } from './data/tweets';


function App() { //contenu de la page

    const [lesTweets, setTweets] = useState<Array<Tweet>>(tweets);

    const addTweet = (content : string) : void => {

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
    
    const context: TweetsContextValue = { tweets : lesTweets, addTweet : addTweet };


    return (

      <div className='app'>
        <header className='header'>
          <h1>XYZ</h1>
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
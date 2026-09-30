import './App.css'
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';

import type { Tweet } from './types/Tweet';
import type { TweetImage } from './types/TweetImage';
import type { TweetsContextValue } from './contexts/TweetsContext';
import { TweetsContext } from './contexts/TweetsContext';
import { tweets } from './data/tweets';


function App() { //contenu de la page

    const [lesTweets, setTweets] = useState<Array<Tweet>>(tweets); //variable d'état qui stocke le tableau des tweets et une fonction pour mettre à jour la variable

    function addTweet(content : string, img? : TweetImage) : void { //ajoute un tweet dans le tableau
      const newTweet : Tweet = {
        id : crypto.randomUUID(),
        authorName : "Vous",
        authorHandle : "vous",
        content : content,
        image : img,
        createdAt : new Date().toISOString(),
        likes : 0,
        likedByMe : false
      }
      setTweets((lesTweets) => [newTweet, ...lesTweets])
    }

    function toggleLike(id : string) : void { //modifie le tableau de tweets suite à l'ajout ou l'enlèvement d'un like 
      setTweets((lesTweets) => 
        lesTweets.map((tweet) => 
          tweet.id === id
            ? {...tweet, 
              likes : tweet.likedByMe ? tweet.likes - 1 : tweet.likes + 1, 
              likedByMe : !tweet.likedByMe}
            : tweet
      ))
    }

    function addReply(parentId : string, content : string, img? : TweetImage) : void { //ajoute un tweet de réponse dans le tableau
      const newTweet : Tweet = {
        id : crypto.randomUUID(),
        authorName : "Vous",
        authorHandle : "vous",
        content : content,
        image : img,
        createdAt : new Date().toISOString(),
        parentId : parentId,
        likes : 0,
        likedByMe : false
      }
      setTweets((lesTweets) => [newTweet, ...lesTweets])
    }
    
    const context: TweetsContextValue = { tweets : lesTweets, addTweet : addTweet, toggleLike : toggleLike, addReply : addReply };


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
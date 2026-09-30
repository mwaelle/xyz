import { TweetForm } from '../components/TweetForm';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { useContext, useState } from 'react';


export function TweetsMasterPage() { //page avec le fil des tweets
    useDocumentTitle("Accueil") //hook pour le titre de la page

    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const [authorName, setAuthorName] = useState<string>("") //variable d'état qui stocke le nom écrit et une fonction pour mettre à jour la variable

    const tweetsTries = [...tweets].sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
    const tweetsTriesFiltres = tweetsTries.filter((tweet) => tweet.authorName.toLowerCase().includes(authorName.trim().toLowerCase())) //tableau des tweets triés et filtrés en fonction du nom de l'auteur
    const tweetsLikesNumber = tweets.reduce((accumulateur, tweet) => { //fait la somme des likes de chaque tweet
        return accumulateur + tweet.likes
    }, 0)


    return (
        <>
            <TweetForm onSubmit={addTweet}/>
            <input
                value={authorName} //affiche le nom écrit par l'utilisateur
                onChange={(event) => setAuthorName(event.target.value)} //modifie la variable d'état quand l'utilisateur écrit
                placeholder="Filtrer par auteur" //affiche le texte quand rien n'est écrit
                className='tweet-filter'
            /> 
            <p className='tweet-number'>{tweets.length} tweets ~ {tweetsLikesNumber} mentions J'aime</p>
            <TweetsList tweets = {tweetsTriesFiltres} onToggleLike = {toggleLike}/>
        </>
    )
}
import { TweetForm } from '../components/TweetForm';
import { TweetsList } from '../components/TweetsList';
import { TweetsContext } from '../contexts/TweetsContext';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { useContext, useState } from 'react';


export function TweetsMasterPage() { //page avec le fil des tweets
    useDocumentTitle("Accueil") //hook pour le titre de la page

    const { tweets, addTweet, toggleLike } = useContext(TweetsContext)!;
    const [filter, setFilter] = useState<string>("") //variable d'état qui stocke le filtre écrit et une fonction pour mettre à jour la variable
    const [select, setSelect] = useState<string>("recent-ancien") //variable d'état qui stocke la sélection et une fonction pour mettre à jour la variable

    const tweetsFiltres = tweets.filter((tweet) => 
        tweet.authorName.toLowerCase().includes(filter.trim().toLowerCase()) || //filtre sur le nom de l'auteur
        tweet.authorHandle.toLowerCase().includes(filter.trim().toLowerCase()) || //filtre sur le nom d'utilisateur
        tweet.content.toLowerCase().includes(filter.trim().toLowerCase()) //filtre sur le contenu du tweet
    ) //tableau des tweets filtrés
 
    switch (select) { //tri en fonction de la sélection voulue
        case "aime":
            tweetsFiltres.sort((a, b) => b.likes - a.likes) //tableau des tweets triés du plus aimé au moins aimé
            break
        case "ancien-recent":
            tweetsFiltres.sort((a, b) => a.createdAt.localeCompare(b.createdAt)) //tableau des tweets triés du plus ancien au plus récent
            break
        default:
            tweetsFiltres.sort((a, b) => b.createdAt.localeCompare(a.createdAt)) //tableau des tweets triés du plus récent au plus ancien
            break
    }
    const nombreTweetsFiltres = tweetsFiltres.filter((tweet) => tweet.parentId === undefined) //récupère les tweets de premier niveau

    const tweetsLikesNumber = tweets.reduce((accumulateur, tweet) => { //fait la somme des likes de chaque tweet
        return accumulateur + tweet.likes
    }, 0)


    return (
        <>
            <TweetForm onSubmit={addTweet}/>
            <input
                value={filter} //affiche le filtre écrit par l'utilisateur
                onChange={(event) => setFilter(event.target.value)} //modifie la variable d'état quand l'utilisateur écrit
                placeholder="Filtrer par auteur, nom d'utilisateur ou contenu" //affiche le texte quand rien n'est écrit
                className='tweet-filter'
            />

            <div className='tweet-select'>
                <select value={select} onChange={(event) => setSelect(event.target.value)}>
                    <option value="recent-ancien">Du plus récent au plus ancien</option>
                    <option value="ancien-recent">Du plus ancien au plus récent</option>
                    <option value="aime">Du plus aimé au moins aimé</option>
                </select>

                {filter !== "" && ( //affiche le nombre de résultats de la recherche pour les tweets de premier niveau
                    <p>{nombreTweetsFiltres.length} résultats</p>
                )}
            </div>

            {filter === "" && ( //affiche le nombre de tweets et le nombre de J'aime seulement si aucune recherche n'est en cours
                <p className='tweet-number'>{tweets.length} tweets ~ {tweetsLikesNumber} mentions J'aime</p>
            )}
            
            <TweetsList tweets = {tweetsFiltres} onToggleLike = {toggleLike}/>

            {nombreTweetsFiltres.length === 0 && ( //si aucun tweet ne correspond à la recherche
                <p className='no-response'>Aucun tweet correspondant</p>
            )}
        </>
    )
}
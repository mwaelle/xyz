import { useState } from "react";


type TweetFormProps = {
    onSubmit: (content: string) => void
}

const CONTENT_MAX_LENGTH = 280; //nombre de caractères max

export function TweetForm({onSubmit} : TweetFormProps) : React.JSX.Element { //affichage du formulaire
    const [content, setContent] = useState<string>("") //variable d'état qui stocke le contenu écrit et une fonction pour mettre à jour la variable
    const [touched, setTouched] = useState(false) //variable d'état qui stocke si l'utilisateur a utilisé le formulaire ou non et une fonction pour mettre à jour la variable

    const handleSubmit = (event : React.SyntheticEvent<HTMLFormElement>) : void => { //gestionnaire de soumission
        event.preventDefault() //empêche le navigateur de charger un nouveau document afin que le code React traite l'action
        const contentNettoye = content.trim()
        onSubmit(contentNettoye) 
        setContent("") //réinitialise le champ
        setTouched(false) //remet l'état à false
    }

    return (
        <form onSubmit={handleSubmit}> 
            <textarea className="form-textarea" //balise du textarea
                value={content} //affiche le contenu écrit par l'utilisateur
                onChange={(event) => {
                    setContent(event.target.value)
                    setTouched(true)} 
                } //modifie le contenu dès que quelque chose est écrit et indique que l'utilisateur à écrit du texte
                placeholder="Quoi de neuf ?" //affiche le texte quand rien n'est écrit
            />

            {touched && content.trim() === "" && (
                <p className="form-error">Vous ne pouvez pas laisser un contenu vide</p>
            )}

            <div className="form-foot">
                <p className="form-caracteres">{CONTENT_MAX_LENGTH - content.length} caractères restants</p>
                <button className="form-button" type = "submit" disabled = {content.trim() === "" || content.length > CONTENT_MAX_LENGTH}>Publier</button>
            </div>
        </form>
    )
}
import { useState } from "react";
import type { TweetImage } from "../types/TweetImage";


type TweetFormProps = {
    onSubmit: (content: string, img?: TweetImage) => void
}

const CONTENT_MAX_LENGTH = 280; //nombre de caractères max

export function TweetForm({onSubmit} : TweetFormProps) : React.JSX.Element { //affichage du formulaire
    const [content, setContent] = useState<string>("") //variable d'état qui stocke le contenu écrit et une fonction pour mettre à jour la variable
    const [touched, setTouched] = useState(false) //variable d'état qui stocke si l'utilisateur a utilisé le formulaire ou non et une fonction pour mettre à jour la variable
    const [checked, setChecked] = useState(false) //variable d'état qui stocke si l'utilisateur a coché la case pour mettre une image ou non et une fonction pour mettre à jour la variable

    const [url, setURL] = useState<string>("") //variable d'état qui stocke l'url de l'image et une fonction pour mettre à jour la variable
    const [alt, setALT] = useState<string>("") //variable d'état qui stocke le texte alternatif de l'image et une fonction pour mettre à jour la variable

    const verifiedURL = URL.canParse(url) && new URL(url).protocol === "https:" //vérifie que l'url entrée est une URL HTTPS
    const verifiedALT = alt.trim() !== "" //vérifie que le texte alternatif ne soit pas pas vide


    const handleSubmit = (event : React.SubmitEvent<HTMLFormElement>) : void => { //gestionnaire de soumission
        event.preventDefault() //empêche le navigateur de charger un nouveau document afin que le code React traite l'action
        const newImg : TweetImage | undefined = //crée un nouveau TweetImage si la case est cochée sinon undefined
            checked ? {
                url : url,
                alt : alt
            } 
            : undefined

        const contentNettoye = content.trim() //enlève les espaces aux extrémités du contenu
        onSubmit(contentNettoye, newImg) 

        setContent("") //réinitialise le champ
        setTouched(false) //remet l'état à false
        setChecked(false) //décoche la case
        setURL("") //réinitialise le champ
        setALT("") //réinitialise le champ
    }


    return (
        <form onSubmit={handleSubmit}> 
            <textarea className="form-textarea" //balise du textarea
                value={content} //affiche le contenu écrit par l'utilisateur
                onChange={(event) => { //modifie les variables d'état si l'utilisateur écrit dans le formulaire
                    setContent(event.target.value)
                    setTouched(true)} 
                } //modifie le contenu dès que quelque chose est écrit et indique que l'utilisateur à écrit du texte
                placeholder="Quoi de neuf ?" //affiche le texte quand rien n'est écrit
            />

            <label className="form-label">
                <input 
                    className="form-checkbox" 
                    type="checkbox"
                    checked={checked}
                    onChange={(event) => { //modifie les variables d'état quand la case est cochée ou décochée
                        setChecked(event.target.checked)
                        if (!event.target.checked) {
                            setURL("")
                            setALT("")
                        }
                    }}
                />
                Ajouter une image
            </label>

            {checked && ( //si la case est cochée, on affiche les inputs pour remplir les données de l'image
                <div className="form-img">
                    <input
                        value={url}
                        onChange={(event) => setURL(event.target.value)}
                        placeholder="Entrez une URL HTTPS"
                        className="form-img-input"
                    />
                    <input
                        value={alt}
                        onChange={(event) => setALT(event.target.value)}
                        placeholder="Entrez un texte alternatif"
                        className="form-img-input"
                    />
                </div>
            )}

            {touched && content.trim() === "" && ( //si l'utilisateur a entré du texte puis l'a enlevé
                <p className="form-error">Vous ne pouvez pas laisser un contenu vide</p>
            )}

            <div className="form-foot"> 
                <p className="form-caracteres">{CONTENT_MAX_LENGTH - content.length} caractères restants</p>
                <button 
                    className="form-button" 
                    type = "submit" 
                    disabled = { //désactive le bouton si une des conditions est remplie
                        content.trim() === "" || //vérifie que le contenu ne soit pas vide
                        content.length > CONTENT_MAX_LENGTH || //vérifie que le contenu ne dépasse pas le nombre de caractères max
                        (checked && ( //si la case est cochée, vérifie les conditions de l'url et du texte alternatif
                            !verifiedURL ||
                            !verifiedALT
                        ))
                    }>Publier
                </button>
            </div>
        </form>
    )
}
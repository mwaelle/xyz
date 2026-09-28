import { Link } from "react-router-dom"
import { useDocumentTitle } from "../hooks/useDocumentTitle"


export function NotFoundPage() { //page d'affichage si l'URL ne correspond à aucune route
    useDocumentTitle("Page introuvable") //hook pour le titre de la page
    return (
        <>
            <p className="no-response">Page introuvable</p>
            <Link to={`/`}>Retour à l'accueil</Link>
        </>
    )
}
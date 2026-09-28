import { useEffect } from "react"; 


export const useDocumentTitle = (title: string): void => { //hook permettant de personnaliser le titre
    useEffect(() => { //affecte au titre document une valeur de la forme Titre | XYZ
        document.title = `${title} | XYZ`;
    }, [title])
}

type AvatarProps = {
    authorName : string
}

const getInitiales = (name : string) : string => { //fonction permettant de récupérer les initiales de l'auteur, en se limitant à 2
    const initiales = name.match(/[A-Z]/g)?.join("").substring(0,2) //récupère les 2 premières majuscules apparaissant dans le nom de l'auteur
    if (initiales) { //retourne ces initiales et s'il n'y en a pas, un X
        return initiales
    }
    return "X"
}

export function Avatar({authorName} : AvatarProps) { //avatar avec les initiales
    return (
        <div className="avatar">{getInitiales(authorName)}</div>
    )
}
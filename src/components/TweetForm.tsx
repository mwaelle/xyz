import { useState } from "react";


type TweetFormProps = {
    onSubmit: (content: string) => void
}

const CONTENT_MAX_LENGTH = 280;

export function TweetForm({onSubmit} : TweetFormProps) : React.JSX.Element {
    const [content, setContent] = useState<string>("")

    const handleSubmit = (event : React.SyntheticEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        const contentNettoye = content.trim()
        onSubmit(contentNettoye)
        setContent("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <p>{CONTENT_MAX_LENGTH - content.length} caractères restants</p>
            <button type = "submit" disabled = {content.trim() === "" || content.length > CONTENT_MAX_LENGTH}>Publier</button>
        </form>
    )
}
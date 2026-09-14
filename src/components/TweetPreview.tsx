import type { Tweet } from "../types/Tweet";

type TweetPreviewProps = {
    authorName : string;
    authorHandle : string;
    createdAt : string;
    content : string;
}

function TweetPreview = ({authorName, authorHandle, createdAt, content} : TweetPreviewProps) {

}
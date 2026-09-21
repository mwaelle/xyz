import type { TweetImage } from "./TweetImage";

export type Tweet = {
    id : string;
    authorName : string;
    authorHandle : string;
    content : string;
    image? : TweetImage;
    createdAt : string; 
    parentId? : string;
}
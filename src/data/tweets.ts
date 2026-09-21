import type { Tweet } from "../types/Tweet";

export const tweets : Array<Tweet> = [
    {
        id : "550e8400-e29b-41d4-a716-446655440000",
        authorName : "Maëlle Montauban",
        authorHandle : "mwaelle",
        content : "J'ai terminé mon projet de programmation, je suis tellement fière !!!",
        createdAt : "2026-09-14T09:15:00.000Z"
    },
    {
        id : "7c9e6679-7425-40de-944b-e07fc8f9e8b7",
        authorName : "Angèle Tetelin",
        authorHandle : "angelo",
        content : "Le coucher de soleil était incroyable hier soir !",
        image : {
            url : "https://www.pariszigzag.fr/wp-content/uploads/2014/04/coucher-de-soleil.png",
            alt : "Un magnifique coucher de soleil"
        },
        createdAt : "2026-09-13T19:48:00.000Z"
    },
    {
        id : "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        authorName : "Léa Holtzinger",
        authorHandle : "leo",
        content : "Petit café, musique dans les oreilles et une matinée tranquille. Que demander de plus ?",
        createdAt : "2026-09-14T08:42:00.000Z"
    },
    {
        id : "6ba7b810-9dad-41d1-80b4-00c04fd430c8",
        authorName : "Ewenn Montauban",
        authorHandle : "ewenn18",
        content : "Bientôt le retour d'Amélia !! Vrm en Octobre je disparaîs et me parlez pas d'Outlast vous allez être trauma tellement je suis taré et que je peux en parler pendant 3 heures (rest in peace Nathan, il en a fait les frais)",
        createdAt : "2026-09-13T16:20:00.000Z"
    },
    {
        id : "9f8c7d6e-5b4a-4321-9c8d-7e6f5a4b3c2d",
        authorName : "Ronan Montauban",
        authorHandle : "rwonann",
        content : "Quelqu'un connaît un bon film de SF pas trop connu ?",
        createdAt : "2026-09-13T21:05:00.000Z"
    },
    {
        id : "3d6f0a92-8b4e-4c71-a5f3-2d9e6b7c1a08",
        authorName : "Elise Antoine",
        authorHandle : "elisa",
        content : "Let's go au taïso :)",
        createdAt : "2026-09-13T14:37:00.000Z"
    },
    {
        id : "a12b34c5-d678-49ef-8012-3456789abcde",
        authorName : "Amandine Goujon",
        authorHandle : "troBi1leGP",
        content : "Petit souvenir...",
        image : {
            url : "https://api.lemans.org/media/cache/api_news_large/assets/fileuploads/68/21/6821b64c10557.jpg",
            alt : "Une affiche du GP Explorer 3"
        },
        createdAt : "2026-09-12T18:12:00.000Z"
    },
    {
        id : "e7f6d5c4-b3a2-4198-8765-43210fedcba9",
        authorName : "Titouan Hauchard",
        authorHandle : "JTMsqeezy",
        content : "Incroyable la dernière vidéo de Squeezie (en toute objectivité bien sûr) ;)",
        createdAt : "2026-09-12T22:30:00.000Z"
    },
    {
        id : "28f4a6b9-7c31-45de-b852-0a9f6c3d1e74",
        authorName : "Noélie Dumas",
        authorHandle : "fanDuJapon",
        content : "Devinez qui est en train de préparer son 4e voyage dans le meilleur pays ?",
        image : {
            url : "https://www.kanpai.fr/sites/default/files/styles/content_xs/public/uploads/2026/06/kanazawa-07.jpg",
            alt : "Une rue traditionnelle à Kanazawa"
        },
        createdAt : "2026-09-12T11:25:00.000Z"
    },
    {
        id : "b5e2c8a1-4d67-43f9-91ab-6e3c7d0f8254",
        authorName : "Ellya Forger",
        authorHandle : "Zelda4Life",
        content : "Je viens de recommencer Zelda Twilight Princess et je sais déjà que je vais y passer beaucoup trop de temps hehe",
        createdAt : "2026-09-11T20:47:00.000Z"
    },
    {
        id : "b5e2c8a1-4d67-43f9-91ab-6e3c7d0f9411",
        authorName : "Maëlle Montauban",
        authorHandle : "mwaelle",
        content : "OHHHH INCROYABLE ! Je suis trop contente pour toi !!",
        createdAt : "2026-09-12T13:00:00.000Z",
        parentId : "28f4a6b9-7c31-45de-b852-0a9f6c3d1e74"
    },
    {
        id : "b5e2c8a1-4d67-43f9-91ab-6e3c7d0f0000",
        authorName : "Maëlle Montauban",
        authorHandle : "mwaelle",
        content : "Ca me manque tellement...",
        createdAt : "2026-09-12T20:20:00.000Z",
        parentId : "a12b34c5-d678-49ef-8012-3456789abcde"
    }
]



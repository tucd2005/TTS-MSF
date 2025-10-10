export interface Post {
    id?: number; 
    username: string;
    avatar: string;
    time: string;
    content: string;
    title?: string;
    image?: string | null;
}
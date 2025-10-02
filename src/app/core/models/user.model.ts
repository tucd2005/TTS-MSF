export interface User{
    id: number;
    email: string;
    password?: string; // `?` vì ta không muốn gửi password về client
}
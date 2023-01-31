import fetch from "node-fetch";

export type Blog = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async (): Promise<Blog[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json() as Promise<Blog[]>;
};

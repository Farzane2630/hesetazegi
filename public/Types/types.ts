export type Post = {
  category: string;
  images: { id: string; src: string };
  authorPosts: number;
  id: string;
  title: string;
  description: string;
  date: string;
  authorName: string;
  authorPic: string;
  thumbnail: string;
  content: {
    heading1: string;
    paragraph1: string;
    heading2: string;
    paragraph2: string;
  };
  comments: number;
};
export type TopPost = {
  id: string;
  thumbnail: string;
};

export type User = {
  id: string;
  username: string;
  avatar: string;
};

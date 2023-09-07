type PostCategory = "THREAD" | "QNA";

interface PostData {
  id: number;
  title: string;
  category: PostCategory;
  creationDate: string;
  description: string;
  creator: User;
}

interface QNAPost extends PostData {
  category: "QNA";
  isAnswered: boolean;
  commentAnswerId?: number;
}

interface Comment {
  id: number;
  thread: number;
  content: string;
  creator: User;
}
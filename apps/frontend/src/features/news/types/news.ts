export interface News {
  id: string;
  createdAtString: string;
  updatedAtString: string;
  title: string;
  content: string;
  slug: string;
  coverImage: {
    src: string;
    fileName: string;
    height: number;
    width: number;
  } | null;
}

export interface NewsDetail {
  id: string;
  createdAtString: string;
  updatedAtString: string;
  title: string;
  content: string;
  slug: string;
}

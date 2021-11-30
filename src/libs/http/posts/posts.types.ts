export interface Posts {
  id: number;
  createdAt?: Date;
  updateAt?: Date;
  title: string;
  text: string;
  coverUrl: string;
  isBookEssay: boolean;
}

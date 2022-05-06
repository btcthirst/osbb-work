export class PostDto {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: Date;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.id = Date.now();
    this.createdAt = new Date();
  }
}

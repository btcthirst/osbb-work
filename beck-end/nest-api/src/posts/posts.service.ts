import { Injectable } from '@nestjs/common';
import { CreatedPostDto } from './dto/created-post.dto';
import { PostDto } from './dto/post.dto';
import { UpdatedPostDto } from './dto/updated-post.dto';

@Injectable()
export class PostsService {
  fakePosts: PostDto[] = [
    {
      id: 1,
      title: 'title1',
      content: 'some litle part of text',
      author: 'Creator',
      createdAt: new Date('12.20.2022'),
    },
    {
      id: 2,
      title: 'title2',
      content: 'some litle part of text',
      author: 'Creator',
      createdAt: new Date('2.11.2022'),
    },
    {
      id: 3,
      title: 'title3',
      content: 'some litle part of text',
      author: 'Creator',
      createdAt: new Date('12.12.2022'),
    },
    {
      id: 4,
      title: 'title4',
      content: 'some litle part of text',
      author: 'Creator',
      createdAt: new Date('2.2.2022'),
    },
    {
      id: 5,
      title: 'title5',
      content: 'some litle part of text',
      author: 'Creator',
      createdAt: new Date('11.2.2022'),
    },
  ];

  getAll(): PostDto[] {
    return this.fakePosts;
  }

  getByID(id: number): PostDto {
    const result: PostDto = this.fakePosts.find((el: PostDto) => el.id === id);
    return result;
  }

  create(newPost: CreatedPostDto): PostDto {
    const post: PostDto = new PostDto(
      newPost.title,
      newPost.content,
      newPost.author,
    );
    this.fakePosts.push(post);
    return post;
  }

  update(updatedPost: UpdatedPostDto): PostDto {
    let result: PostDto;
    this.fakePosts = this.fakePosts.map((el: PostDto) => {
      if (el.id === updatedPost.id) {
        el = {
          ...updatedPost,
        };
        result = el;
      }
      return el;
    });
    return result;
  }

  remove(id: number): PostDto {
    const index = this.fakePosts.findIndex((el: PostDto) => el.id === id);
    const result: PostDto = this.fakePosts[index];
    this.fakePosts.splice(index, 1);
    return result;
  }
}

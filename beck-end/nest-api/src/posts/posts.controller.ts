import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { CreatedPostDto } from './dto/created-post.dto';
import { PostDto } from './dto/post.dto';
import { UpdatedPostDto } from './dto/updated-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private postsService: PostsService) { }

  @Get()
  getAll(): PostDto[] {
    return this.postsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): PostDto {
    return this.postsService.getByID(id);
  }

  @Post()
  create(@Body(new ValidationPipe()) post: CreatedPostDto): PostDto {
    return this.postsService.create(post);
  }

  @Put()
  update(@Body(new ValidationPipe()) post: UpdatedPostDto): PostDto {
    return this.postsService.update(post);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): PostDto {
    return this.postsService.remove(id);
  }
}

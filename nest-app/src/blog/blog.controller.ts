import { BlogService } from './blog.service'
import { BlogDto } from './dto/blog.dto'
import { Controller, Get, HttpCode, Post, Body, Param, Patch, Delete, ValidationPipe, UsePipes } from '@nestjs/common';

@Controller("blog")
export class BlogController {
    constructor(private readonly blogService: BlogService) { }

    @HttpCode(200)
    @Get()
    async getAll() {
        return this.blogService.getAllBlogs();
    }

    @HttpCode(201)
    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() dto: BlogDto) {
        return this.blogService.create(dto);
    }

    @HttpCode(200)
    @Get(":id")
    async getById(@Param("id") id: string) {
        return this.blogService.getById(id);
    }

    @HttpCode(200)
    @Patch(":id")
    async update(@Param("id") id: string, @Body() dto: BlogDto) {
        return this.blogService.update(id, dto);
    }

    @HttpCode(200)
    @Delete(":id")
    async delete(@Param("id") id: string) {
        return this.blogService.delete(id);
    }
}

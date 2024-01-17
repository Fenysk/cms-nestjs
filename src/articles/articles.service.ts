import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { Article } from '@prisma/client';

@Injectable()
export class ArticlesService {
    constructor(private readonly prismaService: PrismaService) { }

    async getAllArticles(): Promise<Article[]> {
        return this.prismaService.article.findMany();
    }

    async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
        const createdArticle = await this.prismaService.article.create({
            data: createArticleDto
        });

        return createdArticle;
    }

}

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateQuizDto } from './dto/quizzes.dto';

@Injectable()
export class QuizzesService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateQuizDto) {
    return this.prisma.quiz.create({
      data: {
        title: data.title,
        questions: {
          create: data.questions.map((q) => ({
            text: q.text,
            type: q.type,
          })),
        },
      },
      include: {
        questions: true,
      },
    });
  }

  async findAll() {
    const quizzes = await this.prisma.quiz.findMany({
      include: { questions: true },
    });

    return quizzes.map((quiz) => ({
      id: quiz.id,
      title: quiz.title,
      questions: quiz.questions.map((q) => ({
        id: q.id,
        text: q.text,
        type: q.type,
      })),
    }));
  }

  async findOne(id: number) {
    return this.prisma.quiz.findUnique({
      where: { id },
      include: { questions: true },
    });
  }

  async remove(id: number) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}

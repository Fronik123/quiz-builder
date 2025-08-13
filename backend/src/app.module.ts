import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizzesModule } from './quizzes/quizzes.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule, QuizzesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

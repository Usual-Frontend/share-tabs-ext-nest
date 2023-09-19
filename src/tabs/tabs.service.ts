import { Injectable } from '@nestjs/common';
import { RecommendMeDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TabsService {
  constructor(private prisma: PrismaService) {}
  recommendMe(_dto: RecommendMeDto) {
    const { url, title } = _dto;
    return this.prisma.tab.create({
      data: {
        url,
        title,
      },
    });
  }

  all() {
    return this.prisma.tab.findMany();
  }
}

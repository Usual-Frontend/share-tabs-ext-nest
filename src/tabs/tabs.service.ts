import { Injectable } from '@nestjs/common';
import { RecommendMeDto, SaveTabGroupDto } from './dto';
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
  saveTabGroup(_dto: SaveTabGroupDto) {
    //todo: JSON string 的类型怎么表示？
    // const { url, title } = _dto;

    const j = JSON.stringify(_dto.tab_array_json);
    return this.prisma.tabGroup.create({
      data: {
        tab_array_json: j,
        tag: _dto.tag,
      },
    });
  }

  all() {
    return this.prisma.tab.findMany();
  }
}

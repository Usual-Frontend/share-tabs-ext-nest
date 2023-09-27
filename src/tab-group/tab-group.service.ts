import { Injectable } from '@nestjs/common';
import { CreateTabGroupDto } from './dto/create-tab-group.dto';
import { UpdateTabGroupDto } from './dto/update-tab-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TabGroupService {
  constructor(private prisma: PrismaService) {}
  create(_dto: CreateTabGroupDto) {
    return this.prisma.tabGroup.create({
      data: {
        tab_array_json: _dto.tab_array_json,
        tag: _dto.tag,
      },
    });
  }

  async findAll() {
    const d = await this.prisma.tabGroup.findMany();

    if (d && d.length) {
      return d.map((_t) => ({
        id: _t.id,
        tag: _t.tag,
        tabsCount: JSON.parse(_t.tab_array_json as string).length,
        // tabs: JSON.parse(_t.tab_array_json as string),
      }));
    }
  }

  async findOne(id: number) {
    const d = await this.prisma.tabGroup.findFirstOrThrow({
      where: {
        id,
      },
    });
    if (d) {
      return {
        id: d.id,
        tag: d.tag,
        tabs: JSON.parse(d.tab_array_json as string), // TODO 这里为啥要parse两次呢
      };
    }
  }

  update(id: number, updateTabGroupDto: UpdateTabGroupDto) {
    return `This action updates a #${id} tabGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabGroup`;
  }
}

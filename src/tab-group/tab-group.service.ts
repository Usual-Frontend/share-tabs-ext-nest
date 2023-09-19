import { Injectable } from '@nestjs/common';
import { CreateTabGroupDto } from './dto/create-tab-group.dto';
import { UpdateTabGroupDto } from './dto/update-tab-group.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TabGroupService {
  constructor(private prisma: PrismaService) {}
  create(_dto: CreateTabGroupDto) {
    const j = JSON.stringify(_dto.tab_array_json);
    return this.prisma.tabGroup.create({
      data: {
        tab_array_json: j,
        tag: _dto.tag,
      },
    });
  }

  findAll() {
    return this.prisma.tabGroup.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tabGroup`;
  }

  update(id: number, updateTabGroupDto: UpdateTabGroupDto) {
    return `This action updates a #${id} tabGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} tabGroup`;
  }
}

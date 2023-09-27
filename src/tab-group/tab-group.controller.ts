import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TabGroupService } from './tab-group.service';
import { CreateTabGroupDto } from './dto/create-tab-group.dto';
import { UpdateTabGroupDto } from './dto/update-tab-group.dto';

@Controller('tab-group')
export class TabGroupController {
  constructor(private readonly tabGroupService: TabGroupService) {}

  @Post()
  create(@Body() createTabGroupDto: CreateTabGroupDto) {
    return this.tabGroupService.create(createTabGroupDto);
  }

  @Get()
  async findAll() {
    return await this.tabGroupService.findAll();
  }

  @Get('/test')
  test() {
    return 'test1111';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tabGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTabGroupDto: UpdateTabGroupDto,
  ) {
    return this.tabGroupService.update(+id, updateTabGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tabGroupService.remove(+id);
  }
}

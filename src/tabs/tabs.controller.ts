import { Body, Controller, Get, Post } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { RecommendMeDto, SaveTabGroupDto } from './dto';

@Controller('tabs')
export class TabsController {
  constructor(private tabsService: TabsService) {}

  @Post('recommend_me')
  recommendMe(@Body() _dto: RecommendMeDto) {
    return this.tabsService.recommendMe(_dto);
  }

  @Post('save_tab_group')
  saveTabGroup(@Body() _dto: SaveTabGroupDto) {
    return this.tabsService.saveTabGroup(_dto);
  }

  @Get('/all')
  all() {
    return this.tabsService.all();
  }

  @Get('/test')
  test() {
    return {
      status: 'connected',
    };
  }
}

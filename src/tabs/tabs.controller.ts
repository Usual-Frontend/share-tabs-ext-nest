import { Body, Controller, Get, Post } from '@nestjs/common';
import { TabsService } from './tabs.service';
import { RecommendMeDto } from './dto';

@Controller('tabs')
export class TabsController {
  constructor(private tabsService: TabsService) {}

  @Post('recommend_me')
  recommendMe(@Body() _dto: RecommendMeDto) {
    return this.tabsService.recommendMe(_dto);
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

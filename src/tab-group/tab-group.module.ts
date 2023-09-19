import { Module } from '@nestjs/common';
import { TabGroupService } from './tab-group.service';
import { TabGroupController } from './tab-group.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TabGroupController],
  providers: [TabGroupService],
  imports: [PrismaModule],
})
export class TabGroupModule {}

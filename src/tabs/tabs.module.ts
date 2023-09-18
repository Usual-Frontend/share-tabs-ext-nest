import { Module } from '@nestjs/common';
import { TabsController } from './tabs.controller';
import { TabsService } from './tabs.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TabsController],
  providers: [TabsService],
  imports: [PrismaModule],
})
export class TabsModule {}

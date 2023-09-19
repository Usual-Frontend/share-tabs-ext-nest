import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { CommonModule } from './common/common.module';
import { TabsModule } from './tabs/tabs.module';
import { TabGroupModule } from './tab-group/tab-group.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // ignoreEnvFile: true, // disable looking for .env file; only use runtime environment
    }),
    RouterModule.register([
      {
        path: 'api',
        children: [TabsModule, TabGroupModule],
      },
    ]),
    PrismaModule,
    CommonModule,
    TabsModule,
    TabGroupModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

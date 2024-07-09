import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BaseController } from './controller/base_controller/base_controller.controller';
import { BaseService } from './service/base/base.service';

@Module({
  controllers: [AppController, BaseController],
  providers: [AppService, BaseService],
})
export class AppModule {}

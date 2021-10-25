import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserCommand } from './user/user.command';
import { UserService } from './user/user.service';

@Module({
  imports: [CommandModule],
  controllers: [AppController],
  providers: [AppService, UserCommand, UserService],
})
export class AppModule {}

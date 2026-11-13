import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { title } from 'process';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async getParkolohely() {
    return {
      title: 'Parkoló hely',
      parkolohelyek: await this.appService.getParkolo()
    }
  }

//   @Post('/')
//   @Render('index')
//   editProfile(@Body() body: NewParkolohelyDto) {
//     const userRegex = /^[a-z][a-z\d]*$/;
//     if (!userRegex.test(body.username)) {
//       return {
//         error: "Invalid username"
//       }
//     }
//   }
}

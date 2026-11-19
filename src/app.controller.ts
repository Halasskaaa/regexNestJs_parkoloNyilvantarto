import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { title } from 'process';
import { NewParkolohelyDto } from './newParkolohely.dto.js';

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
  
  @Post()
  @Render('index')
  async newParkolohely(@Body() body: NewParkolohelyDto) {
    await this.appService.addParkolo(
      body.rendszam,
      body.tulajdonos,
      Number(body.idotartam),
      body.fizetve = true
    )
    return this.getParkolohely();
  }
}

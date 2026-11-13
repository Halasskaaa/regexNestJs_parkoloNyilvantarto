import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { Parkolohely } from './parkolohely.js';

const mysqlConnection = mysql.createPool({
  host: 'localhost', 
  user: 'root',
  password: '',
  database: 'parkolo'
})

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getParkolo() {
    const [results] = await mysqlConnection.execute(
      'SELECT * FROM parkolas'
    )
    
    const rows = results as Parkolohely[];
    return rows;
  }
}

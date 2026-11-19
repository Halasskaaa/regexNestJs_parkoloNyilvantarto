import { Injectable } from '@nestjs/common';
import mysql from 'mysql2/promise';
import { Parkolohely } from './parkolohely.js';
import { NewParkolohelyDto } from './newParkolohely.dto.js';

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

  async addParkolo(rendszam: string, tulajdonos: string, idotartam: number, fizetve: boolean) {
    const [results] = await mysqlConnection.execute(
      'INSERT INTO parkolas (rendszam, tulajdonos, idotartam, fizetve) VALUES (?,?,?,?)',
      [rendszam,tulajdonos,idotartam,fizetve]
    )
    const rows = results as any;
    return {
      id: rows.insertId,
      rendszam,
      tulajdonos,
      idotartam,
      fizetve
    } as NewParkolohelyDto;
  }
}

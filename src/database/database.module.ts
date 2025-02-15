import { config } from 'dotenv';
import { Module } from '@nestjs/common';
import pg from 'pg';

// Load Environment Variables
config({
  path: ['.env', '.env.production', '.env.local'],
});

const sql = new pg.Pool({ connectionString: process.env.DATABASE_URL });

const dbProvider = {
  provide: 'POSTGRES_POOL',
  useValue: sql,
};

@Module({
  providers: [dbProvider],
  exports: [dbProvider],
})
export class DatabaseModule {}
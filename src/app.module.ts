import { Module } from '@nestjs/common';
import { HealthController } from './platform/health/health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
})
export class AppModule {}

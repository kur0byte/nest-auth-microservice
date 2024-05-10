import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
  transport: Transport.RMQ,
  options: {
    urls: ["amqp://toth:Topotoncio-1298@172.233.190.177:5672"],
    queueOptions: {
      queue: "AUTH_QUEUE",
      durable: false,
    },
  },
});

  await app.listen()
    .then(() => Logger.log('✨ Auth MicroService Started'));
}

bootstrap();
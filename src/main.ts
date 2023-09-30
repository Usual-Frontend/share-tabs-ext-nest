import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
let PORT = 3000;
if (process.env.MODE === 'PROD') {
  PORT = 3000;
}

async function bootstrap() {
  console.log('mode:', process.env.MODE);

  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: '*',
      exposedHeaders: '*',
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(PORT);
}
bootstrap();

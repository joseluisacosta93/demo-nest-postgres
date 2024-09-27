import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GetUsersHandler } from './users/applications/get-users/get-users.handler';
import { CreateUserHandler } from './users/applications/create-user/create-user.handler';
import { CreateUserCommand } from './users/applications/create-user/create-user.command';
import { timer } from '../benchmark/timer';
import * as fs from 'fs';

async function bootstrap() {
  console.log('Starting  APP');
  const app = await NestFactory.create(AppModule);
  console.log('Bernchmark');
  const jsonData = fs.readFileSync('./benchmark/users.json', 'utf8');
  const users = JSON.parse(jsonData);
  await timer('creating user', async () => {
    for (const user of users) {
      const createUserHandler = app.get(CreateUserHandler);
      await createUserHandler.execute({
        id: user.id,
        name: user.name,
        email: user.email,
      } as CreateUserCommand);
    }; 
  });
  console.log( `${users.length} users created`);
  await timer('getting users', async () => {
    const getUsersHandler = app.get(GetUsersHandler);
    const result = await getUsersHandler.execute();
    console.log( `${result.length} users found`);	
  });
}
bootstrap();

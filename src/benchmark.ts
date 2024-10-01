import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GetUsersHandler } from './users/applications/get-users/get-users.handler';
import { CreateUserHandler } from './users/applications/create-user/create-user.handler';
import { CreateUserCommand } from './users/applications/create-user/create-user.command';
import { UpdateUserHandler } from './users/applications/update-user/update-user.handler';
import { timer } from '../benchmark/timer';
import * as fs from 'fs';
import { UpdateUserCommand } from './users/applications/update-user/update-user.command';


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
  const result = await timer('getting users', async () => {
    const getUsersHandler = app.get(GetUsersHandler);
    const result = await getUsersHandler.execute();	
    return result;
  });
  console.log( `${result.length} users found`);	

  let randomUsers = [];
  await timer('getting random users', async () => {
    for (let i = 0; i < 1000; i++) {
      const getUsersHandler = app.get(GetUsersHandler);
      const result = await getUsersHandler.execute(Math.floor(Math.random() * 1000));	
      randomUsers.push(result);
    }
  });
  console.log( `${randomUsers.length} random users found`);	


  let udpatedUsers = [];
  await timer('updating users', async () => {

    for (let i = 0; i < 1000; i++) {
      const updateUserHandler = app.get(UpdateUserHandler);
      const result = await updateUserHandler.execute({
        id:i+1,
        query:{
          name:'updated',
          email:'updated@gmail.com'
        }
      }as UpdateUserCommand);	
      udpatedUsers.push(result);
    }
  });
  console.log( `${udpatedUsers.length} users updated`);	

}
bootstrap();

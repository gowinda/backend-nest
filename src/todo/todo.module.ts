import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';


@Module({
  controllers: [TodoController]
})
export class TodoModule {}
export class TodoDto {  id: string;  name: string;  description?: string;}
export class TodoEntity {  id: string;  name: string;  description?: string;}

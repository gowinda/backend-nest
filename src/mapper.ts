

export const toTodoDto = (data: TodoEntity): TodoDto => {  const { id, name, description } = data;
let todoDto: TodoDto = {    id,    name,    description,  };
return todoDto;};export const toTodoDto = (data: TodoEntity): TodoDto => {  const { id, name, description } = data;
let todoDto: TodoDto = {    id,    name,    description,  };
return todoDto;};

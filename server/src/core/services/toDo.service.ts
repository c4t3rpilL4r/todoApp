import { IUpsertToDo } from '@app/interfaces';
import { ToDo } from '@app/models';

const create = async (toDo: IUpsertToDo) => {
  const createdToDo = await ToDo.query().insert(toDo);

  return createdToDo;
};

const getPaginated = async (page: number, limit: number) => {
  const toDos = await ToDo.query().page(page, limit);

  return toDos;
};

const update = async (toDo: IUpsertToDo) => {
  const updatedToDo = await ToDo.query().patchAndFetchById(toDo.id!, toDo);

  return updatedToDo;
};

const deleteById = async (toDoId: number) => {
  const deletedToDo = await ToDo.query().deleteById(toDoId);

  return !!deletedToDo;
};

export const toDoService = { create, getPaginated, update, deleteById };

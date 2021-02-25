import { IUpsertToDo } from '@app/interfaces';
import { toDoService } from '@app/services';
import { RequestHandler } from 'express';

const create: RequestHandler = async (req, res) => {
  const { name, isDone, userId } = req.body;

  const toDo: IUpsertToDo = {
    name,
    isDone,
    userId,
  };
  const createdToDo = toDoService.create(toDo);

  res.status(201).send(createdToDo);
};

const fetch: RequestHandler = async (req, res) => {
  const { page, limit } = req.query as any;
  const paginatedToDoList = await toDoService.getPaginated(page, limit);

  res.status(200).send(paginatedToDoList);
};

const update: RequestHandler = async (req, res) => {
  const toDoId = +req.params.toDoId;
  const { name, isDone, userId } = req.body;

  const toDoUpdatedDetails: IUpsertToDo = {
    id: toDoId,
    name,
    isDone,
    userId,
  };
  const updatedToDo = await toDoService.update(toDoUpdatedDetails);

  res.status(200).send(updatedToDo);
};

const deleteById: RequestHandler = async (req, res) => {
  const toDoId = +req.params.toDoId;
  const isDeleted = toDoService.deleteById(toDoId);

  const message = isDeleted
    ? 'To-Do deletion successful.'
    : 'To-Do deletion failed.';

  res.status(200).send({ message });
};

export const todoController = { create, fetch, update, deleteById };

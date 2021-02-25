import { RelationMappings } from 'objection';
import BaseModel from './base.model';

export class ToDo extends BaseModel {
  static tableName = 'to_dos';

  static relationMapping = (): RelationMappings => ({
    user: {
      relation: BaseModel.BelongsToOneRelation,
      modelClass: ToDo,
      join: {
        from: 'to_dos.userId',
        to: 'users.id',
      },
    },
  });

  id!: number;
  name!: string;
  isDone!: boolean;
  userId!: number;
}

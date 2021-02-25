import BaseModel from './Base.model';

export class User extends BaseModel {
  static tableName = 'users';

  id!: number;
  username!: string;
  password!: string;
}

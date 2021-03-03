import { Model } from 'objection';
import knex from '../knex-config';

Model.knex(knex);

export default class BaseModel extends Model {}

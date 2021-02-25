import * as Knex from 'knex';

const TABLE_NAME = 'to_dos';

export async function up(knex: Knex): Promise<void> {
  const tableExists = await knex.schema.hasTable(TABLE_NAME);

  if (!tableExists) {
    await knex.schema
      .createTable(TABLE_NAME, (table) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.boolean('isDone').notNullable().defaultTo(false);
        table.integer('userId').notNullable();
        table.foreign('userId').references('user.id').onDelete('CASCADE');
      })
      .then(() => {
        // tslint:disable-next-line: no-console
        console.info(`${TABLE_NAME} created.`);
      });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists(TABLE_NAME);
}

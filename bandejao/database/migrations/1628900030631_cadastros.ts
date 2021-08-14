import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cadastros extends BaseSchema {
  protected tableName = 'cadastros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').unique()
      table.string('nome').notNullable()
      table.integer('matricula').notNullable().unique()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

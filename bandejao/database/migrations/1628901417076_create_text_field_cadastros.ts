import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cadastros extends BaseSchema {
  protected tableName = 'cadastros'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      //table.string('text')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      //table.dropColumn('text')
    })
  }
}

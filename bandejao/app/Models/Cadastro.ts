import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cadastro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column({ isPrimary: false })
  public nome: text

  @column({ isPrimary: false })
  public matricula: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
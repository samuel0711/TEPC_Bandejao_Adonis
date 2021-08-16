/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import { Response } from '@adonisjs/core/build/standalone'
import Route from '@ioc:Adonis/Core/Route'
//import CadastrosController from 'App/Controllers/Http/CadastrosController'

Route.get('/', async ({ view }) => {
  return view.render('begin')
}).as('index')

Route.get('/login','SessionsController.create').as('sessions.create')
Route.post('/login','SessionsController.store').as('sessions.store')
Route.get('/logout','SessionsController.delete').as('sessions.delete')

Route.group( () => {
  Route.get('/', 'CadastrosController.index').as('index')
  Route.post('/', 'CadastrosController.store').as('store')
  Route.get('/:id', 'CadastrosController.show').as('show')
})
.prefix('/cadastro')
.as('cadastro')

Route.get('/agenda','AgendaController.index').as('agenda.index').middleware('auth')

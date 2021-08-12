// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext, Response } from "@adonisjs/core/build/standalone";


let users = [
    {
      id: 0,
      nome: "Samuel Igor dos Santos Pessoa",
      matricula: 2016780469
    },
    {
      id: 1,
      nome: "Ariane Rodrigues Carneiro",
      matricula: 2016750262
    }
];

let count = 2;

export default class CadastrosController {

    public index({response}: HttpContextContract){
        return response.json(users);
    }

    public show({response, params}:HttpContextContract){
        console.log(params.id);
        return response.json(users[params.id]);
    }

    public store({request}: HttpContextContract){
        const nome = request.input('nome')
        const matricula = request.input('matricula')
        const cad = {
            id: count,
            nome: nome,
            matricula: matricula
        }

        users.push(cad)
        count = count + 1;
        return response.json(users)
    }
}

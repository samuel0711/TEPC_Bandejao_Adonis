// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext, Response } from "@adonisjs/core/build/standalone";
import Cadastro from "App/Models/Cadastro";

export default class CadastrosController {
    public async index({view}: HttpContextContract){
        const users = await Cadastro.all()
        return view.render('cadastro/index', {users: users});
    }

    public async show({view, params}:HttpContextContract){
        const user = await Cadastro.find(params.id);
        return view.render('cadastro/show', { user });
    }

    public store({request, response}: HttpContextContract){
        const nome = request.input('nome')
        const matricula = request.input('matricula')
        const cad = {
            nome: nome,
            matricula: matricula
        }
        
        
        return response.json(users)
    }
}

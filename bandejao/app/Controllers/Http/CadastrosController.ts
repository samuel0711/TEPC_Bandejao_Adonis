// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext, Response } from "@adonisjs/core/build/standalone";
import Cadastro from "App/Models/Cadastro";
import User from "App/Models/User";

export default class CadastrosController {
    public index({view, auth}: HttpContextContract){

        return view.render('cadastro/index');
    }

    public async show({view, params}:HttpContextContract){
        console.log(params.id)
        const user = await Cadastro.findBy('id': params.id);
        console.log(user)
        return view.render('cadastro/show', { user: user });
    }

    public async store({request, response}: HttpContextContract){
        const nome = request.input('nome')
        const matricula = request.input('matricula')
        const password = request.input('password')
        //console.log(password)


        try{
            const cad = await Cadastro.create({ nome: nome, matricula: matricula })
            const user = await User.create({ matricula: matricula, password: password })
            return response.redirect().toRoute('sessions.create')
        } catch (e){
            console.log(e.message)
            return response.badRequest('Invalid')
        }
        
    }
}

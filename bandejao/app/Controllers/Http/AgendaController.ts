// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cadastro from "App/Models/Cadastro";

export default class AgendaController {
    public async index({view, auth}: HttpContextContract){

        await auth.use('web').authenticate()

        const users = await Cadastro.all()

        const rec = await Cadastro.find(auth.user.matricula);
        const nome = rec.nome;

        return view.render('welcome', {users: users, nome: nome});
    }
}

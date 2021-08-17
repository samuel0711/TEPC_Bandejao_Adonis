// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from "@adonisjs/core/build/standalone";
import Cadastro from "App/Models/Cadastro";
import Agenda from "App/Models/Agenda";


export default class AgendaController {
    public async index({view, auth}: HttpContextContract){

        await auth.use('web').authenticate()

        const users = await Cadastro.all()

        const rec = await Cadastro.find(auth.user.matricula);
        const nome = rec.nome;

        return view.render('agenda/index', {users: users, nome: nome});
    }

    public async store({view, auth, response, request}: HttpContextContract){
        await auth.use('web').authenticate()

        const matricula = auth.user.matricula;
        const horario = request.input('horarios');

        console.log(matricula)
        console.log(horario)
        
        
        try{
            console.log('entrou')
            const schedule = await Agenda.create({ matricula: matricula, horario: horario })
            console.log('passou')
            return response.redirect().toRoute('agenda.show')
        } catch (e){
            console.log(e.message)
            return response.badRequest('Invalid')
        }
    }

    public async show({view, auth}: HttpContextContract){

        const user = await Cadastro.findBy('matricula': auth.user.matricula);
        const schedule = await Agenda.findBy('matricula': auth.user.matricula);

        return view.render('agenda/show', { nome: user.nome, horario: schedule.horario });
    }

}

import { Response } from '@adonisjs/core/build/standalone';
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class SessionsController {
    public async create({view, auth, response}: HttpContextContract){

        if(await auth.check()){
            response.redirect().toRoute('agenda.index')
        }else{
            return view.render('sessions/create');
        }
    }

    public async store({auth, request, response}: HttpContextContract){
        const matricula = request.input('matricula');
        const password = request.input('password');
        console.log(matricula)
        console.log(password)

        try{
            console.log('entrou')
            await auth.use('web').attempt(matricula, password)
            console.log('passou')
            response.redirect().toRoute('agenda.index')
        } catch{
            return response.badRequest('Invalid')
        }
    }

    public async delete({auth, response}: HttpContextContract){
        await auth.use('web').logout()
        return response.redirect().toRoute('index')
    }

}

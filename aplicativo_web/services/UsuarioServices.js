const { password } = require("../database/database");
const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchemas")

class UsuarioService {

    #usuarioSchemas

    constructor(){
        this.#usuarioSchemas = UsuarioSchema;
    }

    async buscarUsuario(id){
        const dado = this.#usuarioSchemas.findOne({
            where: {id: id}
        });

        if(!dado){
            return null
        }

        const usuario = new Usuario(
            dado.email,
            dado.password,
            dado.username
        )
        usuario.id = dado.id

        return usuario
    }

    async DeletarUsuario(id){
        const usuario =  await this.#usuarioSchemas.findOne({
            where: {id: id}
        });

        const afferctedRows = await usuario.destroy()

        return afferctedRows;
    }



    async buscarTodosUsuarios(){

        const usuarios = []
        const dado = await this.#usuarioSchemas.findAll();

        for(const usuario of dados){

            const u = new Usuario(
                 usuario.username,
                 usuario.email,
                 usuario.password
            ) 

            u.id = usuario.id

            usuarios.push(u)
        }
         return usuarios
    }

   

    async cadastrarUsuario(username, email, senha){
        const usuario = new Usuario(username, email, senha,)

        const id = await this.#usuarioSchemas.create({
            username: usuario.nome,
            email: usuario.email,
            password: usuario.senha
        })

        return id
        
    }

    async AtualizarUsuario(id, username, email, senha){

        let rows=0
        

        const usuario = await this.buscarUsuario(id)

        if(usuario){

            const model = new Usuario(
                username || usuario.username, 
                email || usuario.email, 
                senha || usuario.password)    

            const afferctedRows = await this.#usuarioSchemas.update({
                username: usuario.nome,
                email: usuario.email,
                password: usuario.senha
            }, {
                where:{
                    id:id
                }
            }
            )

            rows = afferctedRows

        }

        return rows
        
    }
}

module.exports = UsuarioService
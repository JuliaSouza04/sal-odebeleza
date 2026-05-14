
const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchemas")

class UsuarioService {

    #usuarioSchemas

    constructor(){
        this.#usuarioSchemas = UsuarioSchema;
    }

    async buscarUsuario(id){
        const dado = await this.#usuarioSchemas.findOne({
            where: {id: id}
        });

        if(!dado){
            return null
        }

        const usuario = new Usuario(
            dado.username,
            dado.email,
            dado.password
        )
        usuario.id = dado.id

        return usuario
    }

    async deletarUsuario(id){
        const usuario =  await this.#usuarioSchemas.findOne({
            where: {id: id}
        });

        const afferctedRows = await usuario.destroy()

        return afferctedRows;
    }



    async buscarTodosUsuarios(){

        const usuarios = []
        const dado = await this.#usuarioSchemas.findAll();

        for(const usuario of dado){

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

        const usuario = new Usuario(username, email, senha)

        const id = await this.#usuarioSchemas.create({
            username: usuario.nome,
            email: usuario.email,
            password: usuario.senha
        })

        return id;
        
    }

    async atualizarUsuario(id, username, email, senha){

        let rows=0;
        

        const usuario = await this.buscarUsuario(id)

        if(usuario){

            const model = new Usuario(
                username || usuario.username, 
                email || usuario.email, 
                senha || usuario.password)    

            const afferctedRows = await this.#usuarioSchemas.update({
                username: model.nome,
                email: model.email,
                password: model.senha
            }, {
                where:{
                    id: id
                }
            })

            rows = afferctedRows

        }

        return rows;
        
    }
}

module.exports = UsuarioService;
const Usuario = require("../mvc/models/UsuarioModel");
const UsuarioSchema = require("../schemas/UsuarioSchemas")

class UsuarioService {

    #usuarioSchemas

    constructor(){
        this.#usuarioSchemas = UsuarioSchema;
    }

    async buscarUsuario(id){
        return await this.#usuarioSchemas.findAll({
            where: {id: id}
        });
    }
}

module.exports = UsuarioService
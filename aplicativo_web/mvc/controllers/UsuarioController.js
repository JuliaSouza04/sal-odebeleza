const UsuarioService = require("../../services/UsuarioServices");

class UsuarioController {

    constructor(){
        this.usuarioService = new UsuarioService()
    }

   async index(req, res){
        const usuarios = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/UsuarioView", {usuarios})
    }

    async usuarioListView(req, res){
        const usuarios = await this.usuarioService.buscarTodosUsuario()
        res.render("Usuario/ListeView", {
            usuarios: usuarios
        })
    }

    usuarioCreateView(req, res){
        res.render("Usuario/CreateView")
    }

    async usuarioEditView(req, res){
        const usuario = await this.usuarioService.buscarUsuario(req.params.id)
        res.render("Usuario/EditView", {
            usuario: usuario
        })
    }

   async usuarioPostAsync(req, res){
    console.log(req, res)
    const id = await this.usuarioService.cadastrarUsuario(
        req.body.username,
        req.body.email,
        req.body.senha
    )
    res.json({id:id})
   }


   async usuarioPutAsync(req, res){
    console.log(req, res)
    const affectedRows = await this.usuarioService.cadastrarUsuario(
        req.body.id,
        req.body.username,
        req.body.email,
        req.body.senha
    )
    res.json({id:id})
   }

   async usuarioDeleteAsync(req, res){
    console.log(req, res)
    const affectedRows = await this.usuarioService.DeletarUsuario(req.params.id)

        req.body.id,
        req.body.username,
        req.body.email,
        req.body.senha

    res.json({id:id})
   }


}


module.exports = new UsuarioController()
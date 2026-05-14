const AtendimentoServices = require("../../services/AtendimentoServices");
const UsuarioService = require("../../services/UsuarioServices");

class AtendimentoController {

    constructor(){
        this.atendimentoServices = new AtendimentoServices()
        this.usuarioService = new UsuarioService()
    }
    async atendimentoListView(req, res){
        const atendimentos = await this.atendimentoServices.buscarTodosAtendimentos()
        res.render("Atedimento/ListView", {
            atendimentos: atendimentos
        })
    }

    async atendimentoCreateView(req, res){
        const usuarios = await this.usuarioService.buscarTodosUsuarios()
        res.render("Atendimento/CreateView", {
            usuarios: usuarios
        })
    }

    async atendimentoEditView(req, res){
        const atendimento = await this.atendimentoServices.buscarAtendimentos(req.params.id)
        res.render("Atendimento/EditView", {
            atendimento: atendimento
        })
    }

   async atendimentoPostAsync(req, res){
    const id = await this.atendimentoServices.cadastrarAtendimento(
        req.body.id,
        req.body.nomeCliente,
        req.body.telefone, 
        req.body.horario,
        req.body.data, 
        req.body.dataNascimento,
        req.body.tipoServico,
        req.body.profissional
    )
    res.json({id:id})
   }


   async atendimentoPutAsync(req, res){

    const affectedRows = await this.atendimentoService.atualizarAtendimento(
        req.body.id,
        req.body.nomeCliente,
        req.body.telefone, 
        req.body.horario,
        req.body.data, 
        req.body.dataNascimento,
        req.body.tipoServico,
        req.body.profissional
    )
    res.json({affectedRows: affectedRows})
   }

   async atendimentoDeleteAsync(req, res){

    const affectedRows = await this.atendimentoService.deletarAtendimento(req.params.id)

    res.json({affectedRows: affectedRows})
   }


}


module.exports = new AtendimentoController()
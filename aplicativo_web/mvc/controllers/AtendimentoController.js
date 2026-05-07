class AtendimentoController {

    listar(req, res){
        res.render("Atendimento/ListagemView")
    }

    cadastrar(req, res){
        res.render("Atendimento/CadastrarView")
    }

    cadastrarView(req, res){
        res.render("Atendimento/CadastrarView")
    }

    excluir(req, res){
        res.render("Atendimento/ExcluirView")
    }

    atualizar(req, res){
        res.render("Atendimento/AtualizarView")
    }

    atualizarView(req, res){
        res.render("Atendimento/AtualizarView")
    }
}



module.exports = new AtendimentoController()
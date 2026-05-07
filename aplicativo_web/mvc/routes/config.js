const { Router } = require("express")
const UsuarioController = require("../controllers/UsuarioController")
const AtendimentoController = require("../controllers/AtendimentoController")

const router = Router()


router.get("/user/index", UsuarioController.index)


router.get("/listar", AtendimentoController.listar)
router.get("/cadastrar", AtendimentoController.cadastrarView)
router.post("/cadastrar", AtendimentoController.cadastrar)
router.get("/atualizar", AtendimentoController.atualizarView)
router.post("/atualizar", AtendimentoController.atualizar)
router.post("/excluir", AtendimentoController.excluir)


module.exports = router
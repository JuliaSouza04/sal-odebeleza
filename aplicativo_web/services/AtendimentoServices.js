const Atendimento = require("../mvc/models/AtendimentoModel");
const AtendimentoSchema = require("../schemas/AtendimentoSchemas")

class AtendimentoServices {

    #atendimentoSchema

    constructor(){
        this.#atendimentoSchema = AtendimentoSchema;
    }

    async buscarAtendimento(id){
        const dado = await this.#atendimentoSchema.findOne({
            where: {id: id}
        });

        if(!dado){
            return null
        }

        const atendimento = new Atendimento(
            dado.nomeCliente,
            dado.telefone,
            dado.horario,
            dado.data,
            dado.dataNascimento,
            dado.tipoServico,
            dado.profissao,
        )
        
        atendimento.id = dado.id

        return atendimento
    }

    async deletarAtendimento(id){
        const atendimento =  await this.#atendimentoSchema.findOne({
            where: {id: id}
        });

        const afferctedRows = await atendimento.destroy()

        return afferctedRows;
    }



    async buscarTodosAtendimentos(){

        const atendimentos = []
        const dado = await this.#atendimentoSchema.findAll();

        for(const atendimento of dado){

            const a = new Atendimento(
                atendimento.nomeCliente,
                atendimento.telefone,
                atendimento.horario,
                atendimento.data,
                atendimento.dataNascimento,
                atendimento.tipoServico,
                atendimento.profissional,
            ) 

            a.id = atendimento.id

            atendimentos.push(a)
    
        }
         return atendimentos
    }

   

    async cadastrarAtendimento(nomeCliente,telefone, horario, data, dataNascimento, tipoServico, profissional){

        const atendimento = Atendimento(nomeCliente,telefone, horario, data, dataNascimento, tipoServico, profissional)

        const a = await this.#atendimentoSchema.create({

            nomeCliente: atendimento.nomeCliente,
            telefone: atendimento.telefone,
            horario: atendimento.horario,
            data: atendimento.data ,
            dataNascimento: atendimento.dataNascimento,
            tipoServico: atendimento.tipoServico, 
            profissional: atendimento.profissional 
        }
        )

        return a;
        
    }

    async atualizarAtendimento(id,nomeCliente,telefone, horario, data, dataNascimento, tipoServico, profissional){

        let rows=0;
        

        const atendimento = await this.buscarAtendimento(id)

        if(atendimento){

            const model = new Atendimento(
                nomeCliente || atendimento.nomeCliente,
                telefone || atendimento.telefone,
                horario || atendimento.horario,
                data || atendimento.data ,
                dataNascimento || atendimento.dataNascimento,
                tipoServico || atendimento.tipoServico, 
                profissional || atendimento.profissional 
            )

            const afferctedRows = await this.#atendimentoSchema.update({
                nomeCliente: model.nomeCliente,
                telefone: model.telefone,
                horario: model.horario,
                data: model.data ,
                dataNascimento:model.dataNascimento,
                tipoServico:model.tipoServico, 
                profissional:model.profissional 
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

module.exports = AtendimentoServices
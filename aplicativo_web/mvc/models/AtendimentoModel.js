class Atendimento{
    #id
    #nomeCliente
    #telefone
    #horario
    #data
    #dataNascimento
    #tipoServico
    #profissional

    constructor(nomeCliente,telefone, horario, data, dataNascimento, tipoServico, profissional){
        this.#nomeCliente = nomeCliente
        this.#telefone = telefone
        this.#horario = horario
        this.#data = data
        this.#dataNascimento = dataNascimento
        this.#tipoServico = tipoServico
        this.#profissional = profissional
    }
    get id(){
        return this.#id
    }
    get nomeCliente(){
        return this.#nomeCliente
    }
    get telefone(){
        return this.#telefone
    }
    get horario(){
        return this.#horario
    }
    get data(){
        return this.#data
    }

    get dataNascimento(){
        return this.#dataNascimento
    }

    get tipoServico(){
        return this.#tipoServico
    }
    get profissional(){
        return this.#profissional
    }


    set id(valor){
        this.#id = valor
    }
    set nomeCliente(valor){
        this.#nomeCliente = valor
    }

    set telefone(valor){
        this.#telefone = valor
    }

    set horario(valor){
        this.#horario = valor
    }

    set data(valor){
        this.#data = valor
    }

    set dataNascimento(valor){
        this.#dataNascimento = valor
    }

    set tipoServico(valor){
        this.#tipoServico = valor
    }

    set profissional(valor){
        this.#profissional = valor
    }
}


module.exports = Atendimento
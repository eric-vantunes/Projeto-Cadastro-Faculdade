class Cliente {
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    salva(cliente){
        if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
            this.apaga(cliente.codigo)

        }
        this.clientes.push(cliente) //adiciona um novo elemento ao array
        alert('Cliente salvo com sucesso!')
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
    }

    edita(cliente) {
        document.getElementById('codigo').value = cliente.codigo
        document.getElementById('codigo').setAttribute('disabled','disabled')
        document.getElementById('nome').value = cliente.nome
        document.getElementById('cep').value = cliente.cep
        document.getElementById('nascimento').value = cliente.nascimento
        document.getElementById('endereco').value = cliente.endereco 
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('email').value= cliente.email
        document.getElementById('rg').value = cliente.rg
        document.getElementById('uf').value = cliente.uf
        document.getElementById('telefone').value = cliente.telefone
        document.getElementById('celular').value = cliente.celular
        document.getElementById('cpf_cnpj').value = cliente.cpf_cnpj
        document.getElementById('nome_fantasia').value = cliente.nome_fantasia
        document.getElementById('observacoes').value = cliente.observacoes
        
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1)
        localStorage.setItem('tbClientes', JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    lista(){
        const listagem = this.clientes.map((cliente) => (
            `<tr>
                <td>${cliente.codigo}</td>    
                <td>${cliente.nome}</td>
                <td>${cliente.cep}</td> 
                <td>${cliente.nascimento}</>      
                <td>${cliente.endereco}</td>
                <td>${cliente.bairro}</td>    
                <td>${cliente.cidade}</td>
                <td>${cliente.email}</td>
                <td>${cliente.rg}</td>
                <td>${cliente.uf}</td>
                <td>${cliente.telefone}</td>
                <td>${cliente.celular}</td>
                <td>${cliente.cpf_cnpj}</td>
                <td>${cliente.nome_fantasia}</td>
                <td>${cliente.observacoes}</td>
                <td>
        <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
        🗑️Apagar </button>
        <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
        🗒️Editar </button>
                </td>
             </tr>
            `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption>Relação de Clientes</caption>
        <thead>
            <th>Código</th>      
            <th>Nome</th>
            <th>CEP</th>
            <th>Nascimento</th>         
            <th>Endereço</th>
            <th>Bairro</th>      
            <th>Cidade</th>
            <th>Email</th>
            <th>Rg</th>
            <th>UF</th>
            <th>Telefone</th>
            <th>Celular</th>
            <th>CPF/CNPJ</th>
            <th>Nome fantasia</th>
            <th>Observações</th> 
            <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>
        </table>    
        `)
    }
    atualiza(){
        document.getElementById('listagem').innerHTML = cliente.lista()
    }
}
//instanciamos um novo objeto
const cliente = new Cliente()
//tratamos o botão salvar
document.getElementById('salvar').onclick = function(){
    const registro = {
        codigo: document.getElementById('codigo').value,
        nome: document.getElementById('nome').value,
        cep: document.getElementById('cep').value,
        nascimento: document.getElementById('nascimento').value,
        endereco:document.getElementById('endereco').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        email: document.getElementById('email').value,
        rg: document.getElementById('rg').value,
        uf: document.getElementById('uf').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        cpf_cnpj: document.getElementById('cpf_cnpj').value,
        nome_fantasia: document.getElementById('nome_fantasia').value,
        observacoes: document.getElementById('observacoes').value
    }
    cliente.salva(registro)

}
//tratamos a listagem
window.onload = function() {
    cliente.atualiza()
} 
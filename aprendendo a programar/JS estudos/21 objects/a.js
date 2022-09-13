//construtor do objeto
function pessoa(nm, ap, tlf){
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;
    
    this.nome_completo = function(){
        return this.nome + " " + this.apelido
    }
}

let cliente = new pessoa('joao','macedo',99545545);

console.log(cliente.apelido);
console.log(cliente.nome_completo());

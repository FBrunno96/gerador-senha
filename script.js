function gerarSenha() {
    let quantidade = document.getElementById("quantidade")
    let caracteres = 
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#_-*$%&+=/"
    let tamanhoSenha = document.getElementById("tamanhoSenha").value -1
    let senhaGerada = ""
    for (let i = 0; i <= tamanhoSenha; i++) {
        let random = Math.floor(Math.random() * caracteres.length)
        senhaGerada += caracteres.substring(random, random + 1)
    }
    quantidade.value = senhaGerada
}

function copiarSenha() {
    quantidade.select()
    document.execCommand("copy")
}
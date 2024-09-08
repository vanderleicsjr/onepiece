
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Escolha um dos personagens da tripulação do chapéu de palha</p>"
        return
    }
    
    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    
    // para cada dado dentro da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            resultados += `
         <div class="item-resultado">
             <h3>
                <a href=${dado.link2} target="_blank">${dado.titulo}</a>
             </h3>
                    <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Clique aqui e saiba mais</a>
        </div>
    `;
    }
               
 }
    if (!resultados){
        resultados = "<p>Escolha um dos personagens da tripulação do chapéu de palha</p>"
    }
    section.innerHTML = resultados  
}



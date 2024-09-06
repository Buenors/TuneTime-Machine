function pesquisar(){

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById
("campo-pesquisa").value // Camel Case
if (!campoPesquisa){
  section.innerHTML = '<p class="item-resultado">Busca vazia</p>'
  return
}

campoPesquisa = campoPesquisa.toLowerCase()
console.log(dados)
let resultados = "";
let titulo = "";
let tags = "";

for (let dado of dados) {
  titulo = dado.titulo.toLowerCase()
  tags = dado.tags.toLowerCase()

  if(dado.titulo.includes(campoPesquisa) || dado.tags.includes(campoPesquisa) || dado.albums.some(album => album.includes(campoPesquisa))){
  resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}                    
      
</h2>
<p class="descricao-meta">${dado.descricao}</p>
      <p class="descricao-meta">
       
      <ul>
          ${dado.albums.slice(0).map(album => `<li><strong>${album}</strong></li>`).join('')}
          </ul>
        </ul>
      </p>
      <a href="${dado.link}" target="_blank">Saiba mais</a>
            <a href=${dado.spotify} target="_blank" class="logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1982px-Spotify_icon.svg.png" alt="Logo Spotify" width="25" height="25">

</a>
    </div>
  `;}
 
}

if (!resultados){
resultados = '<p class="item-resultado">Nada foi encontrado</p>'
}

section.innerHTML = resultados
}
function addMovie() {
  const movieInformation = document.getElementById("movie-information");

  const h3 = document.createElement("h3");
  h3.innerText = "Catalogo de filmes";

  const ul = document.createElement("ul");

  const li = document.createElement("li");
  li.innerText = "Nome do Filme:";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "nomeDoFilme";

  li.appendChild(nameInput);
  ul.appendChild(li);
  ul.appendChild(document.createElement("br"));

  const classificacaoLi = document.createElement("li");
  classificacaoLi.innerText = "Classificação Etária:";

  const classificacaoInput = document.createElement("input");
  classificacaoInput.type = "number";
  classificacaoInput.name = "classificacao";

  classificacaoLi.appendChild(classificacaoInput);
  ul.appendChild(classificacaoLi);
  ul.appendChild(document.createElement("br"));

  const generoLi = document.createElement("li");
  generoLi.innerText = "Gênero:";

  const generoInput = document.createElement("input");
  generoInput.type = "text";
  generoInput.name = "genero";

  generoLi.appendChild(generoInput);
  ul.appendChild(generoLi);
  ul.appendChild(document.createElement("br"));

  const direcaoLi = document.createElement("li");
  direcaoLi.innerText = "Direção:";

  const direcaoInput = document.createElement("input");
  direcaoInput.type = "text";

  direcaoLi.appendChild(direcaoInput);
  ul.appendChild(direcaoLi);
  ul.appendChild(document.createElement("br"));
  movieInformation.append(h3, ul);
}

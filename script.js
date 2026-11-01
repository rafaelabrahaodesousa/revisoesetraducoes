/* =========================================================
   1. SAUDAÇÃO DINÂMICA PELO HORÁRIO (AULA 2)
   ========================================================= */
const hora = new Date().getHours();
let saudacao = "Olá";

if (hora < 12) {
  saudacao = "Bom dia";
} else if (hora < 18) {
  saudacao = "Boa tarde";
} else {
  saudacao = "Boa noite";
}

const elSaudacao = document.querySelector("#saudacao");
if (elSaudacao) {
  elSaudacao.textContent = saudacao;
}

/* =========================================================
   2. ARRAY DE PROJETOS E FILTRO DINÂMICO (AULA 2)
   ========================================================= */
const projetos = [
  {
    titulo: "PIBID / CAPES - UFU",
    categoria: "Supervisão",
    descricao: "Supervisão de alunos do curso de Letras da UFU no Programa Institucional de Bolsas de Iniciação à Docência (Línguas Estrangeiras)."
  },
  {
    titulo: "Revisão Textual & ABNT",
    categoria: "Revisão",
    descricao: "Mais de 3.000 trabalhos revisados (dissertações, teses, livros) conforme ABNT, APA e Vancouver, além de artigos para a Editora IFMG."
  },
  {
    titulo: "Correção de Redação",
    categoria: "Avaliação",
    descricao: "Corretor de redações na Plataforma Imaginie e nas provas discursivas de Língua Portuguesa dos Processos Seletivos da UFU."
  },
  {
    titulo: "Gestão de Mídias Sociais",
    categoria: "Mídias",
    descricao: "Planejamento de conteúdo e gestão de redes sociais para a EEPSJ, empresas e profissionais liberais no Facebook e Instagram."
  }
];

function mostrarProjetos(filtro) {
  const cardsContainer = document.querySelector("#cards");
  if (!cardsContainer) return;
  
  cardsContainer.innerHTML = "";

  for (const projeto of projetos) {
    if (filtro === "Todos" || projeto.categoria === filtro) {
      cardsContainer.innerHTML += `
        <article class="card">
          <span class="categoria">${projeto.categoria}</span>
          <h3>${projeto.titulo}</h3>
          <p>${projeto.descricao}</p>
        </article>
      `;
    }
  }
}

// Evento de clique nos botões de filtro
const botoesFiltro = document.querySelectorAll(".btn-filtro");
botoesFiltro.forEach(botao => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach(b => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    mostrarProjetos(botao.dataset.filtro);
  });
});

// Renderização inicial
mostrarProjetos("Todos");

/* =========================================================
   3. TEMA CLARO E ESCURO COM LOCALSTORAGE (AULA 2)
   ========================================================= */
const btnTema = document.querySelector("#btn-tema");

// Recupera o tema salvo na gavetinha do navegador
if (localStorage.getItem("tema") === "claro") {
  document.body.classList.add("claro");
  if (btnTema) btnTema.textContent = "🌙 Modo Escuro";
} else {
  if (btnTema) btnTema.textContent = "☀️ Modo Claro";
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("claro");

    if (document.body.classList.contains("claro")) {
      localStorage.setItem("tema", "claro");
      btnTema.textContent = "🌙 Modo Escuro";
    } else {
      localStorage.setItem("tema", "escuro");
      btnTema.textContent = "☀️ Modo Claro";
    }
  });
}

/* =========================================================
   4. MISSÃO 1: BOTÃO "VOLTAR AO TOPO"
   ========================================================= */
const btnTopo = document.querySelector("#btn-topo");

// Exibe o botão ao rolar a página para baixo
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Ação de rolagem suave ao topo
if (btnTopo) {
  btnTopo.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}
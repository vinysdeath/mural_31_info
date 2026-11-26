/* ARQUIVO: js/dados.js
   QUEM NÃO PROGRAMA SÓ EDITA ESTE ARQUIVO. Aqui ficam todos os textos, nomes e caminhos de fotos.
   O desenho da página está em js/app.js (equipe de Desenvolvimento). */

/* ==========================================================================
   COMO ESTE SITE FUNCIONA (leia isto primeiro!)
   --------------------------------------------------------------------------
   1) DADOS  → listas e objetos (TURMA, LINHA_DO_TEMPO, PROJETOS, ALUNOS,
               HOMENAGENS). É aqui que o conteúdo mora. Quem não programa
               só mexe nesta parte.
   2) FUNÇÕES render...() → leem os dados e montam o HTML na tela.
   3) ROTA → olha o endereço (#aluno-exemplo) e decide qual tela mostrar.
   Resultado: 1 aluno novo = copiar 1 bloco de dados. O resto é automático.
   ========================================================================== */

/* ---------- 1. DADOS ---------- */

// SEÇÃO 1: Apresentação da turma. Deixe foto: "" para usar imagem provisória
// ou escreva o caminho, ex.: "imagens/turma/oficial.jpg"
const TURMA = {
  nome: "Turma 31",
  curso: "Técnico em Informática Integrado ao Ensino Médio",
  ano: "2026",
  lema: "Três anos, um código..",
  mensagem: "Sem texto moggado: a 31 Info operou na aura máxima e não deu chance pra concorrência. Ganhamos tudo — quem discorda só queria estar na nossa turma. Agradecimentos provavelmente sinceros ao IFFar pela estrutura que sustentou a resenha.",
  foto: ""
};

// SEÇÃO 2: Linha do tempo. Um item por ano; cada ano tem uma lista de marcos.
const LINHA_DO_TEMPO = [
  { ano: "1º ano", titulo: "Chegamos e não sabíamos nem onde era o banheiro. A merenda também foi um choque, bom demais.", marcos: ["Primeiro dia no IFFar", "Primeiros contatos com a área de TI", "Gincana de integração"] },
  { ano: "2º ano", titulo: "Aqui o negócio ficou sério, disseram que era o ano mais difícil para o curso de informática, então a gente gelou.", marcos: ["Primeiros sites e trabalhos até então sem IA por que ela estava em ascensão.", "Fizemos o trote com o primeiro ano (destruímos)", "Começaram a rotina de Accs, esportes, oficinas e etc. Aqui a sensação de pertencimento começava a se itensificar.", "No final percebemos que o difícil era o terceirão mesmo, provavelmente."] },
  { ano: "3º ano", titulo: "The Last Dance.", marcos: ["Projetos e Viagens de ACC.", "Este Memorial Digital", "Escapada magistral do exame", "Busca incessante para completar as horas que a gente tirou de uns cursos malucos.", " E finalmente: Formatura 🎉", "E óbvio, no final percebemos que difícil mesmo é nós, a gurizada difícil de lidar. Ninguém para."] }
];

// SEÇÃO 3: Galeria de projetos. img: "" gera uma imagem provisória.
const PROJETOS = [
  { titulo: "Nome do Projeto 1", ano: "2º ano", texto: "Descreva em 2 linhas o que o sistema faz e quem desenvolveu.", tags: ["HTML", "CSS", "JS"], img: "" },
  { titulo: "Nome do Projeto 2", ano: "3º ano", texto: "Feira de ciências, aplicativo, jogo… conte o desafio e a solução.", tags: ["Banco de dados", "PHP"], img: "" }
];

// SEÇÃO 4: Alunos. Cada aluno é UM objeto { ... } separado por vírgula.
const ALUNOS = [
  /* {
     >>>>>>>>>> MOLDE: copie este bloco inteiro para cada novo aluno <<<<<<<<<< 
    id: "aluno-exemplo",              // endereço da página. Só letras minúsculas, números e hífen. Único!
    nome: "Aluno Exemplo da Silva",   // nome completo
    apelido: "Exemplo",               // como a turma o chama
    cor: "#cd191e",                   // cor de destaque DESTE aluno (personalização!)
    frase: "Quem compila junto, permanece junto.",  // frase curta que aparece no card
    fotos: ["", "", "", "", ""],      // as 5 fotos enviadas. Ex.: "imagens/aluno-exemplo/foto1.jpg". A 1ª também é o rosto do perfil.
    legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
    texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fim do molde <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
  }, */
  /* BERNARDO MACH DE LIMA */
    { 
      id: "bernardo-mach",
      nome: "Bernardo Mach de Lima",
      apelido: "Bernardo",
      cor: "#0f62fd",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", "img/bernardo-mach/placeholder.png"],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
    /* EDUARDA DA SILVA SCHONWALD */
    { 
      id: "eduarda-schonwald",
      nome: "Eduarda da Silva Schonwald",
      apelido: "Eduarda",
      cor: "#fde90f",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
    /* EDUARDO DE QUADROS */
    { 
      id: "eduardo-quadros",
      nome: "Eduardo de Quadros",
      apelido: "Quadros",
      cor: "#3d98ff",
      frase: "É os guri.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },  
    /* EMANUELLY DA ROSA DOS SANTOS */
    { 
      id: "emanuelly-santos",
      nome: "Emanuelly da Rosa dos Santos",
      apelido: "Emanuelly",
      cor: "#e34c88",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* GABRIEL PEREIRA HAMERSKI */
    { 
      id: "gabriel-hamerski",
      nome: "Gabriel Pereira Hamerski",
      apelido: "Hamerski",
      cor: "#2d79db",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* GUSTAVO BORGES RIBEIRO */
    { 
      id: "gustavo-borges",
      nome: "Gustavo Borges Ribeiro",
      apelido: "Borges",
      cor: "#cd1313",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* GUSTAVO GAMARRA FAGUNDES */
    { 
      id: "gustavo-gamarra",
      nome: "Gustavo Gamarra Fagundes",
      apelido: "Gamarra",
      cor: "#f59f1dff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* HEITOR STRECK ORTIZ */
    { 
      id: "heitor-streck",
      nome: "Heitor Streck Ortiz",
      apelido: "Mas o Heitor...(geralmente era mesmo)",
      cor: "#FFC222",
      frase: "Take More Chances, Dance More Dances.",
      fotos: ["img/heitor-streck/Kick.jpeg", "img/heitor-streck/R3.jpeg", "img/heitor-streck/ufsm.jpeg", "img/heitor-streck/vo.jpeg", "img/heitor-streck/arte.jpeg"],
      legendas: ["Foto de perfil", "Gincana do 3º ano", "UFSM com os crias", "Vovó", "arte, ou algo assim."],  // 1 legenda por foto
      texto: `Foi massa esses três anos, deu para aprender a dançar e escrever bagulhetes, valeu falou bacanas
       Instagram: @heitorstreck.
  

   
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "heitor.65065@aluno.iffar.edu.br" },
      { rotulo: "GitHub", link: "https://github.com/HeitoroPato" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/Eunãotenholinkedin." }
    ]
    },
    /* ISABELLE MARQUES DOS SANTOS */
    { 
      id: "isabelle-marques",
      nome: "Isabelle Marques dos Santos",
      apelido: "Isabelle",
      cor: "#dd955bff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* JOSÉ MURIEL FAGUNDES BOEIRA */
    { 
      id: "jose-muriel",
      nome: "José Muriel Fagundes Boeira",
      apelido: "Muriel",
      cor: "#e7510c",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* JÚLIA DA SILVA ANTUNES */
    { 
      id: "julia-antunes",
      nome: "Júlia da Silva Antunes",
      apelido: "Ritinha",
      cor: "#edae2e",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* KAUÃ PINTO MEDEIROS */
    { 
      id: "kaua-pinto",
      nome: "Kauã Pinto Medeiros",
      apelido: "Pinto",
      cor: "#c93636ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* KAUAN RAMOS FIGUEIRA */
    { 
      id: "kauan-ramos",
      nome: "Kauan Ramos Figueira",
      apelido: "Kauazão",
      cor: "#b80e0eff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* LAURA DA ROSA MOREIRA */
    { 
      id: "laura-moreira",
      nome: "Laura da Rosa Moreira",
      apelido: "Laura",
      cor: "#9c3de9ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* LUÍS FELIPE GRAICZIK DE MELO */
    { 
      id: "luis-felipe",
      nome: "Luís Felipe Graiczik de Melo",
      apelido: "Polaco",
      cor: "#3d88e9ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* LUÍS FERNANDO PEREIRA FLORES */
    { 
      id: "luis-fernando",
      nome: "Luís Fernando Pereira Flores",
      apelido: "Luisão",
      cor: "#126bdfff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* PIETRO ESCOBAR DA SILVA */
    { 
      id: "pietro-escobar",
      nome: "Pietro Escobar da Silva",
      apelido: "Pietro",
      cor: "#12df12ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* Luisão */
    { 
      id: "pietro-escobar",
      nome: "Pietro Escobar da Silva",
      apelido: "Luisão",
      cor: "#12df12ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* RAFAEL DE MATTOS CARVALHO */
    { 
      id: "rafael-mattos",
      nome: "Rafael de Mattos Carvalho",
      apelido: "Rafão",
      cor: "#6308b9",
      frase: "Trauma pa caralho, e nada do meu cabelo ficar branco.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* RILARY RIBEIRO LUCERO */
    { 
      id: "rilary-lucero",
      nome: "Rilary Ribeiro Lucero",
      apelido: "Rilary",
      cor: "#4d86eeff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* VINÍCIUS AGUIAR DE BARROS */
    { 
      id: "vinicius-aguiar",
      nome: "Vinícius Aguiar de Barros",
      apelido: "Aguiar",
      cor: "#4c4c58",
      frase: "Memento mori.",
      fotos: ["", "", "", "", "img/vinicius-aguiar/mc1_5306.JPG"],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Caso ocorra uma investigação por parte de qualquer órgão federal ou entidade semelhante, esclareço que não tenho qualquer envolvimento com este grupo ou com as pessoas que dele fazem parte; 
      
      Não sei como vim parar aqui — provavelmente fui adicionado por terceiros — e não apoio nenhuma das ações praticadas pelos membros deste grupo.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:vinchains@proton.me" },
      { rotulo: "GitHub", link: "https://github.com/vinysdeath" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/vinícius-aguiar-3ba1a0426" }
    ]
    },
    /* VITOR EDUARDO AQUINO BALHEFO */
    { 
      id: "vitor-eduardo",
      nome: "Vitor Eduardo Aquino Balhefo",
      apelido: "Vitinho",
      cor: "#14ad59ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
    /* VITÓRIA CARVALHO BONATO */
    { 
      id: "vitoria-bonato",
      nome: "Vitória Carvalho Bonato",
      apelido: "Vi",
      cor: "#f1a0d9ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    },
        /* YASMIN MARTINS BALEFO */
    { 
      id: "yasmin-balefo",
      nome: "Yasmin Martins Balefo",
      apelido: "Yas",
      cor: "#cc3549ff",
      frase: "Frase de exemplo.",
      fotos: ["", "", "", "", ""],
      legendas: ["Foto de perfil", "Gincana do 1º ano", "Feira de ciências", "Viagem de estudo", "Formatura"],  // 1 legenda por foto
      texto: `Aqui entra o texto livre enviado pelo aluno. Pode ser uma mensagem de despedida, uma memória favorita, um agradecimento.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "GitHub", link: "https://github.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
    }
];

// SEÇÃO 5: Homenagens
const HOMENAGENS = [
  {
    para: "Professores",
    icone: "👩‍🏫",
    texto: "Obrigado por cada puxão de orelha, cada aula, correção, recuperação seguida de recuperação com mais uma prova substítutiva, e principalmente pelo carinho em guiar-nos pelos mares do ensino. Se hoje chegamos aqui, não poderia ter havido tal façanha senão por intermédio de vocês, docentes... Nossos agradecimentos singelos a todos os profissionais do ensino."
  },
  {
    para: "Servidores",
    icone: "🧑‍🔧",
    texto: " Agradecemos piamente pelo cuidado diário que mantém o IFFar funcionando, pelos horários de esportes organizados que geraram boas conversas, como também pela merenda que dipensa apresentações. Nossos agradecimentos verdadeiros à estrutura invisível e visível que atua para a manteneção sob ambos os pés desse campus."
  },
  {
    para: "Famílias",
    icone: "👨‍👩‍👧",
    texto: "Obrigado pelo intrínseco apoio estrutural e emocional que nos trouxe até aqui, neste final de uma importante etapa de nossas vidas. Que se as crenças superiores, superstições, e correntes variadas permitirem-nos, possamos assim retribuir todo o esforço durante esses nossos primeiros anos de existência acadêmica. Obrigado pai, obrigado mãe, tios(as), avós e a toda e qualquer configuração familiar que compunha a vida de cada um de nós, alunos."
  }
];

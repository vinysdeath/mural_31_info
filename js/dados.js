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
  mensagem: "A concorrência é ruim pra caralho! A 31 Informática farmou tanta aura que se consolidou como um estado legítimo na América do Sul - um governo aristocrata formado com a participação ilustre da organização dos Cardiais - quem discorda com certeza não tava lá, até porque quem nos conhece sabe: somos os melhores.",
  foto: ""
};

// SEÇÃO 2: Linha do tempo. Um item por ano; cada ano tem uma lista de marcos.
const LINHA_DO_TEMPO = [
  { ano: "1º ano", titulo: "Chegamos e não sabíamos nem onde era o banheiro. A merenda também foi um choque, bom demais.", marcos: ["Primeiro dia no IFFar", "Primeiros contatos com a área de TI", "Gincana de integração"] },
  { ano: "2º ano", titulo: "Aqui o negócio ficou sério, disseram que era o ano mais difícil para o curso de informática, então a gente gelou.", marcos: ["Primeiros sites e trabalhos até então sem IA por que ela estava em ascensão.", "Fizemos o trote com o primeiro ano (destruímos)", "Começaram a rotina de ACC's, esportes, oficinas e etc. Aqui a sensação de pertencimento começava a se intensificar.", "No final percebemos que o difícil era o terceirão mesmo, provavelmente."] },
  { ano: "3º ano", titulo: "The Last Dance.", marcos: ["Projetos e Viagens de ACC.", "Este Memorial Digital", "Escapada magistral do exame", "Busca incessante para completar as horas que a gente tirou de uns cursos malucos.", " E finalmente: Formatura 🎉", "E óbvio, no final percebemos que difícil mesmo é nós, a gurizada difícil de lidar. Ninguém para."] }
];

// SEÇÃO 3: Galeria de projetos. img: "" gera uma imagem provisória.
const PROJETOS = [
  { titulo: "Lanches coletivos.", ano: "2º ano", texto: "Qualquer desculpa virava lanche coletivo, basicamente. E temos orgulho disso (embora na mesa só se via refrigerantes.)", tags: ["HTML", "CSS", "JS"], img: "" },
  { titulo: "Trotes de roupas", ano: "3º ano", texto: "Organizamos e participamos de diversos trotes de vestimentas ao longo dos meses.", tags: ["Banco de dados", "PHP"], img: "" }
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
     >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fim do molde <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< 
  }, */
  /* BERNARDO MACH DE LIMA */
  {
    id: "bernardo-mach",
    nome: "Bernardo Mach de Lima",
    apelido: "Bernardo",
    cor: "#7E8C54",
    frase: "absolute cineme.",
    fotos: ["img/bernardo-mach/bernardo.jpg", "", "", "", ""],
    legendas: ["Gato", "", "", "", ""],  // 1 legenda por foto
    texto: ``,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "machbernardo@gmail.com" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* EMANUELLY DA ROSA DOS SANTOS */
  {
    id: "emanuelly-santos",
    nome: "Emanuelly da Rosa dos Santos",
    apelido: "Emanuelly",
    cor: "#B29CDB",
    frase: "A maior de todas as perdas é a perda de tempo.",
    fotos: ["img/emanuelly-santos/perfil.png", "img/emanuelly-santos/cpps.png", "img/emanuelly-santos/monitora.png", "img/emanuelly-santos/mulheresnati.png", "img/emanuelly-santos/parti.png"],
    legendas: ["Foto de formatura", "Estudando no CPPS", "Monitora do CPPS", "Mulheres Na T.I", "Coisas que fiz"],  // 1 legenda por foto
    texto: `Minha trajetória no IFFar começa pelo CPPS como aluna. Quando decidi estudar aqui, me esforcei muito para conseguir uma vaga e, quando vi meu nome na primeira chamada, fiquei extremamente feliz.

Após entrar na instituição, logo no primeiro ano consegui me adaptar ao ritmo de estudos do IFFar. Fiz amizades e tive acesso a diversos projetos de ensino, como Mulheres na TI, Cine Campus e algumas oficinas da SEMTEC. Também participei do CPPS, dessa vez como monitora. Durante esse período, enfrentamos uma greve, o que fez com que nosso ano letivo se estendesse até janeiro de 2024.

No segundo ano, conheci pessoas novas fora do ambiente escolar e participei de projetos como o Cine Campus, o LabMaker e outras oficinas da SEMTEC. No meio do ano, acabei encerrando algumas amizades e decidi não levar essas pessoas comigo para o futuro. Apesar disso, reconheço que conhecê-las foi muito importante naquele momento, pois contribuíram para tornar mais fácil minha adaptação durante o primeiro ano na instituição.

Já no terceiro ano, minha participação em projetos e atividades do campus foi menor. Não procurei me envolver em muitos projetos diferentes, além das oficinas da SEMTEC, das quais participei ao longo dos três anos. Também não tive muito interesse em participar das festividades do campus, como a festa junina, ou em manter muitas pessoas no meu convívio. Mesmo assim, tive a oportunidade de aprender um pouco sobre Libras.

Ao chegar ao fim dessa etapa, percebo que o IFFar representou muito mais do que apenas um lugar onde estudei durante três anos. Foi onde vivi experiências que contribuíram para meu crescimento, conheci pessoas que fizeram parte de diferentes momentos da minha vida e descobri possibilidades que antes nem imaginava para o meu futuro.

Ainda não sei exatamente o que me espera daqui para frente, mas hoje tenho uma perspectiva muito diferente daquela que tinha quando entrei aqui. Levo comigo os aprendizados, as lembranças, as mudanças e, principalmente, a descoberta de uma área na qual gostaria de construir minha carreira. Talvez nem tudo tenha acontecido como eu imaginava, mas acredito que cada fase teve sua importância na construção de quem sou hoje.

Não deixe que lhe façam pensar que você não é capaz de fazer algo porque essa pessoa não consegue fazer.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:emanuelly.99018@aluno.iffar.edu.br" },
      { rotulo: "Instagram", link: "https://instagram.com/preguica_em" },
      { rotulo: "GitHub", link: "https://github.com/emanuelly99018-bot" }
    ]
  },
  /* GABRIEL PEREIRA HAMERSKI */
  {
    id: "gabriel-hamerski",
    nome: "Gabriel Pereira Hamerski",
    apelido: "Hamerski",
    cor: "#0000FF",
    frase: "quando dá da, quando não da não dá!",
    fotos: ["img/gabriel-hamerski/gabriel.JPG", "img/gabriel-hamerski/gang67.JPG", "", "", ""],
    legendas: ["Formatura com ela", "É os guri", "", "", ""],  // 1 legenda por foto
    texto: `A aura é tanta que o Wi-Fi conecta sozinho.

Entre Tralalero Tralala, 67 e muito brainrot, a sanidade já ficou para trás. Neymar é inspiração, o Ohio é destino e a aura é patrimônio. Enquanto uns buscam sucesso, outros buscam o hexa. O pai tá on, o juízo tá off e o entretenimento nunca acaba. `,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:intyunty321@gmail.com" },
      { rotulo: "Instagram", link: "https://instagram.com/gabriel_hamerski" }
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* GUSTAVO GAMARRA FAGUNDES */
  {
    id: "gustavo-gamarra",
    nome: "Gustavo Gamarra Fagundes",
    apelido: "Gamarra",
    cor: "#151E3F",
    frase: "Quem decide seu futuro é você.",
    fotos: ["img/gustavo-gamarra/gamarra1.jpg", "img/gustavo-gamarra/gamarra2.jpg", "img/gustavo-gamarra/gamarra3.jpg", "img/gustavo-gamarra/gamarra4.jpg", "gustavo-gamarra/gamarra5.jpg"],
    legendas: ["Foto de perfil", "Trote personagens (Finn e Jake (hora de aventura))", "Feira de ciências", "Eu", "Joguin maneiro"],  // 1 legenda por foto
    texto: `Mesmo que esteja tudo dando errado, siga de cabeça erguida, não aceite a derrota se você pode conquistar algo maior.

Quando pensar em desistir, pense em o que está se perdendo, no que você sacrificou e o que pode mudar se não desistir.

Sempre que disserem que você não consegue, ou que te chamam de inútil, faça o seu melhor, e mostre a todos que estão errados.

Não deixe emoções, sentimentos pessoais e nem pessoas de fora estragarem quem você é, foque em você e faça com que a cada dificuldade seja mais uma forma de melhorar.

Se a vida fosse um jogo de vídeo game, você desistiria no primeiro Boss? Ou iria descobrir uma forma de ganhar dele?.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "gustavo.14050@aluno.iffar.edu.br" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },

  /* HEITOR STRECK ORTIZ */
  {
    id: "heitor-streck",
    nome: "Heitor Streck Ortiz",
    apelido: "Mas o Heitor...(geralmente era culpa minha mesmo, mas nem sempre. Toda sala tem seus problemas, e eu não posso ser todos :).",
    cor: "#FFC222",
    frase: "Take More Chances, Dance More Dances.",

    fotos: [
      "img/heitor-streck/Kick.jpeg",
      "img/heitor-streck/R3.jpeg",
      "img/heitor-streck/ufsm.jpeg",
      "img/heitor-streck/vo.jpeg",
      "img/heitor-streck/heitor1.jpeg"
    ],

    legendas: [
      "Foto de perfil",
      "Gincana do 3º ano",
      "UFSM com os crias",
      "Vovó",
      "Esporte do coração."
    ],

    texto: `Foi massa esses três anos, deu para aprender a dançar e escrever bagulhetes, valeu falou bacanas.
Instagram: @heitorstreck.`,

    contatos: [
      { rotulo: "E-mail", link: "mailto:heitor.65065@aluno.iffar.edu.br" },
      { rotulo: "Instagram", link: "https://www.instagram.com/heitorstreck/" },
      { rotulo: "Linkedin (Nem tenho, mas se tu entrar vai abrir o gta 5...)", link: "https://playgta5.com/" }

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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* JOSÉ MURIEL FAGUNDES BOEIRA */
  {
    id: "jose-muriel",
    nome: "José Muriel Fagundes Boeira",
    apelido: "Muriel",
    cor: "#6c519d",
    frase: "O real não está na saída nem na chegada, ele se dispõe para a gente é no meio da travessia.",
    fotos: ["img/jose/jose1.jpg", "img/jose/jose2.jpg", "img/jose/jose3.jpg", "img/jose/jose4.jpg", "img/jose/jose5.jpg"],
    legendas: ["Foto de perfil", "Cardiais", "Os d vdd", "Só os auras", "Dream team"],  // 1 legenda por foto
    texto: `Agradeço a todos que fizeram parte dessa etapa, espero que apesar dos rumos diferentes, nunca esqueçamos do que vivemos aqui. As pessoas vão, mas as memórias ficam.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:aluno@exemplo.com" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* LAURA DA ROSA MOREIRA */
  {
    id: "laura-moreira",
    nome: "Laura da Rosa Moreira",
    apelido: "Laura",
    cor: "#880808",
    frase: "“Não gosto de nada que é raso, de água pela canela. Ou mergulho até encontrar o reino submerso de Atlântida, ou fico à margem, espiando de fora.” — Martha Medeiros",
    fotos: ["img/laura-moreira/lauraperfil.JPG", "img/laura-moreira/laura1.jpg", "img/laura-moreira/laura2.jpg", "img/laura-moreira/laura3.jpg", "img/laura-moreira/laura5.JPG"],
    legendas: ["Foto de perfil", "Ensaio de Fotos.", "Gincana terceirão.", "Foto com o melhor professor.", "Formatura"],  // 1 legenda por foto
    texto: `Se existe algo que aprendi ao longo da minha vida, é que nada se constrói verdadeiramente sozinho. Somos feitos dos lugares de onde viemos, das mãos que nos seguraram, dos abraços que nos acolheram, das pessoas que cruzaram nosso caminho e dos momentos que, mesmo sem perceber, se tornaram parte de nós.

À minha família, agradeço por ser minha raiz, por fazer parte de quem sou e por me ensinar, à sua maneira, o significado de pertencimento. Por ser parte da minha história, dos meus primeiros passos e de tantos capítulos que ainda estão por vir.

Aos meus amigos, agradeço pelos encontros, pelas risadas, pelas conversas, pelo cuidado e por tornarem tantos dias comuns em lembranças extraordinárias. Obrigada por dividirem a vida comigo, por estarem presentes nas minhas conquistas e por fazerem parte de tantas versões de mim.

À fotografia, agradeço por me ensinar a olhar com mais atenção. Por me permitir guardar instantes, eternizar pessoas, registrar sentimentos e encontrar beleza nas coisas mais simples. Por me fazer perceber que, às vezes, a felicidade está em momentos que passam despercebidos, e que algumas coisas merecem ser lembradas para sempre.

E a mim, agradeço por continuar. Por tudo que vivi, por tudo que senti, por cada recomeço, pelas escolhas, pelos sonhos que ainda carrego e pela coragem de seguir construindo meu caminho, mesmo sem saber exatamente onde ele vai me levar.

A cada pessoa, lugar, encontro e memória que atravessou minha vida, deixo minha gratidão. Porque, no fim, são essas coisas que tornam a caminhada tão especial.

Sou feita de muitas histórias, e em cada uma delas existe um pouquinho de alguém que tornou a minha vida mais bonita..

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "lauradrmoreira@gmail.com" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* LUÍS FELIPE GRAICZIK DE MELO */
  {
    id: "luis-felipe",
    nome: "Luís Felipe Graiczik de Melo",
    apelido: "Polaco",
    cor: "#111184",
    frase: "DALE GRÊMIO, É OS CARDIAIS.",
    fotos: ["img/luis-felipe/felipe1.JPG", "img/luis-felipe/felipe2.jpg", "img/luis-felipe/felipe3.jpg", "img/luis-felipe/felipe4.jpg", "img/luis-felipe/felipe5.jpg"],
    legendas: ["Foto de perfil", "Mept", "Feira de ciências", "Fotos para a Formatura", "JEIF"],  // 1 legenda por foto
    texto: `Aqui é campeão da Mept, primeiro título de São Borja pela a Mostra de Foguetes, É OS CARDIAIS, 253 metros.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "luis.00019@aluno.iffar.edu.br" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* LUÍS FERNANDO PEREIRA FLORES */
  {
    id: "luis-fernando",
    nome: "Luís Fernando Pereira Flores",
    apelido: "Luisão",
    cor: "#006400",
    frase: "",
    fotos: ["img/luis-fernando/luisao1.jpg", "img/luis-fernando/luisao2.jpg", "img/luis-fernando/luisao3.jpg", "img/luis-fernando/luisao4.jpg", "img/luis-fernando/luisao5.JPG"],
    legendas: ["Foto de perfil", "Gincana do 3º ano", "Trote terceirão", "Trote times", "Formatura"],  // 1 legenda por foto
    texto: `Sem mensagem.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "luisfernandopflores@gmail.com" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* RAFAEL DE MATTOS CARVALHO */
  {
    id: "rafael-mattos",
    nome: "Rafael de Mattos Carvalho",
    apelido: "Rafão",
    cor: "#483D8B",
    frase: "trauma pra krl e nada do cabelo ficar branco",
    fotos: ["img/rafael-mattos/perfil.jpg", "img/rafael-mattos/aita.jpg", "img/rafael-mattos/souza.png", "img/rafael-mattos/vitinho.jpg", "img/rafael-mattos/lord.png"],
    legendas: ["Foto de perfil", "Eu e o Aita", "Gincana pakaralho", "Eh os guri", "......"],  // 1 legenda por foto
    texto: `Chegou a hora de baixar a cortina,

apagar a luz e fechar o caderno,

deixar o dia correr sua sina

e descansar num silêncio fraterno.

ㅤ

Fica o que foi dito, o que se pensou,

o rastro leve de cada ideia no ar.

O relógio avisa que o turno acabou,

mas amanhã tem mais verso pra rimar.

ㅤ

Vai na paz, aproveita o teu descanso,

que a vida lá fora espera por ti.

Fecha a janela, segue teu balanço,

e quando voltar, eu tô logo aqui`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:demattosr76@gmail.com" },
      { rotulo: "Instagram", link: "https://instagram.com/rafael.sz24" }
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* VINÍCIUS AGUIAR DE BARROS */
  {
    id: "vinicius-aguiar",
    nome: "Vinícius Aguiar de Barros",
    apelido: "Aguiar",
    cor: "#4c4c58",
    frase: "Corvos não esquecem seu rosto e guardam rancor.",
    fotos: ["img/vinicius-aguiar/1.jpg", "img/vinicius-aguiar/2.jpg", "img/vinicius-aguiar/3.jpg", "img/vinicius-aguiar/4.jpg", "img/vinicius-aguiar/mc1_5306.JPG"],
    legendas: ["Foto de perfil", "Café!", "Eu e minhas referências", "QUE CAPIVARADA HOME", "Essas são pessoas que mudaram minha vida."],  // 1 legenda por foto
    texto: `Eu sou café, arte e poesia 

    Sou tudo aquilo que deixaram para trás

    De uma maneira honestamente fria.

    'cê me perdoa por ser tão cabeçudo?

    Eu não sou um garoto de ouro,

    Sou latão de vagabundo.

    ㅤ

    Seus dedos frios esquentaram meu coração no inverno,

    Sua arte agarrou meu coração no verão

    E os seus abraços definitivamente encostaram na minha alma vagabunda.

    Aqueles abraços foderam a minha vida,

    Mas foi a melhor foda que eu já tive.

    "Minh'anima", um poema por Vinícius. Arte para quem precisa sentir, vindo de quem precisa escrever.
    `,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "mailto:vinchains@proton.me" },
      { rotulo: "Instagram", link: "https://instagram.com/vinysdeath" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
      { rotulo: "LinkedIn", link: "https://www.linkedin.com/in/seu-usuario" }
    ]
  },
  /* VITÓRIA CARVALHO BONATO */
  {
    id: "vitoria-bonato",
    nome: "Vitória Carvalho Bonato",
    apelido: "Vi",
    cor: "#69239E",
    frase: "Beyond matter, the spirit endures.",
    fotos: ["img/vitoria-bonato/vi5.jpeg", "img/vitoria-bonato/vi1.jpeg", "img/vitoria-bonato/vi2.jpeg", "img/vitoria-bonato/vi3.jpeg", "img/vitoria-bonato/vi4.jpeg"],
    legendas: ["Foto de perfil", "Esse é o IFF.", "Formatura", "As migaloka", "lilita"],  // 1 legenda por foto
    texto: `Os três anos no IFFAR passaram muito rápido,  aprendi muito durante esses anos, agradeço aos professores por toda essa dedicação ao longo desta jornada!.

Para criar um novo parágrafo, deixe uma linha em branco, como esta. O site separa os parágrafos sozinho.`,
    contatos: [                       // rótulo = texto do botão; link = para onde ele leva
      { rotulo: "E-mail", link: "vitoria.73030@aluno.iffar.edu.br" },
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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
      { rotulo: "Instagram", link: "https://instagram.com/seu-usuario" },
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

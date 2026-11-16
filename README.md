# Memorial Digital · Turma 31 · IFFar

Site estático (HTML + CSS + JavaScript puro, sem backend) do Memorial da Turma 31 — Técnico em Informática Integrado ao Ensino Médio.

## Estrutura do projeto

```
memorial-turma-31/
├── index.html            → esqueleto da página (seções e menu)
├── css/style.css         → cores, tipografia e layout (identidade IFFar)
├── js/dados.js           → TODO O CONTEÚDO: turma, linha do tempo, projetos, alunos, homenagens
├── js/app.js             → lê o dados.js e desenha a página
├── imagens/
│   ├── turma/            → foto oficial da turma
│   ├── projetos/         → capturas de tela dos projetos
│   └── aluno-exemplo/    → modelo: uma pasta por aluno (foto1.jpg … foto5.jpg)
└── .nojekyll             → avisa o GitHub Pages para publicar os arquivos como estão
```

## Quem mexe em quê

| Equipe | Arquivos |
|---|---|
| Redação & Revisão | `js/dados.js` (campos `texto`, `mensagem`, `marcos`, `homenagens`) |
| Curadoria de Mídia | pasta `imagens/` e os caminhos em `fotos` no `js/dados.js` |
| UX/UI & Design | `css/style.css` (começa pelas cores no topo do arquivo) |
| Desenvolvimento | `index.html`, `js/app.js`, publicação |

## Como adicionar um aluno (5 passos)

1. Crie a pasta `imagens/nome-do-aluno/` e salve as 5 fotos como `foto1.jpg` … `foto5.jpg`.
2. Abra `js/dados.js`, ache o bloco marcado `MOLDE` dentro de `ALUNOS`.
3. Copie o bloco inteiro `{ ... }`, cole logo abaixo e **coloque uma vírgula** entre os dois alunos.
4. Troque `id` (único, minúsculo, sem acento, com hífen), `nome`, `apelido`, `cor`, `frase`, `fotos`, `legendas`, `texto` e `contatos`.
5. Salve, abra o `index.html` e confira o card e a página do aluno.

Exemplo de `fotos`:
```js
fotos: ["imagens/maria-souza/foto1.jpg", "imagens/maria-souza/foto2.jpg", "imagens/maria-souza/foto3.jpg", "imagens/maria-souza/foto4.jpg", "imagens/maria-souza/foto5.jpg"],
```

## Regras para as imagens

- Nomes **minúsculos, sem espaço e sem acento** (o GitHub diferencia `Foto1.JPG` de `foto1.jpg`).
- Reduza antes de enviar: máximo de **1200 px de largura** e cerca de **200 KB** por foto (ferramentas: Squoosh, TinyPNG).
- Foto vazia (`""`) mostra uma imagem provisória colorida: dá para publicar mesmo com fotos faltando.

## Testar no computador

Dê dois cliques no `index.html`. Se preferir, use a extensão **Live Server** do VS Code.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub (ex.: `memorial-turma-31`).
2. Envie **o conteúdo desta pasta** (o `index.html` precisa ficar na raiz do repositório).
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)` e salve.
4. Em 1 a 2 minutos o site abre em `https://SEU-USUARIO.github.io/memorial-turma-31/`.

## Paleta (identidade IFFar)

| Uso | Cor |
|---|---|
| Verde institucional | `#2f9e41` |
| Verde para textos e links (mais escuro, melhor contraste) | `#1f7a30` |
| Vermelho institucional | `#cd191e` |

São aproximações das cores dos Institutos Federais. Para usar a **logomarca oficial**, baixe-a no site do IFFar, siga o manual de identidade visual e salve em `imagens/`. Cada aluno pode escolher a própria `cor`: prefira tons médios ou escuros, que continuam legíveis no tema claro e no escuro.

## Modo Guia

O botão **📘 Modo Guia** no topo da página mostra etiquetas com a equipe responsável e a variável de cada bloco. É a ferramenta para estudar e apresentar o site. Antes da entrega final, pode ser mantido ou removido (CSS seção 8, `index.html` e `setGuia` no `app.js`).

## Checklist da rubrica

- [ ] Todas as 5 seções preenchidas (Apresentação, Linha do Tempo, Projetos, Perfis, Homenagens)
- [ ] Todos os alunos com 5 fotos e texto
- [ ] Links de contato funcionando
- [ ] Testado no celular
- [ ] Documento de divisão de papéis anexado ao repositório

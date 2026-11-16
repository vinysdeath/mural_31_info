/* ARQUIVO: js/app.js
   Lê os dados de js/dados.js e desenha a página. Só mexa aqui se for da equipe de Desenvolvimento.
   Este arquivo precisa ser carregado DEPOIS de dados.js (veja index.html). */

/* ---------- 2. FUNÇÕES AUXILIARES ---------- */
const $ = s => document.querySelector(s);

// Etiqueta amarela do Modo Guia (só aparece quando o modo está ligado)
const g = t => `<span class="guia-tag">${t}</span>`;

// Se o caminho da foto estiver vazio, desenha uma imagem provisória com o rótulo
function foto(src, rotulo, cor = "#1f7a30") {
  if (src) return src;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="${cor}"/><text x="200" y="158" font-family="sans-serif" font-size="22" fill="#fff" text-anchor="middle">${rotulo}</text></svg>`;
  return "data:image/svg+xml," + encodeURIComponent(svg);
}

/* ---------- 3. FUNÇÕES DE DESENHO (uma por seção) ---------- */
function renderHome() {
  // Seção 1
  $("#apresentacao").innerHTML = `
    <div>
      <p class="eyebrow">${TURMA.curso} · Formandos ${TURMA.ano}</p>
      <h1>Memorial Digital da ${TURMA.nome}</h1>
      <p><i>${TURMA.lema}</i></p><p>${TURMA.mensagem}</p>
      ${g("🎨 Design · ✍️ Redação · TURMA")}
    </div>
    <img src="${foto(TURMA.foto, "Foto oficial da turma")}" alt="Foto oficial da ${TURMA.nome}">`;

  // Seção 2
  $("#linha-do-tempo").innerHTML = `<h2>Linha do Tempo</h2> ${g("✍️ Redação · 📷 Curadoria · LINHA_DO_TEMPO")}<div class="tl" style="margin-top:1rem">` +
    LINHA_DO_TEMPO.map(a => `<div class="tl-ano"><p class="eyebrow">${a.ano}</p><h3>${a.titulo}</h3><ul>${a.marcos.map(m => `<li>${m}</li>`).join("")}</ul></div>`).join("") + `</div>`;

  // Seção 3
  $("#projetos").innerHTML = `<h2>Galeria de Projetos</h2> ${g("💻 Dev · 📷 Curadoria · PROJETOS")}<div class="grid" style="margin-top:1rem">` +
    PROJETOS.map((p, i) => `<article class="card" style="padding:0;overflow:hidden">
      <img src="${foto(p.img, p.titulo, ["#1f7a30", "#cd191e", "#14532d"][i % 3])}" alt="${p.titulo}" style="aspect-ratio:4/3;object-fit:cover;width:100%">
      <div style="padding:1rem"><p class="eyebrow">${p.ano}</p><h3>${p.titulo}</h3><p>${p.texto}</p>${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div></article>`).join("") + `</div>`;

  // Seção 4: um card por aluno, gerado automaticamente a partir de ALUNOS
  $("#perfis").innerHTML = `<h2>Perfis &amp; Depoimentos</h2> ${g("✍️ Redação · 📷 Curadoria · ALUNOS (cada card é um objeto)")}<div class="grid" style="margin-top:1rem">` +
    ALUNOS.map(a => `<a class="card perfil" href="#${a.id}" style="--ac:${a.cor}">
      <img src="${foto(a.fotos[0], "Foto 1", a.cor)}" alt="Foto de ${a.nome}">
      <div><h3>${a.nome}</h3><p>“${a.frase}”</p></div></a>`).join("") +
    `<div class="card vazio">➕ Próximo aluno:<br>copie o molde em ALUNOS</div></div>`;

  // Seção 5
  $("#homenagens").innerHTML = `<h2>Homenagens</h2> ${g("✍️ Redação · HOMENAGENS")}<div class="grid" style="margin-top:1rem">` +
    HOMENAGENS.map(h => `<div class="card"><div style="font-size:2rem">${h.icone}</div><h3>${h.para}</h3><p>${h.texto}</p></div>`).join("") + `</div>`;
}

// Página individual: tudo vem do objeto do aluno
function renderAluno(a) {
  const i = ALUNOS.indexOf(a), ant = ALUNOS[i - 1], prox = ALUNOS[i + 1];
  const el = $("#aluno");
  el.style.setProperty("--ac", a.cor); // a cor do aluno vira a cor de destaque da página
  el.innerHTML = `
    <a href="#perfis">← Voltar para a turma</a>
    <div class="a-top">
      <img class="avatar" src="${foto(a.fotos[0], "Foto 1", a.cor)}" alt="Foto de ${a.nome}">
      <div><p class="eyebrow">${TURMA.nome} · “${a.apelido}”</p><h1>${a.nome}</h1><p class="frase">“${a.frase}”</p>
      ${g("nome · apelido · frase · cor · fotos[0]")}</div>
    </div>
    <section class="sec texto"><h2>Mensagem de despedida</h2> ${g("✍️ Redação · texto")}<br>
      ${a.texto.split("\n\n").map(p => `<p>${p}</p>`).join("")}</section>
    <section class="sec"><h2>Minhas 5 fotos</h2> ${g("📷 Curadoria · fotos[0] … fotos[4] + legendas")}
      <div class="gal" style="margin-top:1rem">${[0, 1, 2, 3, 4].map(k => `<figure>
        <img src="${foto(a.fotos[k], "Foto " + (k + 1), a.cor)}" alt="${a.legendas[k] || "Foto " + (k + 1)}">
        <figcaption>${a.legendas[k] || ""}</figcaption></figure>`).join("")}</div></section>
    <section class="sec"><h2>Contatos</h2> ${g("contatos")}<p>${a.contatos.map(c => `<a class="chip" href="${c.link}" target="_blank" rel="noopener">${c.rotulo}</a>`).join("")}</p></section>
    <div class="pn"><span>${ant ? `<a href="#${ant.id}">← ${ant.apelido}</a>` : ""}</span><span>${prox ? `<a href="#${prox.id}">${prox.apelido} →</a>` : ""}</span></div>`;
}

/* ---------- 4. ROTA: qual tela mostrar? ---------- */
// O endereço termina em #algo. Se "algo" for o id de um aluno → página do aluno.
// Caso contrário → tela inicial, rolando até a seção (#perfis, #projetos...).
function rota() {
  const h = location.hash.slice(1);
  const a = ALUNOS.find(x => x.id === h);
  $("#home").hidden = !!a;
  $("#aluno").hidden = !a;
  if (a) { renderAluno(a); scrollTo(0, 0); }
  else if (h && document.getElementById(h)) document.getElementById(h).scrollIntoView();
  else scrollTo(0, 0);
}

/* ---------- 5. EXTRAS: Modo Guia e ampliar foto ---------- */
const btn = $("#btnGuia");
function setGuia(on) {
  document.body.classList.toggle("guia", on);
  btn.setAttribute("aria-pressed", on);
  try { localStorage.setItem("guia", on ? "1" : "0"); } catch (e) {}
}
btn.onclick = () => setGuia(!document.body.classList.contains("guia"));
let guiaSalvo = false;
try { guiaSalvo = localStorage.getItem("guia") === "1"; } catch (e) {}

// Clicar numa foto da galeria abre ela grande; clicar de novo fecha
document.addEventListener("click", e => {
  if (e.target.closest(".gal img")) { $("#lb img").src = e.target.src; $("#lb").showModal(); }
});
$("#lb").onclick = () => $("#lb").close();

/* ---------- 6. INÍCIO ---------- */
renderHome();
setGuia(guiaSalvo);
addEventListener("hashchange", rota);
rota();

//Ator
let xator = 100;
let yator = 366;
let altura = 30;
let largura = 30;
let colisao = false;
let pontos = 0;

function MostrarAtor() {
  image(ImagemDoAtor, xator, yator, altura, largura)
}

function MovimentarAtor() {
  if (keyIsDown(UP_ARROW)) {
    yator = yator - 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yator < 366)
      yator = yator + 3;
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimento, altura1, xator, yator, 15)
    if (colisao) {
      somDaColisao.play();
      colidiu();
      if (pontosMariorQueZero()) {
        pontos -= 1;
      }
    }
  }
}
function colidiu() {
  yator = 366;
}
function incluirPontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(pontos, 100, 27);
}

function marcarPonto() {
  if (yator < 15) {
    pontos += 1;
    somDoPonto.play();
    colidiu()
  }
}
function podeMover() {
  return yator < 366; re
}

function pontosMariorQueZero() {
  return pontos > 0
}



function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}
function draw() {
  background(ImagemDaEstrada);
  MostrarAtor();
  MostrarCarro();
  MovimentarAtor();
  MovimentarCarro();
  Voltacarro();
  verificaColisao();
  incluirPontos();
  marcarPonto();
}








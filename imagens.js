let ImagemDaEstrada;
let ImagemDoCarro1;
let ImagemDoCarro2;
let ImagemDoCarro3;
let ImagemDoAtor;

let somDaTrilha;
let somDoDano;
let somDoPonto;



function preload()
{
  ImagemDaEstrada = loadImage("Imagens/estrada.png")
  ImagemDoAtor = loadImage("Imagens/ator-1.png")
  ImagemDoCarro1 = loadImage("Imagens/carro-1.png")
  ImagemDoCarro2 = loadImage("Imagens/carro-2.png")
  ImagemDoCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros=[ImagemDoCarro1, ImagemDoCarro2, ImagemDoCarro3,ImagemDoCarro1, ImagemDoCarro2, ImagemDoCarro3]
  somDaTrilha = loadSound("sons/trilha.mp3")
  somDaColisao = loadSound("sons/colidiu.mp3")
  somDoPonto = loadSound("sons/pontos.wav")
}
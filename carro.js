let xCarros = [600, 600, 600, 600, 600, 600]
let yCarros = [40, 100, 150, 210, 270, 318]
let velocidade = [3.5, 3, 5, 4, 3.3, 2]
let comprimento = 50;
let altura1 = 40;




function MostrarCarro(){
  for (let i=0; i<imagemCarros.length; i++) {
  image(imagemCarros[i], xCarros[i], yCarros[i], comprimento, altura1);
  }
}
function MovimentarCarro()
{
  for (let i=0; i<imagemCarros.length; i++)
  {
  xCarros[i] -= velocidade[i]
}
}

function Voltacarro()
{
  for (let i=0; i<imagemCarros.length; i++){
  if( xCarros[i] < -50 )
    {
      xCarros[i] = 600
    }
  }
}
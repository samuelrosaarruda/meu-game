let personagem
let ganhou
let chao
let andarX = 0
let andarY = 0
const tamanho = 64
const velocidade = 64
let botao
let instrucao
let leitura
function setup() {
  createCanvas(576, 576);
  personagem = loadImage('girl.png')
  chao = loadImage('grass01.png')
  ganhou = loadImage('end_game.png')
  instrucao = loadImage('placa.png')
  leitura = loadImage('placa_ler.png')
}

function draw() {
  background(220);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      image(chao, tamanho * i, tamanho * j, tamanho, tamanho)

    }
  }

  image(personagem, andarX, andarY, tamanho, tamanho)
  image(instrucao, 300, 20, 40, 40)


  if (andarX === 256 && andarY === 0) {
    textSize(30)
    text('Use as setas para se mover', 100, 150)
    text('Ache o fim do jogo!', 160, 190)

  }

  if (andarX === 512 && andarY === 512) {
    textSize(35)
    text('G A N H O U !', 200, 150)
    image(ganhou, 160, 160, 256, 256)

    text('Muito obrigado por jogar!', 110, 445)

    botao = createButton('Reiniciar')
    botao.position(250, 470)
    botao.size(100)
    botao.mousePressed(reset)
    noLoop()
  }
}

function reset() {
  andarX = 0
  andarY = 0
  botao.remove()
  loop()
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW) && andarY < 512) {
    andarY += velocidade
  }

  if (keyIsDown(UP_ARROW) && andarY > 0) {
    andarY -= velocidade
  }

  if (keyIsDown(RIGHT_ARROW) && andarX < 512) {
    andarX += velocidade
  }

  if (keyIsDown(LEFT_ARROW) && andarX > 0) {
    andarX -= velocidade
  }
}
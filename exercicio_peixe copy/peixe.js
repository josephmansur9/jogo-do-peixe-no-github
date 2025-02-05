var config ={
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;
var peixinho2;


function preload() { 
    this.load.image('mar', 'assets/bg_azul-escuro.png');

    this.load.image('logo', 'assets/logo-inteli_branco.png');

    this.load.image('peixe', 'assets/peixes/baiacu.png');

    this.load.image('animal', 'assets/peixes/baiacu_lado.png');
}

function create() { 
    this.add.image(400, 300, 'mar');

    this.add.image(400, 525, 'logo').setScale(0.5);

    peixinho= this.add.image(400, 500, 'peixe');
    
    peixinho.setFlip(true, false);

    peixinho2=this.add.image(400,500, 'animal');

    peixinho2.setFlip(true, false);
}

function update() { 
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    peixinho2.x = this.input.y;
    peixinho2.y = this.input.x;
}

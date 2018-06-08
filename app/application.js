const PIXI = require('pixi.js');

const app = new PIXI.Application({
    width: 256,
    height: 256,
});
document.body.appendChild(app.view);

PIXI.loader
    .add([
        'images/baum.png',
        'images/cave.png',
        'images/forest.png',
        'images/indoors.png',
        'images/indoors_2.png',
        'images/objects.png',
        'images/player.png',
        'images/wizard.png',
    ])
    .load(setup);

function setup() {
    const wizard = new PIXI.Sprite(
        PIXI.loader.resources['images/wizard.png'].texture
    );
    app.stage.addChild(wizard);
}

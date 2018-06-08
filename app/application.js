const PIXI = require('pixi.js');

const Application = PIXI.Application,
      loader = PIXI.loader,
      resources = PIXI.loader.resources,
      Sprite = PIXI.Sprite;

const app = new Application({
    width: 256,
    height: 256,
});
document.body.appendChild(app.view);

loader
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
    const wizard = new Sprite(
        resources['images/wizard.png'].texture
    );

    wizard.position.set(96, 96);
    wizard.scale.set(2, 2);

    app.stage.addChild(wizard);
}

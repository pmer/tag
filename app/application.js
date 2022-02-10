const PIXI = require('pixi.js');

const app = new PIXI.Application({
    width: 256,
    height: 256,
});
document.body.appendChild(app.view);

app.loader
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

function setup(loader, resources) {
    const wizard = new PIXI.Sprite(
        resources['images/wizard.png'].texture
    );

    wizard.position.set(96, 96);
    wizard.scale.set(2, 2);

    app.stage.addChild(wizard);

    app.ticker.add(() => {
        wizard.rotation += 0.01;
    });
}

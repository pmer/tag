const PIXI = require('pixi.js');

const app = new PIXI.Application({
    width: 256,
    height: 256,
});
document.body.appendChild(app.view);

const urls = {
    baum: new URL('../assets/images/baum.png', import.meta.url).toString(),
    cave: new URL('../assets/images/cave.png', import.meta.url).toString(),
    forest: new URL('../assets/images/forest.png', import.meta.url).toString(),
    indoors: new URL('../assets/images/indoors.png', import.meta.url).toString(),
    indoors2: new URL('../assets/images/indoors_2.png', import.meta.url).toString(),
    objects: new URL('../assets/images/objects.png', import.meta.url).toString(),
    player: new URL('../assets/images/player.png', import.meta.url).toString(),
    wizard: new URL('../assets/images/wizard.png', import.meta.url).toString(),
};

app.loader
    .add([
        urls.baum,
        urls.cave,
        urls.forest,
        urls.indoors,
        urls.indoors2,
        urls.objects,
        urls.player,
        urls.wizard,
    ])
    .load(setup);

function setup(loader, resources) {
    const wizard = new PIXI.Sprite(
        resources[urls.wizard].texture
    );

    wizard.position.set(96, 96);
    wizard.scale.set(2, 2);

    app.stage.addChild(wizard);

    app.ticker.add(() => {
        wizard.rotation += 0.01;
    });
}

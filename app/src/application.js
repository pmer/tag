const PIXI = require('pixi.js');

const app = new PIXI.Application({
    width: 256,
    height: 256,
});
document.body.appendChild(app.view);

const urls = {
    baum: require('../assets/images/baum.png'),
    cave: require('../assets/images/cave.png'),
    forest: require('../assets/images/forest.png'),
    indoors: require('../assets/images/indoors.png'),
    indoors2: require('../assets/images/indoors_2.png'),
    objects: require('../assets/images/objects.png'),
    player: require('../assets/images/player.png'),
    wizard: require('../assets/images/wizard.png'),
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

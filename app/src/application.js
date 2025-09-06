import { Application, Assets, Sprite } from "pixi.js";

const urls = {
  baum: new URL("../assets/images/baum.png", import.meta.url).href,
  cave: new URL("../assets/images/cave.png", import.meta.url).href,
  forest: new URL("../assets/images/forest.png", import.meta.url).href,
  indoors: new URL("../assets/images/indoors.png", import.meta.url).href,
  indoors2: new URL("../assets/images/indoors_2.png", import.meta.url).href,
  objects: new URL("../assets/images/objects.png", import.meta.url).href,
  player: new URL("../assets/images/player.png", import.meta.url).href,
  wizard: new URL("../assets/images/wizard.png", import.meta.url).href,
};

const app = new Application();
await app.init({
  width: 256,
  height: 256,
});
document.body.appendChild(app.canvas);

const textures = {
  wizard: await Assets.load(urls.wizard),
};

const wizard = Sprite.from(textures.wizard);

wizard.position.set(96, 96);
wizard.scale.set(2, 2);

app.stage.addChild(wizard);

app.ticker.add(() => {
  wizard.rotation += 0.01;
});

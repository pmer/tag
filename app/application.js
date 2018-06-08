const PIXI = require('pixi.js');

const type = PIXI.utils.isWebGLSupported() ? "WebGL" : "canvas";
PIXI.utils.sayHello(type);

const app = new PIXI.Application({width: 256, height: 256});
document.body.appendChild(app.view);

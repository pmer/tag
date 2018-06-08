module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'libraries.js': /^(?!app\/)/,
                'app.js': /^app\//
            }
        },
        stylesheets: {joinTo: 'app.css'}
    }
};

const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const fileTest = /^(view)\.php(\.ts)?$/;
const scriptTest = /\.ts$/;

function lookupFiles(directory, route = '') {
    const files = [];
    const fileList = fs.readdirSync(directory);
        
    fileList.forEach(file => {
        const name = path.join(route, file);
        const filePath = path.join(directory, file);

        if (fs.statSync(filePath).isDirectory()) {
            const subFiles = lookupFiles(filePath, name);
            files.push(...subFiles);
        }

        if (fileTest.test(file)) {
            const type = scriptTest.test(file) ? 'script' : 'view';
            
            files.push({
                route,
                type,
                path: './' + filePath
            });
        }
    })

    return files;
}

function lookupViews(directory) {
    const files = lookupFiles(directory);

    return files
            .filter(file => file.type === 'view')
            .map(file => {
                return new HtmlWebpackPlugin({
                    template: file.path,
                    filename: path.join('views', file.route, 'index.php'),
                    chunks: [file.route.replace(/\W+/g, '_')]
                })
            });
}

function lookupEntries(directory) {
    const files = lookupFiles(directory);

    return files
            .filter(file => file.type === 'script')
            .reduce((entries, file) => {
                const entry = file.route.replace(/\W+/g, '_');
                return { ...entries, [entry]: file.path }
            }, {});
}

module.exports = {
    lookupViews: function (directory) {
        return lookupViews(directory);
    },
    lookupEntries: function (directory) {
        return lookupEntries(directory);
    },
}
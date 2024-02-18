const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const fileTest = /^(view)\.php(\.ts)?$/
const scriptTest = /\.ts$/

function lookupFiles(directory, route = '') {
    const files = []
    const fileList = fs.readdirSync(directory)
        
    fileList.forEach(file => {
        const name = path.join(route, file)
        const filePath = path.join(directory, file)

        if (fs.statSync(filePath).isDirectory()) {
            const subFiles = lookupFiles(filePath, name)
            files.push(...subFiles)
        }

        if (fileTest.test(file)) {
            const type = scriptTest.test(file) ? 'script' : 'view'
            const path = `./${filePath}`
            
            files.push({ route, type, path })
        }
    })

    return files
}

function formatEntry(name) {
    const formatted = name.replace(/\W+/g, '_')
    return `${formatted}-view`
}

function discoverViews(directory) {
    const files = lookupFiles(directory)

    return files
            .filter(file => file.type === 'view')
            .map(file => {
                return new HtmlWebpackPlugin({
                    template: file.path,
                    filename: path.join('views', file.route, 'index.php'),
                    chunks: [formatEntry(file.route)]
                })
            })
}

function discoverEntries(directory) {
    const files = lookupFiles(directory)

    return files
            .filter(file => file.type === 'script')
            .reduce((entries, file) => {
                const entry = formatEntry(file.route)
                return { ...entries, [entry]: file.path }
            }, {})
}

module.exports = {
    discover: (dir, type) => {
        switch (type) {
            case 'view':
                return discoverViews(dir)
            case 'entry':
                return discoverEntries(dir)
            default:
                console.warn(`Unknown type: '${type}'.`)
        }
    }
}
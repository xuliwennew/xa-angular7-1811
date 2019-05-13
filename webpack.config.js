const path =require("path")


module.exports = {
    mode:"development",
    entry:{
        app:path.resolve(__dirname,"src/main.ts")
    },
    output: {
        filename:"[name].bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    resolve: {
        extensions: [".css",".js",".ts"]
    },
    module: {
        rules: [
            {test:/\.ts$/,loader:"ts-loader"}
        ]
    }
}

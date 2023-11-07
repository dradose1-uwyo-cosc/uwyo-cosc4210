//Danny Radosevich
//Adv Web App COSC4220, UWYO
//Recipe app

var path = require("path")
module.exports = 
{
    
    entry:"./src/index.js",
    output:
    {
        path:path.join(__dirname,"dist","assets"),
        filename:"bundle.js"
    },
    module:
    {
        rules:[{test:/\.js$/,exclude:/node_modules/,loader:"babel-loader",options:{presets:["@babel/preset-env","@babel/preset-react"]}}]
    }
};
module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-extend')(),
        require('postcss-css-variables')(),
        require('autoprefixer')()
    ]
};
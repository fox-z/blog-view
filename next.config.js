// const withLess = require('@zeit/next-less')
// const lessToJS = require('less-vars-to-js')

// 自定义less主题
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './assets/antd-custom.less'), 'utf8')
// )
const withCss = require('@zeit/next-css')

if(typeof require !== 'undefined'){
    require.extensions['.css']=file=>{}
}

module.exports = withCss({
  env: {
    customKey: 'product'
  }
})
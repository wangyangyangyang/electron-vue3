const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  configureWebpack:{
    externals:{
      'electron':'require("electron")',
    },
  },
  // 第三方插件配置
  pluginOptions:{
    electronBuilder:{
      nodeIntegration:true,
      // 设置应用主进程的入口
      mainProcessFile:'src/background.js',
      // 设置应用渲染进程的入口
      renderProcessFile:'src/main.js',
      customFileProtocol:'../',
      // 打包选项
      builderOptions:{
        // 解决的问题：在安装到电脑后，系统通知无法工作
        appId:"com.wyy.vue3",//软件id
        productName:'JSON工具',//打包后的名称
        // 热更新配置项
        publish:[
          {
            provider:'generic',
            url:'https:'
          }
        ] ,
        // Windows系统相关配置
        win:{
          // 应用图标路径 Windows 系统中icon需要256*256的ico图片格式
          icon:'./build/icons/icon.ico',
          target:{
            target:'nsis',
            // 支持64位的Windows系统
            arch:["x64"],
          },
        },
        nsis:{
          // 如果为false，想要给电脑所有用户安装必须使用管理员权限
          allowElevation:true,
          // 是否一键安装
          oneClick:false,
          // 允许修改安装目录
          allowToChangeInstallationDirectory:true,
          "guid":"com.wyy.vue3",
          "include":"./installer.nsh"
        }
      }
    }
  }
})

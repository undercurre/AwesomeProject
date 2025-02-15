# 安装 yarn

```
npm install yarn -g
```

# 清除旧脚手架

```
npm uninstall -g react-native-cli @react-native-community/cli
```

# 使用 nrm

```
npx nrm use taobao
```

## https://services.gradle.org/distributions/gradle-8.10.2-all.zip 下载失败

项目根目录/android/gradle/wrapper/gradle-wrapper.properties
修改成腾讯源

```
distributionUrl=https\://mirrors.cloud.tencent.com/gradle/gradle-8.10.2-all.zip
```

## ndk 和 cmake 缺失

Failed to install the app. Command failed with exit code 1: gradlew.bat app:installDebug -PreactNativeDevServerPort=8087 FAILURE: Build failed with an exception. _ What went wrong: A problem occurred configuring project ':app'. > [CXX1101] NDK at C:\Users\under\AppData\Local\Android\Sdk\ndk\26.1.10909125 did not have a source.properties file _ Try: > Run with --stacktrace option to get the stack trace. > Run with --info or --debug option to get more log output. > Run with --scan to get full insights. > Get more help at https://help.gradle.org. BUILD FAILED in 6s.

打开 Android studio 的 setting 的 sdk 的 sdk tools，下载 ndk 和 cmake (版本是在项目根目录/android/build.gradle 中的 ndkVersion)

## 调试打印控制台

1. 手机端应用调试器：上下摇动设备就可以打开， 在发布（release）版本中开发者菜单将无法使用。Perf Monitor 可以用来监控性能

   Reload

   刷新页面，修改 JS 文件时，刷新功能才起作用，如新增文件或修改原生代码都需重新编译应用才会生效。

   Change Bundle Location

   改变打包后的 URL 地址

   Show Element Inspector

   是否显示元素检查器，查看到当前选中元素的位置、样式、层级关系、盒子模型信息等等，方便我们快速定位问题。

   Disable Fast Refresh

   禁止快速刷新

   Show Perf Monitor

   是否显示监控窗口，实时展示内存占用、UI 和 JS 的 FPS 等信息，帮助我们调试性能问题。

   Settings

   性能调试设置

   Enable Sampling Profiler

   是否开启采样分析器

   Debug

   开启远程调试，可通过 Chrome Developer Tools 工具调试程序。选中后将打开网址为 http://localhost:8081/debugger-ui/

2. 在 PC 运行端按下 J 就可以打开 Chrome DevTools

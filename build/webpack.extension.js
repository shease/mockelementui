const path = require('path');  // 文件路径插件
const CopyWebpackPlugin = require('copy-webpack-plugin');  // 拷贝文件插件
const demoConfig = require('./webpack.demo');
const webpack = require('webpack');
const ProcessBarPlugin = require('progress-bar-webpack-plugin'); //编译进度条
const VueLoaderPlugin = require('vue-loader/bin/plugin');  // vue-loader




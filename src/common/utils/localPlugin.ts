import path from 'path';
import fs from 'fs';
import { PluginHandler } from '@/core';
import { PLUGIN_INSTALL_DIR as baseDir } from '@/common/constans/main';
import API from '@/main/common/api';

const configPath = path.join(baseDir, './rubick-local-plugin.json');
const checkDevPlugin = plugin => {
    const { name: pluginName, isDev } = plugin;
    if (isDev && !fs.existsSync(path.resolve(baseDir, 'node_modules', pluginName))) {
      throw new Error(`错误: 插件【${pluginName}】所在路径为空`);
    }
}

let registry;
let pluginInstance;
(async () => {
  try {
    const res = await API.dbGet({
      data: {
        id: 'rubick-localhost-config',
      },
    });

    registry = res && res.data.register;
    pluginInstance = new PluginHandler({
      baseDir,
      registry,
    });
  } catch (e) {
    pluginInstance = new PluginHandler({
      baseDir,
      registry,
    });
  }
})();

global.LOCAL_PLUGINS = {
  PLUGINS: [],
  async downloadPlugin(plugin) {
    checkDevPlugin(plugin)
    const { name: pluginName, isDev } = plugin;

    await pluginInstance.install([pluginName], { isDev });

    if (isDev) {
      // 获取 dev 插件信息
      const pluginPath = path.resolve(baseDir, 'node_modules', pluginName);
      const pluginInfo = JSON.parse(fs.readFileSync(path.join(pluginPath, './package.json'), 'utf8'));
      plugin = { ...plugin, ...pluginInfo };
    }
    global.LOCAL_PLUGINS.addPlugin(plugin);
    return global.LOCAL_PLUGINS.PLUGINS;
  },
  refreshPlugin(plugin) {
    const { name: pluginName } = plugin;
    // 获取 dev 插件信息
    const pluginPath = path.resolve(baseDir, 'node_modules', pluginName);
    const packageContent = fs.readFileSync(path.join(pluginPath, './package.json'), 'utf8');
    const pluginInfo = JSON.parse(packageContent);

    plugin = { ...plugin, ...pluginInfo };
    // 刷新
    let currentPlugins = global.LOCAL_PLUGINS.getLocalPlugins();

    currentPlugins = currentPlugins.map((p) => {
      if (p.name === pluginName) {
        return plugin;
      }
      return p;
    });

    // 存入
    global.LOCAL_PLUGINS.PLUGINS = currentPlugins;
    fs.writeFileSync(configPath, JSON.stringify(currentPlugins));
    return global.LOCAL_PLUGINS.PLUGINS;
  },
  getLocalPlugins() {
    try {
      if (!global.LOCAL_PLUGINS.PLUGINS.length) {
        global.LOCAL_PLUGINS.PLUGINS = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      }
      return global.LOCAL_PLUGINS.PLUGINS;
    } catch (e) {
      global.LOCAL_PLUGINS.PLUGINS = [];
      return global.LOCAL_PLUGINS.PLUGINS;
    }
  },
  addPlugin(plugin) {
    let has = false;
    const currentPlugins = global.LOCAL_PLUGINS.getLocalPlugins();
    currentPlugins.some((p) => {
      has = p.name === plugin.name;
      return has;
    });
    if (!has) {
      currentPlugins.unshift(plugin);
      global.LOCAL_PLUGINS.PLUGINS = currentPlugins;
      fs.writeFileSync(configPath, JSON.stringify(currentPlugins));
    }
  },
  updatePlugin(plugin) {
    global.LOCAL_PLUGINS.PLUGINS = global.LOCAL_PLUGINS.PLUGINS.map((origin) => {
      if (origin.name === plugin.name) {
        return plugin;
      }
      return origin;
    });
    fs.writeFileSync(configPath, JSON.stringify(global.LOCAL_PLUGINS.PLUGINS));
  },
  async deletePlugin(plugin) {
    await pluginInstance.uninstall([plugin.name], { isDev: plugin.isDev });
    global.LOCAL_PLUGINS.PLUGINS = global.LOCAL_PLUGINS.PLUGINS.filter((p) => plugin.name !== p.name);
    fs.writeFileSync(configPath, JSON.stringify(global.LOCAL_PLUGINS.PLUGINS));
    return global.LOCAL_PLUGINS.PLUGINS;
  },
};

import { PLUGIN_INSTALL_ROOT_DIR } from '@/renderer/constants/renderer';
import path from 'path';
import { toRaw } from 'vue';
import indexPathUtil from '@/renderer/utils/indexPathUtil';

export default function pluginClickEvent({ plugin, fe, cmd, ext, openPlugin, option }) {
  const pluginPath = path.resolve(PLUGIN_INSTALL_ROOT_DIR, plugin.name);
  const pluginDist = {
    ...toRaw(plugin),
    indexPath: `file://${path.join(pluginPath, './', plugin.main || '')}`,
    cmd: cmd.label || cmd,
    feature: fe,
    ext,
  };
  // 模板文件
  if (!plugin.main) {
    pluginDist.tplPath = indexPathUtil.getTplIndex();
  }
  // 插件市场
  if (plugin.name === 'rubick-system-feature') {
    pluginDist.indexPath = indexPathUtil.getPluginIndexByEnv(plugin, null);
  }
  openPlugin(pluginDist, option);
}

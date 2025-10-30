import axios from 'axios';

let baseURL = 'https://rubick.jiahe.host/';
let access_token = '';

try {
  const dbdata = window.rubick.db.get('rubick-localhost-config');
  baseURL = dbdata.data.database;
  access_token = dbdata.data.access_token;
} catch (e) {
  // ignore
}

const instance = axios.create({
  timeout: 10000,
  baseURL: baseURL || 'https://rubick.jiahe.host/',
});

export default {
  async getAllPluginData() {
    let targetPath = 'plugins/all.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    console.log('all data', res);
    return res.data;
  },

  async getTotalPlugins() {
    let targetPath = 'plugins/total-plugins.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    console.log('total plugsin', res);
    return res.data;
  },

  async getFinderDetail() {
    let targetPath = 'plugins/finder.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },

  async getSystemDetail() {
    let targetPath = 'plugins/system.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },
  async getWorkerDetail() {
    let targetPath = 'plugins/worker.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },

  async getPluginDetail(url: string) {
    const res = await instance.get(url);
    return res.data;
  },

  async getSearchDetail() {
    let targetPath = 'plugins/search.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },
  async getDevDetail() {
    let targetPath = 'plugins/dev.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },
  async getImageDetail() {
    let targetPath = 'plugins/image.json';
    if (access_token) {
      targetPath = `${encodeURIComponent(targetPath)}?access_token=${access_token}&ref=master`;
    }
    const res = await instance.get(targetPath);
    return res.data;
  },
};

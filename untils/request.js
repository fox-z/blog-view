import axios from 'axios';
// post内容类型设置
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config;
}, error => {
  // 对请求错误做些什么
  console.log(error.toString(), 'error');
  return Promise.reject(error);
});

// 添加响应拦截器
// 会多次调用 建议不要用
axios.interceptors.response.use(res => {
  // 对响应数据做点什么
  return res;
}, error => {
  console.log(error, 'error')
  return Promise.reject(error);
});

// 默认请求
export default (config) => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url || '',
      method: config.method || 'get',
      headers: {
        Accept: '*/*',
        'X-Requested-With': 'XMLHttpRequest'
      },
      maxContentLength: config.maxContentLength || Infinity,
      timeout: config.timeout || 10000,
      data: config.data || {}, // post put delete 请求参数
      params: config.params || {}, // get请求参数
      onUploadProgress: config.onUploadProgress || (() => {}),
      onDownloadProgress: config.onDownloadProgress || (() => {}),
      responseType: config.responseType || 'json', // 默认的
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
};

const FetchGet = (config) => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url || '',
      method: 'get',
      headers: {
        Accept: '*/*',
        'X-Requested-With': 'XMLHttpRequest',
      },
      maxContentLength: config.maxContentLength || Infinity,
      timeout: config.timeout || 10000,
      params: config.data || {}, // get请求参数
      responseType: config.responseType || 'json', // 默认的
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

const FetchPost = (config) => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url || '',
      method: 'post',
      headers: {
        Accept: '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': config.contentType || 'application/json',
      },
      maxContentLength: config.maxContentLength || Infinity,
      timeout: config.timeout || 10000,
      data: config.data || {},
      params: config.params || {},
      responseType: config.responseType || 'json', // 默认的
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

const FetchPut = (config) => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url || '',
      method: 'put',
      headers: {
        Accept: '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': config.contentType || 'application/json;charset=UTF-8',
      },
      maxContentLength: config.maxContentLength || Infinity,
      timeout: config.timeout || 10000,
      data: config.data || {},
      responseType: config.responseType || 'json', // 默认的
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

const FetchDelete = config => {
  return new Promise((resolve, reject) => {
    axios({
      url: config.url || '',
      method: 'delete',
      headers: {
        Accept: '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': config.contentType || 'application/json;charset=UTF-8',
      },
      maxContentLength: config.maxContentLength || Infinity,
      timeout: config.timeout || 10000,
      data: config.data || {},
      responseType: config.responseType || 'json', // 默认的
    }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
};

export {
  FetchGet,
  FetchPost,
  FetchDelete,
  FetchPut
};

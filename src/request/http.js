import axios from 'axios';
// import QS from 'qs';
var baseUrl;
if (process.env.NODE_ENV == 'development') {    
  
  baseUrl = 'https://webapi.oxfordsky.org/';} 
  // baseUrl = '//192.168.1.24';} 
else if (process.env.NODE_ENV == 'debug') {    
  baseUrl = 'https://webapi.oxfordsky.org/';
} 
else if (process.env.NODE_ENV == 'production') {    
  baseUrl = 'https://webapi.oxfordsky.org/';
}

axios.defaults.baseURL= baseUrl + '/NjEdu/Webapi/'
// axios.defaults.baseURL= baseUrl;
axios.defaults.timeout = 10000;
axios.defaults.dataType='json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded',
axios.create({
  withCredentials: true,
 }) 
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    // 在发送请求之前做某件事
    if (config.method === 'post') {
      // config.data = QS.stringify(config.data);
    }
    return config;
  }, (error) => {
    console.log('错误的传参')
    return Promise.reject(error);
  })
  
  // 返回状态判断(添加响应拦截器)
  axios.interceptors.response.use((res) => {
  //   对响应数据做些事
    if (!res.data.success) {
      return Promise.resolve(res);
    }
    return res
  }, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
  })

  export function $get(url, params){    
    return new Promise((resolve, reject) =>{        
        axios.get(url, {            
            params: params        
        }).then(res => {
            resolve(res.data);
        }).catch(err =>{
            reject(err.data)        
    })    
});}

export function $post(url, params) {
    return new Promise((resolve, reject) => {
        //  axios.post(url, QS.stringify(params))
        params = JSON.stringify(params)
        // console.log(params)
         axios.post(url, params)
        .then(res => {
            resolve(res.data);
        })
        .catch(err =>{
            reject(err.data)
        })
    });
}
// 手机号验证
export function isPhoneNumber(tel) {
  var reg =/^0?1[3|4|5|6|7|8][0-9]\d{8}$/;
  return reg.test(tel);
}
    //提示框
export function showToast(text, type="warning"){
      this.$message({
          showClose: true,
          message: text,
          type: type
        });
    }

export let httpurl = baseUrl;
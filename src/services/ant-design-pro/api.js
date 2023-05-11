// @ts-ignore

/* eslint-disable */
import { request } from 'umi';


export async function currentUser(options) {
  return request('/wcapi/account/currentuser',{
    credentials: 'include',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function outLogin(options) {
  return request('/wcapi/login/outLogin', {
    method: 'POST',
    ...(options || {}),
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function login(body, options) {
  return request('/wcapi/login/login', {
    method: 'POST',
    credentials: 'include',
    data: body,
  });
}

export async function getAccounts(params){
  return request('/wcapi/account',{
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

//根据作品查找对应推荐单位
export async function getTjdwAccount(worksId){
  return request('/wcapi/account/tjdw/works/' + worksId,{
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function addAccount(params){
  return request('/wcapi/account', {
    method: 'POST',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updateAccount(params){
  return request('/wcapi/account', {
    method: 'PUT',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updateAccountPassword(id, password){
  return request('/wcapi/account/password/'+id, {
    method: 'PUT',
    params: {password},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function deleteAccount(id){
  return request('/wcapi/account/' + id, {
    method: 'DELETE',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getWorks(params){
  return request('/wcapi/works', {
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function addWorks(params){
  return request('/wcapi/works', {
    method: 'POST',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updateWorks(params){
  return request('/wcapi/works/'+params.id, {
    method: 'PUT',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function returnWorks(id){
  return request('/wcapi/works/return/' + id, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function patchWorks(params){
  return request('/wcapi/works', {
    method: 'PATCH',
    ...params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function printWorks(type, id){
  return request('/wcapi/works/print/' + type + '/' + id, {
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
    responseType : 'blob', // 必须注明返回二进制流
  })
}

export async function getBrand(params){
  return request('/wcapi/brand/', {
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function addBrand(params){
  return request('/wcapi/brand/', {
    method: 'POST',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updateBrand(params){
  return request('/wcapi/brand/' + params.id, {
    method: 'PUT',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function returnBrand(id){
  console.log('id = '+ id);
  return request('/wcapi/brand/return/' + id, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getOutstandingPeople(params){
  return request('/wcapi/people/', {
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function addOutstandingPeople(params){
  return request('/wcapi/people/', {
    method: 'POST',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updateOutstandingPeople(params){
  return request('/wcapi/people/' + params.id, {
    method: 'PUT',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function returnOutstandingPeople(id){
  return request('/wcapi/people/return/' + id, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getPopsciMgmt(params){
  return request('/wcapi/popsci/', {
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export async function addPopsciMgmt(params){
  return request('/wcapi/popsci/', {
    method: 'POST',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function updatePopsciMgmt(params){
  return request('/wcapi/popsci/' + params.id, {
    method: 'PUT',
    data: params,
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function returnPopsciMgmt(id){
  return request('/wcapi/popsci/return/' + id, {
    method: 'PUT',
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getAreas(){
  return request('/wcapi/common/areas',{
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getDict(){
  const dicts = await request('/wcapi/common/dict',{
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
  return dicts;
}

export async function saveDict(values){
  return request('/wcapi/common/dict', {
    method: 'POST',
    params: {
      ...values
    },
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getOrgTypes() {
  return request('/wcapi/common/orgtype', {
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function deleteTempFile(filePath){
  return request('/wcapi/noauth/deletetempfile', {
    method: 'POST',
    params: {
      filePath
    },
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  })
}

export async function getExportWorks(){
  return request('/wcapi/noauth/exportworksexcel',{
    responsetype: 'blob'
  });
}

export async function getStats(params){
  return request('/wcapi/stats', {
    params: {...params},
    headers: {
      Authorization: 'Basic ' + sessionStorage.getItem('auth')
    },
  });
}

export const API_UPLOADFILE = "/wcapi/noauth/uploadfile";
export const exportWorksApi = '/wcapi/noauth/exportworksexcel/'; //导出作品
export const exportBrandApi = '/wcapi/noauth/exportbrandexcel/'; //导出
export const exportPeopleApi = '/wcapi/noauth/exportpeopleexcel/'; //导出
export const exportMgmtApi = '/wcapi/noauth/exportmgmtexcel/'; //导出
export const printReccApi = '/wcapi/noauth/print/'; //打印申报表格
export const uploadReccFormApi = '/wcapi/noauth/upload_reccform/'; //上传申报表格

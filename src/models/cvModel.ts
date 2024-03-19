import axios from "axios";

async function getData(url: string) {
  let res = await axios.get(url);
  return res;
}

async function getDataId(url: string, id: any) {
  let res = await axios.get(`${url}/${id}`);
  return res;
}

async function postData(url: string, values: object) {
  let res = await axios.post(url, values);
}

async function putData(url: string, id: any, values: object) {
  let res = await axios.put(`${url}/${id}`, values);
}

async function deleteData(url: string, id: any) {
  let res = await axios.delete(`${url}/${id}`);
}

export { getData, getDataId, postData, putData, deleteData };

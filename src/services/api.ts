// export const BASE_URL = "http://localhost:4000/api"
export const BASE_URL = 'http://52.165.81.79:5000/api/v1'
export const projectRoute = `/project`
export const usersRoute = `/users`
export const loginRoute = `${usersRoute}/login`

import axios from 'axios'

const axiosInstance = axios.create({
  // baseURL: 'http://52.165.81.79:5000/api/v1',
  baseURL:'https://8208-2401-4900-8847-5b8a-19e2-fea-26c7-8ac9.ngrok-free.app',
  timeout: 1000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
})

export default axiosInstance

export const fetchProjects = async () => {
  const { data } = await axiosInstance.get('/project') // Adjust endpoint as needed
  return data
}

export const fetchBlogs = async () => {
  const { data } = await axiosInstance.get('/blog') // Adjust endpoint as needed
  return data
}

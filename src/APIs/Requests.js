import axios from 'axios'

const Tiktok = axios.create({
  baseURL: 'https://tiktok.fullstack.edu.vn/api',
})
Tiktok.interceptors.request.use(
  (config) => {
    if (config) {
      if (config.onBefore) {
        ;[config.url, config.params] = config.onBefore(config.url, config.params)
      }
    }
    return config
  },
  (error) => {
    console.error('Error on Tiktok.interceptors.request: ', error)
    return Promise.reject(error);
  },
)
const getUserTiktok = async ({
  keyword,
  type = 'less',
  onBefore = (path, params) => [path, params],
  onSuccess = (fulfiled) => console.log(`getUserTiktok "${keyword}" type "${type}" successful: `, fulfiled),
  onFail = (error) => console.error(`Error: getUserTiktok "${keyword}" and type "${type}" failed: `, error),
}) => {
  const path = '/users/search'
  const config = {
    params: {
      q: keyword,
      type,
    },
    onBefore,
  }
  try {
    const response = await Tiktok.get(path, config)
    onSuccess(response.data)
    return response.data
  } catch (error) {
    onFail(error)
  }
}
export { getUserTiktok }
import axiosClient from './axiosClient'

// const default = {
//   get: () => {
//     const subUrl = 'post'
//     return axiosClient.get(subUrl)
//   },
// }

// export default default

class DefaultService {
  entity

  constructor() {
    this.getAll = (config = {}) => {
      const subUrl = `${this.entity}`
      return axiosClient.get(subUrl, config)
    }
  }
}

export default DefaultService

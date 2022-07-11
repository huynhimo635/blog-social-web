import DefaultService from './DefaultService'

class TestApi extends DefaultService {
  constructor() {
    super()
    this.entity = 'post'
  }
}

export default TestApi

// const testApi = new TestApi()
// testApi.get()

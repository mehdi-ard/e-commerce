/**
 * Mocking client-server processing
 */
import data from './data'

export default {
  getProducts: (cb) => setTimeout(() => cb(data), 1000)
}

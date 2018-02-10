import {Model} from 'vue-mc'
import {
  // boolean,
  equal,
  integer,
  min,
  required,
  string
} from 'vue-mc/validation'

class Link extends Model {
  defaults () {
    return {
      'id': null,
      'name': '',
      'parsed': '',
      'raw': '',
      'target': ''
    }
  }
  mutations () {
    return {
      id: (id) => Number(id) || null,
      name: String,
      parsed: String,
      raw: String,
      target: String
    }
  }
  validation () {
    return {
      id: integer.and(min(1)).or(equal(null)),
      name: string.and(required),
      parsed: string,
      raw: string,
      target: string
    }
  }
}

export default Link

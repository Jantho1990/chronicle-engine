import {Model, Collection} from 'vue-mc';

class Page extends Model {
  defaults () {
    return {
      'id': null,
      'name': '',
      'content': ''
    }
  }
  mutations () {
    return {
      id: (id) => Number(id) || null,
      name: String,
      content: String
    }
  }
  validation () {
    return {
      id: integer.and(min(1)).or(equal(null)),
      name: string.and(required),
      content: string
    }
  }
}

export default Page

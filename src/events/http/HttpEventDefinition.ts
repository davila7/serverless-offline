const { assign } = Object

export default class HttpEventDefinition {
  readonly method: string
  readonly path: string

  constructor(rawHttpEventDefinition) {
    let method
    let path
    let rest

    if (typeof rawHttpEventDefinition === 'string') {
      ;[method, path] = rawHttpEventDefinition.split(' ')
    } else {
      ;({ method, path, ...rest } = rawHttpEventDefinition)
    }

    this.method = method
    this.path = path

    assign(this, rest)
  }
}

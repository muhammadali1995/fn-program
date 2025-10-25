import  {flatten} from "./flatten.js"
import {imperativeFibonacci} from './fibonacci.js'

const recuresiveFactrial = (n) => {
  if (n === 0) {
    return 1
  } else {
    return n * recuresiveFactrial(n - 1)
  }
}

flatten()


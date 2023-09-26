import { BUY_CAKE, BUY_UNRELATED } from './cakeTypes'

export function buyCake(number = 1) {
  return {
    type: BUY_CAKE,
    payload: number,
  }
}

export function buyUnrelated() {
  return {
    type: BUY_UNRELATED,
  }
}

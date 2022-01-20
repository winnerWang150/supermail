// 防抖函数
export function debounce (func, delay) {
  let timer = null
  return function (...argu) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, argu)
    }, delay)
  }
}

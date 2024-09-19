type Fn<T> = () => Promise<T>

function promiseAll<T>(functions: Fn<T>[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results: T[] = []
    let complete = 0
    let hasError = false

    functions.forEach((fn, index) => {
      fn()
        .then((result) => {
          results[index] = result
          complete++
        })
        .catch((err) => {
          if (!hasError) {
            hasError = true
            reject(err)
          }
        })
        .finally(() => {
          if(complete === functions.length && !hasError) resolve(results)
        })
    })
  })
}

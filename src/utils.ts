export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));


export const mapAll = <TIn, TOut>(func: (el: TIn) => TOut) => (collection: TIn[]) => collection.map(func)
export const byteToAddress = (bytes: string) => "0x" + bytes.slice(26)

export const flatten = <TElement>(collection: Array<Array<TElement>>) =>
  collection.reduce((accumulator, value) => accumulator.concat(value), []);
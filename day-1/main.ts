/**
Search Problem

konteks: kita punya data [1, 2, 3, ..., 100] dan ingin melakukan pencarian data

ada 2 algoritman search

1. simple search: cek dari 0 sampai 100
2. binary search, cek dari tengah lalu bandingan apakah lebih kecil atau lebih besar nilai yg ditengah dengan yang disearch
 */

// test data
const dummyJSON = (await import('./dummy.json', {
  assert: {
    type: 'json'
  }
})).default as number[]

function simpleSearch(list: number[], q: number) {
  // Simple search
  for (let index = 0; index < list.length; index++) {
    console.log(index + 1 + " trying...")
    const element = list[index];
    if (element === q) {
      return index
    }
  }

  return null
}
console.log(simpleSearch(dummyJSON, 10))

function binarySearch(list: number[], q: number) {
  let low = 0
  let high = list.length - 1

  let percobaan = 1
  while (low <= high) {
    percobaan++

    console.log(percobaan, "<<<")

    // Middle index
    const mid = low + high

    const guess = list[mid]

    if (guess === q) return mid

    if (guess > q) high = mid - 1
    else low = mid + 1
  }


  return null
}
// console.log(binarySearch(dummyJSON, 10))

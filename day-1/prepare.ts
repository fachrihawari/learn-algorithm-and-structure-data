

await Bun.write(import.meta.dirname + '/dummy.json', JSON.stringify(
  new Array(1_000_000).fill(null).map((_, i) => i * 2)
))

const fs = require('node:fs')

fs.readFile('components/svg-sprite.vue', (_, f) => {
  const a = f.toString().match(/<symbol id=".*?">/g)
  const names = []

  a.forEach((str) => {
    const [, name] = str.match(/id="(.*?)"/) || [null, null]
    if (name)
      names.push(`'${name}'`)
  })

  const data = `export type SpritIconName = ${names.join(' | ')}\n`

  fs.writeFileSync('types/sprite-icon.d.ts', data)
})

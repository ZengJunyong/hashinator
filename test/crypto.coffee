crypto = require 'crypto'

md5sum = crypto.createHash('md5')
md5sum.update('ss')
console.log md5sum.digest('hex')

sha256sum = crypto.createHash('sha256')
sha256sum.update('s')
console.log sha256sum.digest('hex')
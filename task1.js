const { error } = require('console')
const { promises } = require('dns')
const fs = require('fs')
/*
fs.readdir('/', (err, result) => {
  if (err) {
    throw new Error(err.message)
  }
  console.log(result)
})
*/


async function print() {
    const files = await fs.promises.readdir('/');
      console.log(files);
  }
  print().catch(console.error);
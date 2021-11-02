const sentence = 'hello there from lighthouse labs';

let time = 0
for (const char of sentence) {
  if (time === 1550) {
    setTimeout(() => {
      process.stdout.write(`${char} \n`)
    }, time)
    return
  }
  setTimeout(() => {
    process.stdout.write(char)
  }, time);
  time += 50
}

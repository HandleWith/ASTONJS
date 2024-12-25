const obj = { item: 'some value' }

function logger() {
  console.log(`I output only external context: ${this.item}`);
}

logger.apply(obj)
logger.call(obj)
logger.bind(obj)()




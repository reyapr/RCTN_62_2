
// producer
let foodOrder = (money) => {
  return new Promise((resolve, reject) => {
    if(money > 1000) {
      resolve('success to buy')
    } else {
      reject('sorry, your money isn\'t enough')
    }
  })
}


foodOrder(500)
  .then((res) => {
    console.log(res)
  }) // handle fullfill
  .catch((err) => {
    console.log(err)
  }) // handle reject
  
  
console.log(1+2)

foodOrder(2500)
  .then((res) => {
    console.log(res)
  }) // handle fullfill
  .catch((err) => {
    console.log(err)
  }) // handle reject
  

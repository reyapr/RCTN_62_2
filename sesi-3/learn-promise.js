import fetch from 'node-fetch'


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
  
  

foodOrder(2500)
  .then((res) => {
    console.log(res)
  }) // handle fullfill
  .catch((err) => {
    console.log(err)
  }) // handle reject
  
const filterIdOver5 = (data) => {
  return data.filter(person => person.id > 5)
}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    return res.json()
  })
  .then(filterIdOver5)
  .then(data => {
    // console.log(data)
  })
  .catch(err => {
    console.log(err)
  })
  
fetch('https://jsonplaceholdeer.typicode.com/users')
  .then(res => {
    return res.json()
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    // console.log(err)
  })
  
const getUsers = async () => {
  try {
    const usersRes = await fetch('https://jsonplaceholdeer.typicode.com/users')
    let users = await usersRes.json()
    let filteredOver5 = filterIdOver5(users)
  } catch (error) {
    console.log(error, 'error')
  }
  console.log('get all Users ')
}

const getUsersId6 = async () => {
  const usersRes = await fetch('https://jsonplaceholder.typicode.com/users/6')
  let users = await usersRes.json()
  console.log('get User 6')
}

getUsers()
getUsersId6()

// (async () => {
//   //async process
//   setTimeout(() => {
//     console.log('inside IIFE')
//   }, 1000);
// })()

console.log(1+2)

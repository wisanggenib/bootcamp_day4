const axios = require('axios');

//variable for saving all post
let posts = []
//variable for saving all users
let users = []
//variable for saving new Data that already joined
let objJoined = []

//getting all Data Post
const getPost = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/posts');
    posts = resp.data
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

//getting all Data user
const getUser = async () => {
  try {
    const resp = await axios.get('https://jsonplaceholder.typicode.com/users');
    users = resp.data
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

//Joining
const doJoin = async () => {
  // looking for data where posts.userId = user.id
  let i,j = 0
  for (i = 0; i < posts.length; i++) {
    for ( j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        let temp = { "Users": users[j] }
        let merged = Object.assign({}, posts[i], temp)
        objJoined.push(merged)
      }
    }
  }
//testing 1 value
//console.log(objJoined[1])

//show all value
console.log(objJoined)
}

const getAllData = async () => {
  const A = await getPost()
  const B = await getUser(A)
  const C = await doJoin(B)
}
getAllData()


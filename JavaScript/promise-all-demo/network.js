const fetch = require("node-fetch")

const ids = [1, 2, 3]

const baseURL = "http://localhost:3000"

async function fetchPost(id) {
  const response = await fetch(`${baseURL}/posts/${id}`)
  return await response.json()
}

// Without promise.all
async function getPosts(ids) {
  try {
    console.time('getPosts')
    const postsInfo = []
    for (const id of ids) {
      const info = await fetchPost(id)
      postsInfo.push(info)
    } 
    // console.log(postsInfo)
    console.timeEnd('getPosts')
  } catch (e) {
    console.error(e);
  }
}

// With promise.all
async function getPostsInParallel(ids) {
  try {
    console.time('getPostsInParallel')
    const postPromises = []
    for (const id of ids) {
      const promise = fetchPost(id);
      postPromises.push(promise);
    }
    console.log(postPromises);
    // const postsInfo = await Promise.all(postPromises);
    Promise.all(postPromises).then((postsInfo) => {
      // console.log(postsInfo)
      console.timeEnd('getPostsInParallel')
    });
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  await getPosts(ids)
  await getPostsInParallel(ids)
}

main()

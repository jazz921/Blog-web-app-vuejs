const deletePost = async (id) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: 'DELETE'
  })
  const data = res.json()
}

export default deletePost
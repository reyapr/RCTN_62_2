const User = ({ user }) => {
  return (
    <>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Email: {user.email}</div>
      <div>Phone: {user.phone}</div>
    </>
  )
}

export default User
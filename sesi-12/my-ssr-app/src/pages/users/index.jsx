export default function Users(props) {
  
  return (
    <div style={{marginLeft: '300px', marginRight: '300px'}}>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>ID</div>
        <div>Name</div>
        <div>Email</div>
        <div>
          <input type="text" />
        </div>
      </div>
      <div>
        {
          props.users?.map(user => {
            return (
              <div key={user.id} style={{display: 'flex', justifyContent: 'space-between'}}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()
  
  return {
    props: { users }
  }
}
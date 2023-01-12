import './styles.css'

const Counter = () => {
  return (
    <div>
      <div className='title'>My Counter</div>
      <div>0</div>
      <button>-</button> {' '}
      <button>+</button>
    </div>
  )
}

export default Counter
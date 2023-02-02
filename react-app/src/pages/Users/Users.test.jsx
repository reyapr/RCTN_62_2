import { render, screen, waitFor } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Users from "."

describe('Testing on Users Component', () => {
  test('[+] Check if the result from jsonplaceholder is appeared', async () => {
    render(
      <BrowserRouter>
        <Users/>
      </BrowserRouter>
    )
    
    // eslint-disable-next-line testing-library/no-node-access
    const user = document.querySelector('role[user-2]')
    // screen.getByRole('user-1')
    expect(user).toBeNull()
    
    const userFilled = await waitFor(() => {
      return screen.getByRole('user-2')
    }, { timeout: 10000})
    
    // eslint-disable-next-line testing-library/no-node-access
    expect(userFilled.children[1].innerHTML).toBe('Ervin Howell')
  })
})
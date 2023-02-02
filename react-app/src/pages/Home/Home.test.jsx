import { fireEvent, render, screen } from "@testing-library/react"
import App from "../../App"
import { BrowserRouter } from 'react-router-dom'

describe('Testing Home Component', () => {
  test('[+] Learn Test React should be on Home Page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    
    const title = screen.getByText('Learn Test on React')
    expect(title).toBeInTheDocument()
  })
  
  test('[+] Navigation Button should be in The Home Page', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const navigationBtnEl = screen.getByRole('btn-navigation')
    expect(navigationBtnEl).toBeInTheDocument()
    expect(navigationBtnEl.innerHTML).toBe('Users List')
  })
  
  test('[+] Navigate To User by Triggering Click Navigation Button', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const navigationBtnEl = screen.getByRole('btn-navigation')
    fireEvent.click(navigationBtnEl)
    
    const backToHomeBtnEl = screen.getByRole('back-to-home-btn')
    const pathName = window.location.pathname
    
    expect(backToHomeBtnEl).toHaveTextContent('Back to Home')
    expect(pathName).toBe('/users')
  })
})
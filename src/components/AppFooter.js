import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        {/* <a href="#" target="_blank" rel="noopener noreferrer">
          Account Dashboard
        </a> */}
        <span className="ms-1">&copy; 2023 My App Name.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Developed & Designed by</span>
        <a href="https://shanuthewebdev.in" target="_blank" rel="noopener noreferrer">
          Shanu Raj
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)

import React from 'react'
import {SiGeeksforgeeks} from 'react-icons/si'
import {SiLeetcode} from 'react-icons/si'
import {SiHackerrank} from 'react-icons/si'
import './footer.css'

const footer = () => {
  return (
    <footer>

    
    <div className='footer__copyright'>
    <ul className='permalinks'>
    <li><a href='https://auth.geeksforgeeks.org/user/ojesvibehal15/' target="_blank" rel="noreferrer"><SiGeeksforgeeks size={40}/></a></li>
    <li><a href='https://leetcode.com/ojesvi1234/'><SiLeetcode size={40}/></a></li>
    <li><a href='https://www.hackerrank.com/ojesvi_behal15'><SiHackerrank size={40}/></a></li>
    </ul>
    <small>&copy; All rights reserved.</small>

    </div>
    </footer>
      
  )
}

export default footer;

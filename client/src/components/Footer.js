import React from 'react'
import {AiOutlineTwitter, AiFillGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <div>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    {/* <svg className="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
                </a>
                <span className="text-muted">© 2022 Created by David Rodríguez</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className='ms-3'>
                    <a className='text-muted' href ="https://twitter.com/davroper">
                        <AiOutlineTwitter  style={{fontSize: '30px'}}/>
                    </a>
                </li>
                <li className='ms-3'>
                    <a className='text-muted' href ="https://github.com/davrope">
                        <AiFillGithub style={{fontSize: '30px'}}/>
                    </a>
                </li>
            </ul>

        </footer>
    </div>
  )
}

export default Footer



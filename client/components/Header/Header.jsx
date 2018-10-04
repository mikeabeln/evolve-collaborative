import * as React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import './Header.scss'
import HeaderData from './Header.json'
import menuIcon from './menu.svg'
import logo from './logo.svg'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
    }

    // componentDidUpdate(prevProps) {
    //     console.log(prevProps, this.props)
    // }

    render() {
        return (
            <header className='header containerFluid'>
                {/* put header content here */}
                <div className='row'>
                    <div className='header_cont colXs2'>
                        <Link
                            exact='true'
                            to='/'
                            onClick={this.props.closeNav}
                            className='header_logo-link'
                        >
                            <img className='header_logo' src={logo}/>
                        </Link>
                    </div>
                    <menu className='header_links-cont colXs10'>
                        <ul className='header_link-list'>
                            {HeaderData.links.map((link, index) => (
                                <li key={index} className='header_list-item'>
                                    <Link
                                        smooth
                                        to={link.link}
                                        onClick={this.props.closeNav}
                                        className={'header_link ' + link.classPrefix + '-link'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </menu>
                    <div className='header_menu-button-cont colXs1 colXsOffset8'>
                        <button
                            className={'header_menu-button'}
                            onClick={this.props.toggleNav}
                            aria-expanded={this.props.navOpen}
                            aria-haspopup={ true }
                            aria-label='More Navigation Links'
                        >
                            <img className='header_menu -icon' src={menuIcon} />
                        </button>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header

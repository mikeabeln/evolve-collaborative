import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import HeaderData from './Header.json'
import moreIcon from './more.svg'
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
                        >
                            <img className='header_logo' src={logo}/>
                        </Link>
                    </div>
                    <menu className='header_links-cont colXs10'>
                        <ul className='header_link-list'>
                            {HeaderData.links.map((link, index) => (
                                <li key={index} className='header_list-item'>
                                    <NavLink
                                        to={link.link}
                                        onClick={this.props.closeNav}
                                        className={'header_link ' + link.classPrefix + '-link'}
                                        activeClassName='header_link-active'
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                            <li className='header_list-item'>
                                <button
                                    className={'header_more-button'}
                                    onClick={this.props.toggleNav}
                                    aria-expanded={this.props.navOpen}
                                    aria-haspopup={ true }
                                    aria-label='More Navigation Links'
                                >
                                    <img className='header_more-icon' src={moreIcon} />
                                </button>
                            </li>
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

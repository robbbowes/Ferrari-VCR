import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {

    state = {
        drawerOpen: false,
        headerTransparent: true
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 0) {
            this.setState({
                headerTransparent: false
            })
        } else {
            this.setState({
                headerTransparent: true
            })
        }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }

    render() {
        return (
            <AppBar
                position='fixed'
                style={{
                    backgroundColor: this.state.headerTransparent ? 'transparent' : 'black',
                    boxShadow: 'none',
                    padding: '10px 0px'

                }}
            >
                <Toolbar>

                    <div className="header_logo">
                        <div className="font_righteous header_logo_ferrari_vcr cyan_magenta">Ferrari VCR</div>
                        <div className="header_logo_title">Time Travel Tickets</div>
                    </div>

                    <IconButton
                        arial-label="Menu"
                        color="inherit"
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value) => this.toggleDrawer(value)}
                    />

                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;
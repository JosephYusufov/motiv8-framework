import React, { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Header, Icon, Advertisement, Image } from 'semantic-ui-react';
import { Link, NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './sideMenu.css';

const Root = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 200px 1fr 350px;
    grid-template-areas: 
        "sidebar content adbar";

    p{
        font-size: 1.5rem;
    }        
    .selected-nav{
        *{
        color: #31b9ffaa;
        }
    }
    .feedContainer{
    }
    .content{
        margin: 50px 20px;
        // margin-top: 10px;
        grid-area: content;
        display: flex;
        justify-content: center;
        // width: 100%;
    }
    .sidebar{
        height: 100vh;
        grid-area: sidebar;
        height: 100%; /* Full-height: remove this if you want "auto" height */
    }
    .sidebar-content{
        width: 200px;
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        padding-left: 30px;
        padding-top: 30px;
        overflow-x: hidden; /* Disable horizontal scroll */
        *{
            display: block;
            margin: 15px 0px;
            padding: 0;
        }
    }
    .adbar{
        height: 100vh;
        grid-area: adbar;
        // background-color: #cccccc;
        height: 100%; /* Full-height: remove this if you want "auto" height */
    }
    .adbar-content{
        width: 350px;
        // background-color: #cccccc;
        position: fixed; /* Fixed Sidebar (stay in place on scroll) */
        z-index: 1; /* Stay on top */
        top: 0; /* Stay at the top */
        overflow-x: hidden; /* Disable horizontal scroll */
        display: flex;
        flex-direction: column;
        height: 100vh;
        align-items: center;
        justify-content: space-around;
    }
    .nav-link{
        padding: 2px;
    }
    .nav-link:hover{
        color: #31b9ffaa;
        transition: 0.15s;
    }
    .author{
        width: 100%;
        display: flex;
        flex-direction: column;
        jistify-content: center;
        align-items: center;
        padding: 0px 10%;
        p{
            font-size: 1.3rem !important;
        }
    }
    .icons{
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: space-between;
        i{
            cursor: pointer;
            padding: 2px;
        }
        i:hover{
            color: #31b9ffaa;
            transition: 0.25s;
        }
    }
    .mobile-navbar{
        display: none;
        *{
            display: none;
        }
    }
    h1{
        font-size: 3rem;
    }
    @media only screen and (max-width: 1100px) {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 200px;
        grid-template-areas: 
            "content adbar";
        .adbar-content{
            width: 200px;
        }
        .mobile-navbar{
            .logo-container{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                height: 100%;
            }
            display: block;
            z-index: 3;
            overflow: hidden;
            position: fixed; /* Set the navbar to fixed position */
            top: 0; /* Position the navbar at the top of the page */
            width: 100%; /* Full width */
            height: 50px;
            background-color: white;
            border-bottom: 1px solid black;
            *{
                display: block;
            }
        }
        .content{
            margin-top: 100px;
        }

    }
    @media only screen and (max-width: 600px) {
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas: 
            "content";
        p{
            font-size: 1.5rem;
        }        
        .mobile-navbar{
            .logo-container{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
            }
            display: block;
            z-index: 3;
            overflow: hidden;
            position: fixed; /* Set the navbar to fixed position */
            top: 0; /* Position the navbar at the top of the page */
            width: 100%; /* Full width */
            height: 50px;
            background-color: white;
            border-bottom: 1px solid black;
            *{
                display: block;
            }
        }
        .content{
            margin-top: 100px;
        }
    }
`
const Layout = ({meta, children}) => {
    const [author, setAuthor] = useState({});
    useEffect(() => {
        if(meta){
            setAuthor(meta.author);
        };
    },[meta]);

    return <>
        <Menu id="sidenav-menu" pageWrapId="page-wrap">
            <NavLink exact to='/' activeClassName="selected-nav"><Header className="nav-link" as="h1">Home</Header></NavLink>
            <Link to='/' activeClassName="selected-nav"><Header className="nav-link" as="h1">Search <Icon size="tiny" style={{fontSize: "1em", margin: 0}} name="search"/></Header></Link>
            <NavLink exact to='/software' activeClassName="selected-nav"><Header className="nav-link" as="h1">Software</Header></NavLink>
            <NavLink exact to='/hardware' activeClassName="selected-nav"><Header className="nav-link" as="h1">Hardware</Header></NavLink>
            <NavLink exact to='/business' activeClassName="selected-nav"><Header className="nav-link" as="h1">Business</Header></NavLink>
            <NavLink exact to='/gaming' activeClassName="selected-nav"><Header className="nav-link" as="h1">Gaming</Header></NavLink>
        </Menu>
        <Root id="page-wrap">
        <div className="mobile-navbar">
            <div className="logo-container">
                <img src="https://placekitten.com/40/40" alt="logo"></img>
            </div>
        </div>
            <div className="sidebar" >
                <div className="sidebar-content">
                    <NavLink exact to='/' activeClassName="selected-nav"><Header className="nav-link" as="h1">Home</Header></NavLink>
                    <Link to='/' activeClassName="selected-nav"><Header className="nav-link" as="h1">Search <Icon size="tiny" style={{fontSize: "1em", margin: 0}} name="search"/></Header></Link>
                    <NavLink exact to='/software' activeClassName="selected-nav"><Header className="nav-link" as="h1">Software</Header></NavLink>
                    <NavLink exact to='/hardware' activeClassName="selected-nav"><Header className="nav-link" as="h1">Hardware</Header></NavLink>
                    <NavLink exact to='/business' activeClassName="selected-nav"><Header className="nav-link" as="h1">Business</Header></NavLink>
                    <NavLink exact to='/gaming' activeClassName="selected-nav"><Header className="nav-link" as="h1">Gaming</Header></NavLink>
                </div>
            </div>
            <div className="content">
                {children}
            </div>
            <div className="adbar">
                <div className="adbar-content">
                    <div className="author">
                        {author.profilePicture && <Image fluid rounded src={author.profilePicture} alt="Profile"></Image>}
                        <Header as='h2'>{author.name && author.name}</Header>
                        <p>{author.description && author.description}</p>
                        <div className="icons">
                            {author.facebook && <i className="big facebook f icon"></i>}
                            {author.youtube && <i className="big youtube icon"></i>}               
                            {author.instagram && <i className="big instagram icon"></i>}     
                            {author.twitter && <i className="big twitter icon"></i>}
                        </div>
                    </div>
                    <Advertisement unit='small rectangle'>
                        <img alt='ad' src='https://react.semantic-ui.com/images/wireframe/image.png' />
                    </Advertisement>
                </div>
            </div>
        </Root>
    </>;
};

export default Layout;
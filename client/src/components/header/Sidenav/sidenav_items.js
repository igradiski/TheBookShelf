import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

const sidenavItems = () => {

    const items = [
        {
            type: 'navItem',
            icon: 'home',
            text: 'Home',
            link: '/',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My Profile',
            link: '/user',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'fas fa-home',
            text: 'Add admins',
            link: '/user/register',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'f2f6',
            text: 'Login',
            link: '/login',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'My reviews',
            link: '/user/user-reviews',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'file-text-o',
            text: 'Add a review',
            link: '/add',
            restricted: false
        },
        {
            type: 'navItem',
            icon: 'fa-sign-out',
            text: 'Logout',
            link: '/user',
            restricted: false
        }
    ]


    const element = (item, i) => (
        <div key={i} className={item.type}>
            <Link to={item.link}>
                <FontAwesome name={item.icon} />
                {item.text}
            </Link>
        </div>
    )
    const showItems = () => (
        items.map((item, i) => {
            return element(item, i)
        })
    )

    return (
        <div>
            {
                showItems()
            }
        </div>
    );
};

export default sidenavItems;
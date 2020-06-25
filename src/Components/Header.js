import React from 'react'

function Header({ user, handleLogOut, showPickUpGamePost }) {
    return (
        <nav>
            <h2 onClick={showPickUpGamePost}>Drop<span>i</span>n</h2>
            <ul className="navList">
                <li className="userName">
                    <img src={user.photoUrl} alt="" />
                    {user.displayName ? <p>{user.displayName}</p> : <p>{user.email}</p>}
                </li>
                <li>
                    <button type="submit" onClick={handleLogOut}>Log Out</button>
                </li>
            </ul>
        </nav>
    )
}

export default Header;
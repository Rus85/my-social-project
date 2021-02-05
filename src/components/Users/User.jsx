import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg'
import style from './Users.module.css'


let User = ({user, followingInProgress, toggleFollowingProgress, unfollow, follow}) => {

    return <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={followingInProgress} onClick={() => {
                                toggleFollowingProgress(true)
                                unfollow(user.id)
                                
                              toggleFollowingProgress(false)

                            }}>Unfollow</button>

                            : <button disabled={followingInProgress} onClick={() => {
                                toggleFollowingProgress(true)
                                follow(user.id)

                             toggleFollowingProgress(false)

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.country'}</div>
                        <div>{'user.location.city'}</div>
                    </span>
                </span>
            </div>
        }
    


export default User
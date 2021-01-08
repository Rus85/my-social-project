import React from 'react';
import { NavLink } from 'react-router-dom';
import userPhoto from '../../assets/images/user.jpg'
import style from './Users.module.css'
import * as axios from 'axios'
import { followApi } from '../api/api'
import { unfollowApi } from '../api/api'



const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={style.hand}>
            {pages.map(p => {
                return <span className={props.currentPage === p && style.activePage}
                    onClick={() => { props.onPageChanged(p) }} >{p}</span>

            })}

        </div>

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingProgress(true)
                                props.unfollow(u.id)
                                
                                // unfollowApi.unsubscribe(`${u.id}`)
                                // {
                                //     props.unfollow(u.id)
                                // }

                                props.toggleFollowingProgress(false)

                            }}>Unfollow</button>

                            : <button disabled={props.followingInProgress} onClick={() => {
                                props.toggleFollowingProgress(true)
                                props.follow(u.id)


                                // followApi.subscribe(`${u.id}`)
                                // {
                                //     props.follow(u.id)
                                // }

                                props.toggleFollowingProgress(false)

                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}




export default Users
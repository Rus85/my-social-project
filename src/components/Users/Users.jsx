import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import Paginator from '../common/Pagination/Pagination';
import User from './User';
import style from './Users.module.css'


let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return <div>
         <Paginator currentPage={currentPage} totalItemsCount={totalUsersCount} 
         pageSize={pageSize} onPageChanged={onPageChanged} />

        {
            users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                toggleFollowingProgress={props.toggleFollowingProgress}
                unfollow={props.unfollow}
                follow={props.follow}
                key={u.id} 
                /> 
            
            
            )}
    </div>
        
    }

export default Users
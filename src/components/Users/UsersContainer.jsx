import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersR} from '../../redux/users-reducer'
import Preloader from '../common/Preloader/Preloader'
import { usersApi } from '../api/api'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import {getUsersSimply, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selector'



class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersR(this.props.currentPage, this.props.pageSize)

    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersR(pageNumber, this.props.pageSize)

    }

    render() {
       
       return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}


            />
        </>
    }

}

// let mapStateToProps = state => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress

//     }
// }


let mapStateToProps = state => {
    console.log('mapStateToProps USERS')

    return {
        users: getUsersSimply(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsersR, }),
    // withAuthRedirect
)

    (UsersContainer)



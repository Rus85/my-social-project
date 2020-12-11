import React from 'react';
import f from './Friends.module.css'
const Friend = (props) => {
    return (
        <div className={f.friends}>
          <div><img src='https://image.freepik.com/free-vector/businessman-profile-cartoon_18591-58479.jpg' /></div>
          <div className={f.friendsName}>{props.user}</div>
        </div>
    )
}

// const Friends = (props) => {

//     let friendsElements = 
//     props.persons.map(f => <Friend id={f.id} user={f.user} />)

//     return (
//         <div>
//             <h3>FRIENDS</h3>
//             {friendsElements}
//         </div>
//     )
// }

export default Friend;
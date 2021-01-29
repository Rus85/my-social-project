import React, { useEffect, useState } from 'react'

const ProfileStatusHooks = (props) => {


    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deActivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let onChangeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }



    return (

        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}> {props.status || "-----"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onChangeStatus} autoFocus={true} onBlur={deActivateEditMode} value={status}></input>
                </div>
            }
        </div>
    )

}

export default ProfileStatusHooks
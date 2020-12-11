import s from './ProfileInfo.module.css';
import main from './images/main.jpg'

const ProfileInfo = () => {
    return (
        <div>
            <div>
            <img src={main}/>
            </div>
            <div className={s.descrriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;
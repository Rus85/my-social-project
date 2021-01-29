import s from './ProfileInfo.module.css';
import main from './images/main.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                {/* <img src={main} /> */}
            </div>
            <div className={s.descrriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus} />
                
                                   

            </div>
        </div>
    )
}

export default ProfileInfo;
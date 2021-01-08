import s from './ProfileInfo.module.css';
import main from './images/main.jpg'
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus';

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
                <ProfileStatus status={'Holla'} />
                
                                   

            </div>
        </div>
    )
}

export default ProfileInfo;
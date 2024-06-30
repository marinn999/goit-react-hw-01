import styles from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
        <div className={styles.ProfileContainer}>
            <div className={styles.ProfileImageContainer}>
                <img className={styles.ProfileImage}
                    src={image}
                    alt="User avatar"
                />
                <p className={styles.ProfileName}>{name}</p>
                <p className={styles.ProfileTag}>@{tag}</p>
                <p className={styles.ProfileLocation}>{location}</p>
            </div>

            <ul className={styles.ProfileList}>
                <li className={styles.ProfileListItem}>
                    <span className={styles.ProfileFollowers}>Followers</span>
                    <span className={styles.ProfileFollowersNumber}>{stats.followers}</span>
                </li>
                <li className={styles.ProfileListItem}>
                    <span className={styles.ProfileFollowers}>Views</span>
                    <span className={styles.ProfileFollowersNumber}>{stats.views}</span>
                </li>
                <li className={styles.ProfileListItem}>
                    <span className={styles.ProfileFollowers}>Likes</span>
                    <span className={styles.ProfileFollowersNumber}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};

export default Profile;
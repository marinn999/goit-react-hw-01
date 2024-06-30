import styles from './FriendList.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    const FriendStatus = isOnline ? "Online" : "Offline";
    const FriendStatusCss = isOnline ? styles.online : styles.offline;

    return (
        <div className={styles.FriendContainer}>
            <img className={styles.FriendImage}
                src={avatar} alt="Avatar" width="48" />
            <p className={styles.FriendName}>{name}</p>
            <p className={FriendStatusCss}>{FriendStatus}</p>
        </div>

    );
};

export default FriendListItem;
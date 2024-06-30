import styles from './FriendList.module.css'
import FriendListItem from './FriendListItem'

const FriendList = ({friends}) => {
    return (
        <ul className={styles.FiendList} > {
            friends.map((friend) => 
             <li className={styles.FriendListFriend} key={friend.id}><FriendListItem {...friend} /></li>
           )}
            </ul>  
    );
};

export default FriendList;

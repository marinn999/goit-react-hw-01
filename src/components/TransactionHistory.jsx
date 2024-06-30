import styles from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
        <table className={styles.Table}>
            
            <thead>
                <tr className={styles.TableRow}>
                    <th className={styles.TableHeadRow}>Type</th>
                    <th className={styles.TableHeadRow}>Amount</th>
                    <th className={styles.TableHeadRow}>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item) =>
                    <tr key={item.id} className={styles.TableRow}>
                        <td className={styles.TableData}>{item.type}</td>
                        <td className={styles.TableData}>{item.amount}</td>
                        <td className={styles.TableData}>{item.currency}</td>
                    </tr>
                )}
            </tbody>
        </table >
    );
};

export default TransactionHistory;
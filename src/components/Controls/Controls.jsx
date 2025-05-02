import styles from './Controls.module.css';

export function Controls() {
    return (
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
                <textarea
                    className={styles.TextArea}
                    placeholder="Message AI ChatBot" />
            </div>
            <button className={styles.Button}><SendIcon/></button>
        </div>
    );
    function SendIcon(params) {
        return (
            <img src="/send.png" className={styles.SendIcon}></img>
        );
    }
}
import styles from "./Graphic.module.scss";

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log(JSON.stringify(payload, null, 2));
  if (active) {
    return (
      <div className={styles.custom_tooltip}>
        <div className={styles.title}>{label}</div>
        <div className={styles.description}>
          <div className={styles.item}>
            <span className={styles.name}>Днем: </span>
            <p className={styles.value}>{payload[0].value}</p>
          </div>
          <div className={styles.item}>
            <span className={styles.name}>Ночью: </span>
            <p className={styles.value}>{payload[1].value}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

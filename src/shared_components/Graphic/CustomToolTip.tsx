import styles from "./Graphic.module.scss";

const CustomTooltip = ({ active, payload, label }: any) => {
  console.log(JSON.stringify(payload, null, 2));
  if (active) {
    return (
      <div className={styles.custom_tooltip}>
        <h2 className={styles.title}>{label}</h2>
        <div className={styles.description}>
          <span>Днем: </span>
          <p className={styles.value}>{payload[0].value}</p>
          <span>Ночью: </span>
          <p className={styles.value}>{payload[1].value}</p>
        </div>
      </div>
    );
  }

  return null;
};

export default CustomTooltip;

import { Link } from "react-router-dom";
import styles from "./RaceCard.module.css";
import formatDate from "../../utilities/formatDate";

let Distance: "5K" | "10K" | "Half-Marathon" | "Marathon" | "Ultra";
type RaceCardProps = {
  id: string;
  name: string;
  date: string;
  city: string;
  state: string;
  country: string;
  distance: typeof Distance;
};

const RaceCard = ({
  id,
  name,
  date,
  city,
  country,
  distance,
}: RaceCardProps) => {
  return (
    <Link to={`/race/${id}`}>
      <div className={styles.card}>
        <div className={styles.card__mainContent}>
          <span className={styles.card__date}>{formatDate(date)}</span>
          <h2 className={styles.card__heading}>{name}</h2>

          <span className={styles.card__distance}>{distance}</span>
        </div>
        <div className={styles.card__subContent}>
          <p>{`${city}, ${country}`}</p>
          <Link className={styles.card__detailsButton} to={`/race/${id}`}>
            Details
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default RaceCard;

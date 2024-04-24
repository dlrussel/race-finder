import { Card, CardHeader, Heading, Text } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";

import { Link } from "react-router-dom";
import styles from "./RaceCard.module.css";

type RaceCardProps = {
  id: string;
  name: string;
  date: string;
  city: string;
  state: string;
  country: string;
  distance: string;
};

const RaceCard = ({
  id,
  name,
  date,
  city,
  state,
  country,
  distance,
}: RaceCardProps) => {
  function formatDate(date: string) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dateObject = new Date(date);
    const month = months[dateObject.getMonth()];
    const day = dateObject.getDate();
    const year = dateObject.getFullYear();

    return `${month} ${day}, ${year}`;
  }
  return (
    <Link to={`/race/${id}`}>
      <Card variant="outline" h="100%" w="100%" boxShadow="md">
        <CardHeader>
          <Heading size="md" pb={3}>
            {name}
          </Heading>
          <span className={styles.card__detailsDistance}>{distance}</span>
        </CardHeader>
        <div className={styles.card__details}>
          <Text>{formatDate(date)}</Text>

          <div className={styles.card__detailsRating}>
            <span>4.0</span>
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <span>(372)</span>
          </div>
          <Text>{`${city}, ${state}, ${country}`}</Text>
        </div>
      </Card>
    </Link>
  );
};

export default RaceCard;

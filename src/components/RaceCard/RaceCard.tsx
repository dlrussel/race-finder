import { Card, CardHeader, Heading, Text } from "@chakra-ui/react";

import { StarIcon } from "@chakra-ui/icons";
import styles from "./RaceCard.module.css";

type RaceCardProps = {
  name: string;
  date: string;
  link: string;
  city: string;
  state: string;
  country: string;
  distance: string;
};

const RaceCard = ({
  name,
  date,
  link,
  city,
  state,
  country,
  distance,
}: RaceCardProps) => {
  return (
    <Card variant="outline" h="100%" w="100%" boxShadow="md">
      <CardHeader>
        <Heading size="md" pb={3}>
          {name}
        </Heading>
        <span className={styles.card__detailsDistance}>{distance}</span>
      </CardHeader>
      <div className={styles.card__details}>
        <Text>{date}</Text>

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
        <a className={styles.card__detailsLink} href={link} target="_blank">
          Register Here
        </a>
      </div>
    </Card>
  );
};

export default RaceCard;

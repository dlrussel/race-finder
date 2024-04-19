import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Text,
  Link,
  Tag,
  TagLabel,
} from "@chakra-ui/react";

interface RaceCardProps {
  name: string;
  date: string;
  link: string;
  location: string;
  distance: string;
}

const RaceCard = ({ name, date, link, location, distance }: RaceCardProps) => {
  return (
    <Card variant="outline" h="100%" w="100%" boxShadow="md">
      <CardHeader>
        <Heading size="lg">{name}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{date}</Text>
        <Text>{location}</Text>

        <Tag size="lg" colorScheme="red" borderRadius="full">
          <TagLabel>{distance}</TagLabel>
        </Tag>
        <Link href={link} isExternal>
          Register Here
        </Link>
      </CardBody>
    </Card>
  );
};

export default RaceCard;

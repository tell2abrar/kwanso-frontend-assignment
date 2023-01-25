import { Card, CardBody, Text } from '@chakra-ui/react';

type CardProps = {
  name: string;
};

const CustomCard = ({ name }: CardProps) => {
  return (
    <div>
      <Card minWidth={'400px'}>
        <CardBody>
          <Text>{name}</Text>
        </CardBody>
      </Card>
    </div>
  );
};

export default CustomCard;

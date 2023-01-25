import { Box, Card, CardBody, chakra, Checkbox, Text } from '@chakra-ui/react';

type CardProps = {
  id: string;
  name: string;
  showCheckBox?: boolean;
  onClickCheckBox?: (e: any, id: string) => void;
};

const Wrapper = chakra(Box, {
  baseStyle: {
    position: 'relative',
  },
});

const CustomCard = ({
  id,
  name,
  showCheckBox = false,
  onClickCheckBox,
}: CardProps) => {
  return (
    <Wrapper>
      <Card minWidth={'400px'}>
        <CardBody>
          <Text>{name}</Text>
        </CardBody>
        {showCheckBox && (
          <>
            <Checkbox
              position={'absolute'}
              right='10px'
              top={'10px'}
              onChange={(e) => onClickCheckBox && onClickCheckBox(e, id)}
            ></Checkbox>
          </>
        )}
      </Card>
    </Wrapper>
  );
};

export default CustomCard;

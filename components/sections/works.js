
import {
  Box,
  chakra,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import { Image } from "@chakra-ui/image";
import { GoLocation } from 'react-icons/go';

const works = [{
  id: 'qsaaASASAS',
  title: 'Users',
  stat: '5,000',
  imageUrl: '/demo-claim.jpeg'
},
{
  id: 'qsaaASDSASAS',
  title: 'Users',
  stat: '5,000',
  imageUrl: '/demo-claim-1.jpeg'
},
{
  id: 'qsasaaASASAS',
  title: 'Users',
  stat: '5,000',
  imageUrl: '/demo-claim-2.jpeg'
},
{
  id: 'qsaaASerweASAS',
  title: 'Users',
  stat: '5,000',
  imageUrl: '/demo-claim-3.jpeg'
}
]


function WorkCard(props) {
  const { title, stat, icon, imageUrl } = props;
  return (
    <Box
      shadow={'xl'}
      rounded={'lg'}
      cursor="pointer"
      _hover={{
        border: '1px',
        borderColor: useColorModeValue('gray.800', 'gray.500'),
        background: 'gray.100'
      }}
    >
      <Image rounded='lg' src={imageUrl} alt={title} height="300px" width="100%" />
    </Box>
  );
}

export default function Works() {
  return (
    <Box maxW="7xl" mx={'auto'} py={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        Here are some of our works
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {works.map(work => (
          <WorkCard
            key={work.id}
            title={work.title}
            icon={<GoLocation size={'3em'} />}
            imageUrl={work.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
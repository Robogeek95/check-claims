import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Footer from '../components/sections/footer';

export default function Login() {
    return (
       <>
       <Navbar />

       <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Demo</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        coming soon 😉 <Link color={'blue.400'} href="/">go home</Link> 
                    </Text>
                </Stack>
         
            </Stack>
        </Flex>

        <Footer />
       </>
    );
}
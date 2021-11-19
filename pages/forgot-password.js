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
import { useRouter } from 'next/dist/client/router';
import Logo from '../components/Logo';

export default function ForgotPassword() {
  const router = useRouter()

  function handleForgotPassword() {
    router.push('/reset-password')
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Link href='/' my={8}>
            <Logo />
          </Link>
          <Heading fontSize={'4xl'}>Recover your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>Fill your details to recover your account
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>

            <Stack pt={5}>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={handleForgotPassword}
                _hover={{
                  bg: 'blue.500',
                }}>
                Continue
              </Button>

              <Box pt="4" px={18}>
                <hr />
              </Box>

              <Button
                variant="ghost"
                as="a"
                href="/login"
                _hover={{
                  bg: useColorModeValue('gray.200', 'blue.800'),
                }}>
                Remember your passsword?
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
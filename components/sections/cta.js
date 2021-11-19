import { Button } from '@chakra-ui/button'
import { Box, Stack, Text } from '@chakra-ui/layout'
import React from 'react'

export default function Cta() {
    return (
        <Box bg="orange.400" py="10">
            <Text textAlign="center" fontWeight="bold" mb="4" fontSize="4xl">Get your detailed car claims delivered smoothly</Text>
            <Stack direction="row" justifyContent="center">
                <Button as="a" href="/demo" bg="green.800">
                    Try It Now
                </Button>
                <Button as="a" href="/login" bg="blue.400">
                    Get Started
                </Button>
            </Stack>
        </Box>
    )
}

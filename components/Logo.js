import { Box, Stack, Text } from '@chakra-ui/layout'
import React from 'react'
import { BsMapFill } from 'react-icons/bs'

export default function Logo() {
    return (
       <Stack direction="row" align="center">
           <BsMapFill />
            <Text fontSize={'2xl'} fontWeight='bold'> Check Claims </Text>
       </Stack>
    )
}

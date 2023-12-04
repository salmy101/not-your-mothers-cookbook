import { UnlockIcon } from "@chakra-ui/icons";
import { Box, Flex, Spacer,Heading, Button, Text, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react";

export default function NavBar() {
  const toast = useToast()

    const showToast = () => {
      toast({
        title: 'Logged Out',
          description: 'Successfully Logged Out',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top', 
          icon: <UnlockIcon />
      })
    }

  return (
    <Flex as="nav" mb="40px" p="10px" alignItems="center" >
      <Heading as="h1">Not Your Mothers' Cookbook</Heading>
      <Spacer />
      <HStack spacing="10px">
      <Avatar name="Salma" bg="purple.400" src="/img/peach.png">
        <AvatarBadge w="1.3em" bg="teal.500">
          <Text fontSize="xs" color="white">3</Text>

        </AvatarBadge>
      </Avatar>
      <Text>salmy101@github.com</Text>
      <Button colorScheme="purple" onClick={showToast}>Logout</Button>
      </HStack>
    </Flex>
    
  )
}

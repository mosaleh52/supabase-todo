import {
  VStack,
  StackDivider,
  HStack,
  Text,
  Image,
  Box,
  Skeleton,
} from '@chakra-ui/react';
import DeleteTask from './DeleteTask';
import ClearTasks from './ClearTasks';
import img from '../images/empty.svg';
import { useRealtime } from 'react-supabase';

export default function TaskList() {
  const [result, reexecute] = useRealtime('todos');
  const { data: tasks, error, fetching } = result;

  if (fetching) {
    return (
      <Skeleton
        width={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        height="300px"
        rounded="md"
      />
    );
  }
  console.log(tasks);

  if (!tasks || !tasks.length) {
    return (
      <Box align="center">
        <Image src={img} mt="30px" maxW="95%" />
      </Box>
    );
  }

  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="5"
        borderRadius="lg"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
        alignItems="stretch"
      >
        {tasks.map(task => (
          <HStack key={task.id}>
            <Text w="100%" p="8px" borderRadius="lg">
              {task.text}
            </Text>
            <DeleteTask id={task.id} />
          </HStack>
        ))}
      </VStack>

      <ClearTasks />
    </>
  );
}

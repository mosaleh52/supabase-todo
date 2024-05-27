import { Heading, VStack } from '@chakra-ui/react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import DarkModeToggle from './components/DarkModeToggle';

export default function App() {
  return (
    <>
      <DarkModeToggle />
      <VStack p={4} minH="100vh">
        <Heading
          mt="20"
          p="5"
          fontWeight="extrabold"
          size="xl"
          bgGradient="linear(to-l, teal.300, blue.500)"
          bgClip="text"
        >
          Todo List
        </Heading>
        <AddTask />
        <TaskList />
      </VStack>
    </>
  );
}

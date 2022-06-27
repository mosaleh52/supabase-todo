import { Flex, Button } from '@chakra-ui/react';
import { useState } from 'react';
import supabase from '../supabase';

export default function ClearTasks() {
  const [loading, setLoading] = useState(false);

  async function handleClear() {
    setLoading(true);
    const { data, error } = await supabase
      .from('todos')
      .delete()
      .not('text', 'eq', 'Do not delete me');
    setLoading(false);
  }

  return (
    <Flex>
      <Button
        colorScheme="gray"
        px="8"
        h="45"
        color="gray.500"
        mt="10"
        onClick={handleClear}
        isLoading={loading}
        loadingText="Clearing"
      >
        Clear Tasks
      </Button>
    </Flex>
  );
}

// https://supabase.com/docs/guides/api#safeguards-towards-accidental-deletes-and-updates

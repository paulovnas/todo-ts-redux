import BtnUpdate from './BtnUpdate';
import { BtnDelete, BtnDeleteAll } from './BtnDelete';
import { 
    HStack, 
    Box, 
    VStack, 
    Flex, 
    Text, 
    StackDivider } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import img from '../../images/empty.svg';
import { IState, ITask } from '../../interfaces/Task';
import FormAdd from './FormAdd';
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete } from '../../slices/TaskSlice';


function TaskList() {
    const dispatch = useDispatch();
    const tasks = useSelector(
        (state : IState) => state.tasksWatch.tasks
    );

    const myTask = (task: ITask) => {
        const op:string = task.complete == true ? '0.2' : '1';
        const as:any = task.complete == true ? 'del' : '';

        return <HStack
            key={task.id}
            opacity={op}
            >
                <Text
                    w='100%' 
                    p='8px'
                    as={as}
                    borderRadius='lg'
                    cursor='pointer'
                    onClick={() => dispatch(toggleComplete(task))}>
                    {task.description}
                </Text>
                <BtnDelete task={task} />
                <BtnUpdate task={task} />
            </HStack>
    }

    if (!tasks.length) {
        return (
            <>
                <FormAdd />
                <Box maxW='80%'>
                    <Image mt='20px' w='98%' maxW='350' src={img} 
                    alt='Sua lista está vazia :(' />
                </Box>
            </>
        );
    }
  return (
      <>
        <FormAdd />
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            p='5'
            borderRadius='lg'
            w='100%'
            maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            alignItems='stretch'
            >
            
            {tasks.map(myTask)}    
        </VStack>

        <Flex>
            <BtnDeleteAll />
        </Flex>
    </>
  );
}

export default TaskList;
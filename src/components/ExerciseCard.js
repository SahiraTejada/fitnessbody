import React from 'react';
import {Link} from 'react-router-dom';
import { Button,Stack,Typography } from '@mui/material';

const ExerciseCard = ({ exercises}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercises.id}`}>
        <img src={exercises.gifUrl} alt={exercises.name} loading="lazy"/>
        <Stack direction="row">
          <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercises.bodyPart}
          </Button>
          <Button sx={{ ml: '21px', color: '#fff', background: '#6e6e6e', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
            {exercises.target}
          </Button>
        </Stack>
          <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" className='text-title'>
              {exercises.name}
          </Typography>
    </Link>
  )
}

export default ExerciseCard
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Paper, TextField, Typography } from '@mui/material';

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function App() {
  const [cache, setCache] = useState({});
  const [inputNumber, setInputNumber] = useState(0);
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const num = parseInt(e.target.value);
    setInputNumber(num);
    if (num > 0) {
      const calculatedResult = cache[num] || factorial(num);
      setCache({ ...cache, [num]: calculatedResult });
      setResult(calculatedResult);
    } else {
      setResult(null);
    }
  };

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' gutterBottom>
        Factorial Calculator (Manual Cache)
      </Typography>
      <TextField 
        type='number'
        label='Enter a number'
        value={inputNumber}
        onChange={handleInputChange}
        variant='outlined'
        fullWidth
        margin='normal'
      />
      {result !== null && (
        <Paper elevation={3} style={{ padding: '16px', marginTop: '16px' }}>
          <Typography variant='body1'>
            Factorial of {inputNumber}:
          </Typography>
          <Typography variant='body1' color='primary'>
            {cache[inputNumber] || 'Calculating...'}
          </Typography>
        </Paper>
      )}
    </Container>
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
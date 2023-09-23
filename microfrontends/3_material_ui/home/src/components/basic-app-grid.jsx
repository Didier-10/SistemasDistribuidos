import { Grid, Paper, Typography } from '@mui/material';
import theme from '../styles/theme';

export default function BasicAppGrid() {
    return(
        <Grid container sx={{ height: '100vh' }}>
          <Grid item xs={8} sx={{ padding: 0.5 }}>
            <Paper sx={ theme.customStyles.paper }>
              <Typography variant='h6'>xs=8</Typography>
              <Typography variant='body1'>Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ padding: 0.5 }}>
            <Paper sx={ theme.customStyles.paper }>
              <Typography variant='h6'>xs=4</Typography>
              <Typography variant='body1'>Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ padding: 0.5 }}>
            <Paper sx={ theme.customStyles.paper }>
              <Typography variant='h6'>xs=4</Typography>
              <Typography variant='body1'>Content</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8} sx={{ padding: 0.5 }}>
            <Paper sx={ theme.customStyles.paper }>
              <Typography variant='h6'>xs=8</Typography>
              <Typography variant='body1'>Content</Typography>
            </Paper>
          </Grid>
        </Grid>
    );
}
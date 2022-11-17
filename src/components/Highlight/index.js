import { Grid } from '@mui/material';
import React from 'react';
import HighlightCard from './HighlightCard';

function Highlight({summary}) {
    return ( 
        <Grid container spacing={3}>
      {summary.map((data) => (
        <Grid item sm={4} xs={12}>
          <HighlightCard
            title={data.title}
            count={data.count}
            type={data.type}
          />
        </Grid>
      ))}
    </Grid>
    );
}

export default Highlight;
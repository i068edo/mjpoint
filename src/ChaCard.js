import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import { green, pink } from '@mui/material/colors';
import rank1Photo from './rankPhoto/rank1.png';
import rank2Photo from './rankPhoto/rank2.png';
import rank3Photo from './rankPhoto/rank3.png';
import rank4Photo from './rankPhoto/rank4.png';
import ten from './ten.png';


export default function ChaCard({ cha, kaze, rank, point }) {

    let rankPhotoName = '';
    if (rank == '1位') {
        rankPhotoName = rank1Photo;
    } else if (rank == '2位') {
        rankPhotoName = rank2Photo;
    } else if (rank == '3位') {
        rankPhotoName = rank3Photo;
    } else if (rank == '4位') {
        rankPhotoName = rank4Photo;
    }


    return (
        <Card sx={{ display: 'flex', flexDirection: 'column', ml: 1, mb: 1 , maxWidth: 260}}>

            <CardContent sx={{ flex: '1 0 auto' }}>
                <Box sx={{ display: 'flex' }}>
                    <Avatar sx={{ bgcolor: green[800], pl: 1, pr: 1, mt: 4, ml: 1 }} aria-label="cha" variant="rounded">{cha}</Avatar>
                    <Avatar sx={{ bgcolor: pink[400], mt: 4, ml: 2, mr: 1 }}>{kaze}</Avatar>
                    <CardMedia
                        component="img"
                        height="80"
                        sx={{ width: 100 }}
                        src={rankPhotoName}
                        alt="rankPhoto"
                    />
                </Box>
            </CardContent>

            <CardContent sx={{ flex: '1 0 auto', display: 'flex' }}>
                <Typography component="div" variant="h3" >
                    {point}
                </Typography>
                <CardMedia
                    component="img"
                    height="60"
                    sx={{ width: 60 , pl: 3}}
                    src={ten}
                    alt="ten"
                />
            </CardContent>


        </Card>
    );
}
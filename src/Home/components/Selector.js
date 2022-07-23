import React, { useState, useEffect } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles'
import CheckIcon from '@mui/icons-material/Check';
import { spin } from '../animations/flash'

const useStyles = makeStyles(theme => ({
    cssNumber: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',


    },
    paperCssNumber: {
        display: 'flex',
        padding: '10px',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#3e2c6a1f',
        transition: '0.5s',
        "&:hover": {
            backgroundColor: '#3e2c6a',
            color: 'white',
            boxShadow: ' 0px 0px 6px 0px #000000'
        },

    },
    activeHoverClass: {
        backgroundColor: '#3e2c6a',
        color: 'white',
        boxShadow: ' 0px 0px 6px 0px #000000'
    },
    cssOptions: {
        width: ' 30px',
        height: ' 30px',
        background: ' #ffffff8a',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #724802',
    }



}))

const Selector = ({ item, clickHandler }) => {
    const classes = useStyles();
    const [activeIcon, setActiveIcon] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
    })
    const [activeHover, setActiveHover] = useState(
        {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
            7: false,
            8: false,
        }
    )
    const [activeFlash, setActiveFlash] = useState([1, 2, 3, 4, 5, 6, 7, 8])
    const number = [
        {
            name: 'Venezuela',
            option: 'A',
            id: 1,


        }, {
            name: 'Colombia',
            option: 'B',
            id: 2,



        }, {
            name: 'Peru',
            option: 'C',
            id: 3,



        }, {
            name: 'Argentina',
            option: 'D',
            id: 4


        }, {
            name: 'Brazil',
            option: 'E',
            id: 5


        }, {
            name: 'Boliviana',
            option: 'F',
            id: 6


        }, {
            name: 'Mexico',
            option: 'G',
            id: 7


        }, {
            name: 'Dubai',
            option: 'H',
            id: 8
        },
    ]
    useEffect(() => {




    }, []);


    const send = (id) => {


        if (id === 1) {
            setActiveFlash({ 1: true, })
            setActiveIcon({ 1: true })
            setActiveHover({ 1: true })

        }
        if (id === 2) {
            setActiveFlash({ 2: true })
            setActiveIcon({ 2: true })
            setActiveHover({ 2: true })
        }
        if (id === 3) {
            setActiveFlash({ 3: true })
            setActiveIcon({ 3: true })
            setActiveHover({ 3: true })
        }
        if (id === 4) {
            setActiveFlash({ 4: true })
            setActiveIcon({ 4: true })
            setActiveHover({ 4: true })
        }
        if (id === 5) {
            setActiveFlash({ 5: true })
            setActiveIcon({ 5: true })
        }
        if (id === 6) {
            setActiveFlash({ 6: true })
            setActiveIcon({ 6: true })
        }
        if (id === 7) {
            setActiveFlash({ 7: true })
            setActiveIcon({ 7: true })
        }
        if (id === 8) {
            setActiveFlash({ 8: true })
            setActiveIcon({ 8: true })
        }

        setTimeout(() => {
            clickHandler(item.link, item.i)
        }, 500);


    }
    return (

        <Grid container spacing={1}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 200,
                        height: 50,
                    },
                }}
            >
                {
                    number.map((data, index) => (

                        <Paper onClick={() => send(data.id)}
                            sx={{
                                animation:
                                    ((activeFlash[1] && data.id === 1) && `${spin} 0.5s 1` ||
                                        (activeFlash[2] && data.id === 2) && `${spin} 0.5s 1` ||
                                        (activeFlash[3] && data.id === 3) && `${spin} 0.5s 1` ||
                                        (activeFlash[4] && data.id === 4) && `${spin} 0.5s 1` ||
                                        (activeFlash[5] && data.id === 5) && `${spin} 0.5s 1` ||
                                        (activeFlash[6] && data.id === 6) && `${spin} 0.5s 1` ||
                                        (activeFlash[7] && data.id === 7) && `${spin} 0.5s 1` ||
                                        (activeFlash[8] && data.id === 8) && `${spin} 0.5s 1`)
                            }}
                            className={[classes.paperCssNumber, `${activeHover[1] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[2] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[3] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[4] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[5] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[6] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[7] && data.id === 1 && classes.activeHoverClass ||
                                activeHover[8] && data.id === 1 && classes.activeHoverClass
                                }`]}>


                            <div className={classes.cssOptions}>
                                {data.option}
                            </div>
                            <div className={classes.cssNumber} >
                                {data.name}
                            </div>
                            <div>
                                {
                                    ((activeIcon[1] && data.id === 1) && <CheckIcon /> ||
                                        (activeIcon[2] && data.id === 2) && <CheckIcon /> ||
                                        (activeIcon[3] && data.id === 3) && <CheckIcon /> ||
                                        (activeIcon[4] && data.id === 4) && <CheckIcon /> ||
                                        (activeIcon[5] && data.id === 5) && <CheckIcon /> ||
                                        (activeIcon[6] && data.id === 6) && <CheckIcon /> ||
                                        (activeIcon[7] && data.id === 7) && <CheckIcon /> ||
                                        (activeIcon[8] && data.id === 8) && <CheckIcon />)
                                }
                            </div>

                        </Paper>
                    ))
                }
            </Box>
        </Grid>
    )
}

export default Selector
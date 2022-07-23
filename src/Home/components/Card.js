import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles'
import CheckIcon from '@mui/icons-material/Check';
import { spin } from '../animations/flash'






const useStyles = makeStyles(theme => ({

    cardEditOk: {
        background: '#ffffff82',
        "&:hover": {
            backgroundColor: '#ffffffd4'
        },
        transition: '0.5s',
    },
    rounde: {
        width: '30px',
        height: '30px',
        background: 'white',
        borderRadius: '15px',
        margin: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cssNumber: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paperCssNumber: {
        background: '#582a0082',
        transition: '0.5s',
        "&:hover": {
            backgroundColor: '#582a00',
            color: 'white',
            boxShadow: ' 0px 0px 6px 0px #000000'
        },

    },

}))



const Card = ({ item, clickHandler }) => {
    const classes = useStyles();
    const [animateFlash, setAnimateFlash] = useState({
        item1: false,
        item2: false,
        item3: false,
    })
    const [activeClass, setActiveClass] = useState({
        item1: false,
        item2: false,
        item3: false,
    });

    const [activeRounde, setActiveRounde] = useState({
        rounde1: false,
        rounde2: false,
        rounde3: false,
    });





    const sendItem1 = () => {
        setActiveClass({ item1: true, item2: false, item3: false })
        setActiveRounde({ rounde1: true, rounde2: false, rounde3: false })
        setAnimateFlash({ item1: true })
        setTimeout(() => {
            clickHandler(item.link, item.i)
        }, 500);


    }
    const sendItem2 = () => {
        setActiveClass({ item1: false, item2: true, item3: false })
        setActiveRounde({ rounde1: false, rounde2: true, rounde3: false })
        setAnimateFlash({ item2: true })
        setTimeout(() => {
            clickHandler(item.link, item.i)
        }, 500);


    }
    const sendItem3 = () => {
        setActiveClass({ item1: false, item2: false, item3: true })
        setActiveRounde({ rounde1: false, rounde2: false, rounde3: true })
        setAnimateFlash({ item3: true })
        setTimeout(() => {
            clickHandler(item.link, item.i)
        }, 500);

    }
    useEffect(() => { }, []);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}

            /*  (  activeFlash && index === 0) || 
             (  activeFlash && index === 1) || 
             (  activeFlash && index === 2) || 
             (  activeFlash && index === 3) || 
             (  activeFlash && index === 4) || 
             (  activeFlash && index === 5) || 
             (  activeFlash && index === 6) || 
             (  activeFlash && index === 7) || 
             (  activeFlash && index === 8) && `${spin} 0.5s 1` */
            >
                <Paper sx={{ animation: animateFlash.item1 && `${spin} 0.5s 1` }}
                    /* onMouseEnter={() => setActiveRounde1(true)}
                    onMouseLeave={() => setActiveRounde1(false)} */
                    style={{
                        boxShadow: activeClass.item1 && ' #d1d1d16e 0px 0px 7px 0px',
                        background: activeClass.item1 && '#443cc152'
                    }}
                    onClick={sendItem1}
                    classes={{ root: classes.cardEditOk }} elevation={3}
                >
                    <div className={activeRounde.rounde1 && activeClass.item1 && classes.rounde}>
                        {
                            activeClass.item1 ? <CheckIcon /> : ''
                        }
                    </div>
                </Paper>
                <Paper sx={{ animation: animateFlash.item2 && `${spin} 0.5s 1` }}
                    style={{
                        boxShadow: activeClass.item2 && ' #d1d1d16e 0px 0px 7px 0px',
                        background: activeClass.item2 && '#443cc152'
                    }}
                    /* onMouseEnter={() => setActiveRounde1(true)}
                    onMouseLeave={() => setActiveRounde1(false)} */
                    onClick={sendItem2}
                    classes={{ root: classes.cardEditOk }} elevation={3}
                >
                    <div className={activeRounde.rounde2 && activeClass.item2 && classes.rounde}>
                        {
                            activeClass.item2 ? <CheckIcon /> : ''
                        }
                    </div>
                </Paper>
                <Paper sx={{ animation: animateFlash.item3 && `${spin} 0.5s 1` }}
                    style={{
                        boxShadow: activeClass.item3 && ' #d1d1d16e 0px 0px 7px 0px',
                        background: activeClass.item3 && '#443cc152'
                    }}
                    /* onMouseEnter={() => setActiveRounde1(true)}
                    onMouseLeave={() => setActiveRounde1(false)} */
                    onClick={sendItem3}
                    classes={{ root: classes.cardEditOk }} elevation={3}
                >
                    <div className={activeRounde.rounde3 && activeClass.item3 && classes.rounde}>
                        {
                            activeClass.item3 ? <CheckIcon /> : ''
                        }
                    </div>
                </Paper>
            </Box>

        </>

    );
}

export default Card

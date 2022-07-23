import React, { useState, useEffect } from 'react';
import { Input, Icon } from 'antd';
import { isMobile } from 'react-device-detect';
import '../App.css'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/Check';
import { makeStyles } from '@mui/styles'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Container from '@mui/material/Container';
import Card from './components/Card';
import Selector from './components/Selector';
import InputString from './components/InputString';
import FechaPicker from './components/FechaPicker';





const useStyles = makeStyles(theme => ({

  buttonEditOk: {
    background: '#582a0082',
    "&:hover": {
      backgroundColor: '#582a00'
    }

  }

}))

export default function Questions({ item, index, isSubmit, inputDataHandler, submitBtnHandler }) {


  const classes = useStyles();
  const [value, setValue] = useState({});



  /*   useEffect(() => {
      // Update the document title using the browser API
      document.getElementById("0").focus();
      console.log('render');
      
      
    }, []);
   */




  const clickHandler = (link, i) => {
    console.log(i);
    window.location.href = `#${link}`;

    setTimeout(() => {
      document.getElementById(i.toString()).focus();
    }, 1100);
  };

  const inputHandler = (e) => {
    console.log(e.target.name, e.target.value);
    console.log(value);

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
    inputDataHandler(e.target.name, e.target.value);
  };

  const submitHandler = () => {
    submitBtnHandler();
  };

  return (
    <>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >

          <Box noValidate sx={{ mt: 3, paddingLeft: 10, paddingRight: 10 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <div className="title">
                  <h2>
                    <span className="count">
                      {index + 1} &nbsp;
                      <Icon type="arrow-right" />
                    </span>&nbsp;
                    <span className="title">
                      {item.title}
                    </span>
                  </h2>
                </div>
              </Grid>
              <Grid item xs={12} sm={12}>
                <InputString index={index} clickHandler={clickHandler} item={item} inputHandler={inputHandler} />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Card item={item} clickHandler={clickHandler} />
              </Grid>
              <Grid item xs={12} lg={12}>
                <Selector item={item} clickHandler={clickHandler} />
              </Grid>
              <Grid item xs={12} lg={4}>
                <FechaPicker />
              </Grid>
              <Grid item xs={12}>
                {
                  isSubmit ?
                    <Button id="submit-btn" onClick={submitHandler}>
                      Enviar
                    </Button>
                    :
                    <div>
                      <Button classes={{ root: classes.buttonEditOk }}
                        className='buttonEditOk'
                        onClick={() => clickHandler(item.link, item.i)}
                        variant="contained" endIcon={<CheckIcon />}
                      >
                        Ok
                      </Button>
                      {/*  <Button
                        hidden={isMobile}
                        icon="check"
                        id="enter-btn"
                        onClick={() => clickHandler(item.link, item.i)}
                      >
                        Siguiente
                      </Button> */}
                      <span className="press-enter"> press <span className="bold">ENTER <KeyboardReturnIcon /> </span></span>
                    </div>
                }
              </Grid>

            </Grid>

          </Box>
        </Box>

      </Container>







      {/* 
      <Input
        placeholder="Escribe tu respuesta..."
        name={item.id}
        id={index}
        className="typeform-input"
        onPressEnter={() => clickHandler(item.link, item.i)}
        // style={{ marginBottom: '5%', backgroundColor: '#F1ECE2' }}
        onChange={
          inputHandler
        }
      /> */}





    </>
  );
}

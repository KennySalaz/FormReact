import React from 'react'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';



const InputString = ({clickHandler, item , inputHandler, index}) => {
    return (
        <>

            <TextField
                sx={{
                    input: {
                        fontSize: '30px',
                        textTransform: 'uppercase'
                    }
                }}
                id={index}
                InputLabelProps={{ shrink: true }}
                inputProps={{
                    sx: {
                        "&::placeholder": {
                            color: '#00000073',
                            fontSize: '30px',
                            textTransform: 'capitalize'
                        }
                    }
                }}
                variant="standard"
                placeholder='Type your answer here...'
                name={item.id}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        clickHandler(item.link, item.i)
                    }
                }}
                onChange={
                    inputHandler
                }
                fullWidth
            />

        </>
    )
}

export default InputString
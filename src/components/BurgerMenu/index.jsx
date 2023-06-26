import { Close } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import {Dialog} from '@mui/material';


const BurgerMenu = () => {
    const [open, setOpen] = useState(false)
    return (

        <Box sx={{ display: { xs: 'blok', md: 'none' } }}>
            <IconButton onClick={() => {
                setOpen(!open)
            }}>
                {
                    open
                        ?
                        <Close />
                        : <MenuIcon />
                }
            </IconButton>
           

                <Dialog
                    open={open}
                    onClose={() => { setOpen(false) }}
                    fullScrin
                >

                    <Stack flexDirection='row'
                        justifyContent='flex-end'

                    >

                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => setOpen(false)}
                        >
                            <Close />
                        </IconButton>
                    </Stack>
                    <Typography>salam</Typography>
                    <Typography>sagol</Typography>

                </Dialog>
           
        </Box>

    )
}

export default BurgerMenu
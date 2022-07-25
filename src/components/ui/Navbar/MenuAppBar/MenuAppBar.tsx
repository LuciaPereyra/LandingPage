import { Box, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Close, Menu } from '@mui/icons-material';

export const MenuAppBar = () => {

  const [visible, setVisible] = useState<boolean>(false)

  const open = () => {
    setVisible(!visible)
  }

  return (
    <IconButton
      onClick={open}
      // // size="small"
      // edge="start"
      color="inherit"
      aria-label="open drawer"
      sx={{ mr: 0 }}
      disableRipple={true}
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
      // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minWidth: '85px' }} >
          {visible
            ?
            <>
              <Menu />{'Menú'}
            </>
            :
            <>
              <Close />{'Cerrar'}
            </>
          }
        </Box>
      </Typography>
    </IconButton>
  )
}

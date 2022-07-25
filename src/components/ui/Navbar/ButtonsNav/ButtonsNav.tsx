import { Box } from '@mui/material'
import React from 'react'
import { ButtonPrimary } from '../../../commons/ButtonPrimary'

export const ButtonsNav = () => {
    return (
        <>
            <Box>
                <ButtonPrimary variant='contained'>suscribite</ButtonPrimary>
            </Box>
            <Box>
                <ButtonPrimary variant='outlined'>ingresar</ButtonPrimary>
            </Box>
        </>
    )
}

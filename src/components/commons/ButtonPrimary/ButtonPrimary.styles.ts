import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ theme, variant, children }) => ({
  ...(variant === "outlined" && {
    fontWeight: 600,
    backgroundColor: theme.palette.common.white,
    color: '#0074c4',
    '&:hover': {
      backgroundColor: '#0074c4',
      color: '#ffff',
    },
  }),
  ...(children === "suscribite" && {
    fontWeight: 600,
    letterSpacing: "0.25px",
    lineHeight: "16px",
    height: "36px",
    width: "134px",
    position: "absolute",
    backgroundColor: 'yellow',
    color: theme.palette.common.black,
    '&:hover': {
      backgroundColor: 'yellow',
    },
  }),
}));

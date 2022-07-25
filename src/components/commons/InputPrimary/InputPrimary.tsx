import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";

interface Props {
    name: string;
    value: any;
    label: string;
    error?: boolean;
    onChange?: any;
}

export const InputPrimary: FC<Props> = (props) => {
    const { name, value, label, error = null, onChange } = props;

    return (
        <TextField
            variant="filled"
            size="small"
            InputProps={{ disableUnderline: true }}
            label={label}
            value={value}
            name={name}
            onChange={onChange}
            {...(error && { error: true, helperText: error })}
        />
    );
};

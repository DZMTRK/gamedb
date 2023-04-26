import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

const AddButton = () => {
    return (
        <Stack direction="row" spacing={2}>
            <Button variant="contained">+ Add Item</Button>
            <Button variant="contained" endIcon={<DeleteIcon />} color="warning">Delete Item</Button>
        </Stack>
    )
}

export default AddButton;
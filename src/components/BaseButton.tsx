import React from 'react';
import {Button} from '@mui/material';

const BaseButton = ({ variant, color,  text} : any) => {

  return <Button variant={variant} color={color}  type="submit" >{text}</Button>  ;
};

export default BaseButton;

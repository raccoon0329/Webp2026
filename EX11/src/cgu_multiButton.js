import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

const changeText = (event) => {
    console.log(event.currentTarget)
    event.currentTarget.innerText = event.currentTarget.innerText + "被點了"
}

const MultiButton = (num) => {
    var output = [];
    output.push(
        <IconButton color="primary" aria-label="add to shopping cart" key="1" onClick={changeText}>
            <AddShoppingCartIcon />
        </IconButton>
    )
    output.push(
        <IconButton color="primary" aria-label="delete" key="2" onClick={changeText}>
            <DeleteIcon />
        </IconButton>
    )
    output.push(
        <IconButton color="primary" aria-label="add an alarm" key="3" onClick={changeText}>
            <AlarmIcon />
        </IconButton>
    )
    return output;
}

export default MultiButton;

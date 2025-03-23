


import { ListItem, ListItemIcon, ListItemText,styled } from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';


const Detail = styled(ListItem)`
    margin-top : 10px;

`


const Transaction = ({ transaction }) => {
 
    const color = transaction.amount > 0 ? 'Green' : 'Red';


    return(
        <Detail style = {{background:`${color}`,color:`#fff` }}>
            <ListItemIcon>
                <DeleteIcon/>
                 </ListItemIcon>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{transaction.amount}</ListItemText>
        </Detail>
        
    )

}
export default Transaction;

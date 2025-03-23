import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

import {Typography,styled,Box} from '@mui/material';

//component
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransactions from './components/NewTransactions';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`

const Component = styled(Box)`
  display : flex ;
  background: #fff;
  width : 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;

  & > div {
    height: 70vh ;
    width : 50%;
    padding: 10px;
  }
`
function App() {

  const [transactions,setTransactions] = useState([
    { Id: 1, text: 'Momos',amount: -100 },
    { Id: 2, text: 'Salary',amount: 50000 },
    { Id: 3, text: 'Book',amount: -500 },
    { Id: 4, text: 'Bonus',amount: 5000 }

  ]);

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions}/>
          <ExpenseCard transactions={transactions}/>
          <NewTransactions setTransactions={setTransactions}/>
        </Box>
        <Box> 
          <Transactions transactions = {transactions}setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;

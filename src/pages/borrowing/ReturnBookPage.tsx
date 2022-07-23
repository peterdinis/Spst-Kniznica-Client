import ReturnBook from '../../components/borrowing/ReturnBook'
import { Header } from '../../components/shared';
import {Button, TextField} from "@mui/material";

function ReturnBookPage() {
  return (
    <>
        <Header name="Vrátenie knihy" />
        <ReturnBook name="Vrátenie knihy" btnName="Chcem vrátiť knihu">
            <TextField placeholder="Id knihy" />
            <Button>Vrátiť knihu</Button>
        </ReturnBook>
    </>
  )
}

export default ReturnBookPage
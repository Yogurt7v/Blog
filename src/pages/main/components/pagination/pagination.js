import styled from "styled-components";
import { Button } from "../../../../components/button/button";

const PaginationContainer = ({className, setPage, page}) =>{


    return (
        <div className={className}>
            <Button onClick={() => setPage(1)}>В начало</Button>
            <Button onClick={() => setPage(page-1)}>Предыдущая</Button>
            <div className="current-page">Страница: {page}</div>
            <Button onClick={() => setPage(page+1)}>Следующая</Button>
            <Button onClick={() => setPage(2)}>В конец</Button>
        </div>
    )
}


export const Pagination = styled(PaginationContainer)`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 10px;

    Button{
        width: 100px;
    }

    & .current-page{
        font-weight: bold;
        width: 100px;
        height: 30px;
        text-align: center;
    }
`
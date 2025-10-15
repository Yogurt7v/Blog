import styled from "styled-components";
import PropTypes from "prop-types"; 
import { Button } from "../../../../components/button/button";

const PaginationContainer = ({className, setPage, lasPage, page}) =>{


    return (
        <div className={className}>
            <Button onClick={() => setPage(1)} className={page === 1 ? "disabled" : ""}>В начало</Button>
            <Button onClick={() => setPage(page - 1)} className={page === 1 ? "disabled" : ""}>Предыдущая</Button>
            <div className="current-page">Страница: {page}</div>
            <Button onClick={() => setPage(page+1)} className={page === lasPage ? "disabled" : ""}>Следующая</Button>
            <Button onClick={() => setPage(2)} className={page === lasPage ? "disabled" : ""}>В конец</Button>
        </div>
    )
}


export const Pagination = styled(PaginationContainer)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 12px;
    padding: 16px 0 24px 0;

    Button{
        width: 110px;
    }

    & .current-page{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        width: 110px;
        height: 32px;
        text-align: center;
    }

    & .disabled {
        pointer-events: none;
        background-color: white;
        border: 1px solid grey;
        opacity: 0.35;
      }

    @media (max-width: 600px) {
        flex-wrap: wrap;
        gap: 8px;

        Button{
            width: calc(50% - 8px);
            min-width: 140px;
        }

        & .current-page{
            width: 100%;
            order: -1;
        }
    }
`


Pagination.propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    lasPage: PropTypes.number.isRequired,
}
"use client"

import { Pagination } from 'react-bootstrap';

export default function PaginationItems() {
    let pageNumber = 0;

    return(
        <div>
            <Pagination>
                <Pagination.First />
                <Pagination.Item onClick={() => {pageNumber = 1}}>1</Pagination.Item>
                <Pagination.Item onClick={() => {pageNumber = 2}}>2</Pagination.Item>
                <Pagination.Item onClick={() => {pageNumber = 3}}>3</Pagination.Item>
                <Pagination.Prev />
            </Pagination>
        </div>
    )
};

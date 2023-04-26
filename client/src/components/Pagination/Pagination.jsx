import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Pagination({ goToPrevPage, goToNextPage, goToPage, currentPage, lastPage }) {
    const buttons = [];

    for (let i = 0; i < lastPage; i++) {
        buttons.push(
            <button onClick={() => goToPage(i)}>{i + 1}</button>
        )
    }

    return (
        <div className="pagination">
            <button onClick={goToPrevPage} disabled={currentPage === 0}>←</button>
            {buttons}
            <button onClick={goToNextPage} disabled={currentPage === lastPage - 1}>→</button>
        </div>
    );
};
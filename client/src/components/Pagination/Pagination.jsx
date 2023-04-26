import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Pagination({ goToPrevPage, goToNextPage, currentPage, lastPage }) {
    const buttons = [];

    return (
        <div className="pagination">
            <button onClick={goToPrevPage} disabled={currentPage === 0}>←</button>
            {buttons}
            <button onClick={goToNextPage} disabled={currentPage === lastPage}>→</button>
        </div>
    );
};
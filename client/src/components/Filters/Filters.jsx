import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function Filters({ orderBy, onOrderByChange, sortBy, onSortByChange, created, onCreatedChange, types, type, onTypeChange }) {
    const allTypes = [{
        id: "all",
        name: "All"
    }];
    allTypes.push(...types);

    return (
        <div>
            <select value={orderBy} onChange={(e) => {
                onOrderByChange(e.target.value)
            }}>
                <option value="name">Name</option>
                <option value="life">Life</option>
                <option value="attack">Attack</option>
                <option value="defense">Defense</option>
                <option value="speed">Speed</option>
                <option value="weight">Weight</option>
                <option value="height">Height</option>
            </select>

            <select value={sortBy} onChange={(e) => {
                onSortByChange(e.target.value)
            }}>
                <option value="ASC">Ascendent</option>
                <option value="DESC">Descendent</option>
            </select>

            <select value={created} onChange={(e) => {
                onCreatedChange(e.target.value)
            }}>
                <option key="created-all" value="all">All</option>
                <option value="local">Local</option>
                <option value="api">API</option>
            </select>

            {types && <select value={type} onChange={(e) => {
                onTypeChange(e.target.value)
            }}>
                {allTypes.map(t => {
                    return <option key={"created-" + t.id} value={t.id}>{t.name}</option>
                })}
            </select>}
        </div>
    );
};
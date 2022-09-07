import React from 'react';
import TitlePage from '../../Components/TitlePage/TitlePage';
import Calendar from '../../Components/TradingView/Calendar/Calendar';

import "./TimeLine.css";

function TimeLine() {
    return (
        <>
            <TitlePage title='Agenda' />
            <Calendar colorTeheme='dark' />
        </>
    );
}

export default TimeLine;
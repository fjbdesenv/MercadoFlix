import TitlePage from '../../Components/TitlePage/TitlePage';
import Calendar from '../../Components/TradingView/Calendar/Calendar';

import "./TimeLine.css";

export default function TimeLine():JSX.Element {
    return (
        <section id='page-calendar'>
            <TitlePage title='Calendário Económico' />
            <Calendar colorTeheme='dark' />
        </section>
    );
}
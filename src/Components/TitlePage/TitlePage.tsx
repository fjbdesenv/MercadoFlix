import './TitlePage.css';

interface params{
    title:string
}

export default function TitlePage ({title}:params):JSX.Element {
    return(
        <div id='page-title' >
            {title}
        </div>
    );
}
import "./CardImg.css";

interface params{
    imgURL: string;
    link:string;
    name:string
}

export default function CardImg({imgURL, link, name}:params):JSX.Element {
    return (
        <div className="card-img">
            <a href={link} target='_blank' rel="noreferrer">
                <img src={imgURL} alt={'Imagem do site' + {name}}  />
                <div className="card-name">{name}</div>
            </a>
        </div>
    );
}
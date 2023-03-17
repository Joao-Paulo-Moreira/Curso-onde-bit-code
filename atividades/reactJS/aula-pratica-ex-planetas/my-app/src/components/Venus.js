import './Components.css';

const Venus = (props) => {
    return (
        <div className="PlanetaVenus">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/pnaleta-venus.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/f5c821353c57b50225cda29678232840.jpg" alt="venus-img"></img>
        </div>
    )
}

export default Venus;
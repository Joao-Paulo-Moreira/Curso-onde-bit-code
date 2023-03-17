import './Components.css';

const Marte = (props) => {
    return (
        <div className="PlanetaMarte">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/planeta-marte.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/8465a67d00eda6b73b4485921e5fac7a.jpg" alt="marte-img"></img>
        </div>
    )
}

export default Marte;
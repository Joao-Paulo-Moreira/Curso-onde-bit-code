import './Components.css';

const Mercurio = (props) => {
    return (
        <div className="PlanetaMercurio">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/mercurio.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/e8a8426182d5c9d3ce5d4d6e6358b128.jpg" alt="mercurio-img"></img>
        </div>
    )
}

export default Mercurio;
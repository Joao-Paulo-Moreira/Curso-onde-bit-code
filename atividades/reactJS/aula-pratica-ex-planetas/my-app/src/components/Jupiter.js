import './Components.css';

const Jupiter = (props) => {
    return (
        <div className="PlanetaJupiter">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/planeta-jupiter.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/85dfe11818ecc3da047829f202a28f7e.jpg" alt="jupiter-img"></img>
        </div>
    )
}

export default Jupiter;
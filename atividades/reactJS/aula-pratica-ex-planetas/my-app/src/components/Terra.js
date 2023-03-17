import './Components.css';

const Terra = (props) => {
    return (
        <div className="PlanetaTerra">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/planeta-terra.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.todamateria.com.br/upload/pl/an/planetaterra-cke.jpg?auto_optimize=low" alt="terra-img"></img>
        </div>
    )
}

export default Terra;
import './Components.css';

const Netuno = (props) => {
    return (
        <div className="PlanetaNetuno">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/netuno.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/10/planeta-netuno.jpg" alt="netuno-img"></img>
        </div>
    )
}

export default Netuno;
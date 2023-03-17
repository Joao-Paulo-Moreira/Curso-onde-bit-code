import './Components.css';

const Saturno = (props) => {
    return (
        <div className="PlanetaSaturno">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/saturno.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/0f0d865207019b9ec3e29ecc22be0e17.jpg" alt="saturno-img"></img>
        </div>
    )
}

export default Saturno;
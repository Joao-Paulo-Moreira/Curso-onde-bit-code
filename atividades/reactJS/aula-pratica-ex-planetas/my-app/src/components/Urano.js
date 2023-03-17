import './Components.css';

const Urano = (props) => {
    return (
        <div className="PlanetaUrano">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p><a href="https://mundoeducacao.uol.com.br/geografia/planeta-urano.htm" target={"_blank"} rel='noreferrer'>{props.link}</a></p>
            <img src="https://s2.static.brasilescola.uol.com.br/be/2021/04/planeta-urano.jpg" alt="urano-img"></img>
        </div>
    )
}

export default Urano;
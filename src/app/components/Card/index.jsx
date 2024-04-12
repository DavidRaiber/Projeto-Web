export default function Card(props){
    return(
    <div class="card">
        <img src={props.imagem}></img>
        <div>
            <h1>{props.title}</h1>
            <p>
                {props.desc}
            </p>
        </div>
    </div>

    );
}
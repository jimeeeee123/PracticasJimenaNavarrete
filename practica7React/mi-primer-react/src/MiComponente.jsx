export default function MiComponente({titulo, lugar}){
    return(
        <section className="card">
            <h2 className="card-title">{titulo}</h2>
            <h3 className="card-subtitle">{lugar}</h3>
        </section>
    )
}
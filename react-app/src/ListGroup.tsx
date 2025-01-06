
const cities = ['New York', 'Melbourne', 'Tokyo', 'London', 'Borkata e gei', 'Nikola i toi']

function ListGroup() {
    return (
        <>
            <ul className="list-group">
                {cities.map((city) => <li key="{city}" className="list-group-item">{city}</li>)}
            </ul>
        </>
    )
}
export default ListGroup;
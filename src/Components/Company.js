
function Company({ FilterCompany }) {

    return (<div>
        {FilterCompany.map((Company, index) => (
            <table>
                <tr>
                    <th>
                        {Company.name}
                    </th>
                    <th>
                        {Company.end}
                    </th>
                </tr>
            </table>
        ))}
    </div>
    )
}
export default Company
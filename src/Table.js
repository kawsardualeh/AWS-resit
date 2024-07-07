function Table() {
    return(
        <div className='my-5'>
            <p>
                In this table below it shows the different downtimes based on the availability scores.
            </p>
            <table className='table table-bordered mt-5'>
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">99%</th>
                <th scope="col">99.9%</th>
                <th scope="col">99.95%</th>
                <th scope="col">99.99%</th>
                <th scope="col">99.999%</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Daily</th>
                    <td>14m 24s</td>
                    <td>1m 26s</td>
                    <td>43s</td>
                    <td>9s</td>
                    <td>0.86s</td>
                </tr>
                <tr>
                    <th scope="row">Weekly</th>
                    <td>1h 40m 48s</td>
                    <td>10m 5s</td>
                    <td>5m 2s</td>
                    <td>1m</td>
                    <td>6s</td>
                </tr>
                <tr>
                    <th scope="row">Monthly</th>
                    <td>7h 12m </td>
                    <td>43m 12s</td>
                    <td>21m 36s</td>
                    <td>4m 19s</td>
                    <td>26s</td>
                </tr>
                <tr>
                    <th scope="row">Yearly</th>
                    <td>3d 15h 36m</td>
                    <td>8h 45m 36s</td>
                    <td>4h 22m 48s</td> 
                    <td>52m 34s</td>
                    <td>5m 15s</td>
                </tr>
            </tbody>
            </table>
      </div>  
    )
}

export default Table;
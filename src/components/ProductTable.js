import React from 'react'


function ProductTable(props) {
    return (
        <div>
        <table width="500px" style={{marginLeft:"350px",marginTop:"250px"}}>
            <tbody>
            <tr>
            <th style={{border:"4px solid black" }}>Good category</th>
            <th style={{border:"4px solid black" }}>Actual good</th>
            <th style={{border:"4px solid black" }}>El soum</th>
            </tr>
          
            {
                props.Products.map(product=>
                    <tr>
                    <td key={product.category} style={{border:"3px solid black" }}>{product.category}</td>
                    <td key={product.name} style={{border:"3px solid black" }}>{product.name}</td>
                    <td key={product.price} style={{border:"3px solid black" }}>{product.price}</td>
                    </tr>
                    )
            }
     </tbody>
        </table>
        
        </div>
        
    )
}

export default ProductTable;
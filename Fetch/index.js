fetch('./product.json')
.then(products => products.json())
.then((res) => {
    let alldata = document.querySelector("#data-result")
    let result = ""
    res.map((e)=>{
        result += `
        <tr>
        <td>${e.name}</td>
        <td>${e.price}</td>
        <td>${e.inventory}</td>
        <td>${e.productCode}</td>
        </tr>
        `
    })
    alldata.innerHTML = result
})
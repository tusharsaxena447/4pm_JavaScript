fetch('https://dummyjson.com/products')
.then(data => data.json())
.then((res) => {
    let alldata = document.querySelector("#data-result")
    let result = ""
    res.products.map((e)=>{
        result += `
        <tr>
        <td>${e.id}</td>
        <td>${e.title}</td>
        <td>${e.description}</td>
        <td>${e.price}</td>
        <td>${e.discountPercentage}</td>
        </tr>    `
    })
    alldata.innerHTML = result
})



// .then(json => console.log(json))
            
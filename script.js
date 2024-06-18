const request=fetch("https://dummyjson.com/products");

request.then((result)=>{
   const convertData = result.json();
convertData.then(renderUI);
convertData.then((data) =>{
    console.log(data)

});
}).catch(( error )=>{
alert(" ❌❌u have error❌❌")
})


const renderUI =(data) =>{

const products = data.products;
root.innerHTML = ` `;
for(let i=0;i<products.length;i++){
    const card = document.createElement('div');

    card.className = 'product-card';

    card.innerHTML = `<h3> ${products[i].title} <h3>

     <p>${products[i].price }</p>`;
    root.appendChild(card);

    const img = document.createElement('img')
    img.setAttribute('src',products[i].thumbnail);
    card.appendChild(img);
}
};

function searchProducts(e){
    const searchText = e.target.value;
 const pr =   fetch (`https://dummyjson.com/products/search?q=${searchText}`)
    pr.then((result)=>{
        const pr2 = result.json();
        pr2.then((data)=>{
            renderUI(data);
        });

});
}

// async faz com que eu consiga fazer que minha function seja assincrona 
// quando eu pego o const response e faço um fetch com o a url da API ele me retornar um promise
// me retornando uma promessa logo eu coloco o await na frente para só executar quando a promessa não mais uma promesas de fato 



async function fetchprodutos() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const Jsonbody = await response.json();

        show(Jsonbody)

    } catch (error) {
        console.error(error)
    }
}
fetchprodutos()

function show(users) {
    console.log(users);

    const [a, b, c, d, e, f, g] = users;
    console.log(a,b,c,d,e,f)

    let output = "";
    output += `<h1>Nome:${a.name}</h1>`;
    output += `<p>Email:${a.email}</p>`;
    output += `<p>cidade:${a.address.city}</p>`;
    output += `<p>Rua:${a.address.street}</p>`;

    let outputcard = "";
    outputcard += `<h1>Nome:${b.name}</h1>`;
    outputcard += `<p>Email:${b.email}</p>`;
    outputcard += `<p>cidade:${b.address.city}</p>`;
    outputcard += `<p>Rua:${d.address.street}</p>`;
    let outputcard1 = "";
    outputcard1 += `<h1>Nome:${c.name}</h1>`;
    outputcard1 += `<p>Email:${c.email}</p>`;
    outputcard1 += `<p>cidade:${c.address.city}</p>`;
    outputcard1 += `<p>Rua:${c.address.street}</p>`;

    let outputcard2 = "";
    outputcard2 += `<h1>Nome:${d.name}</h1>`;
    outputcard2 += `<p>Email:${d.email}</p>`;
    outputcard2 += `<p>cidade:${d.address.city}</p>`;
    outputcard2 += `<p>Rua:${d.address.street}</p>`;

    let outputcard3 = "";
    outputcard3 += `<h1>Nome:${e.name}</h1>`;
    outputcard3 += `<p>Email:${e.email}</p>`;
    outputcard3 += `<p>cidade:${e.address.city}</p>`;
    outputcard3 += `<p>Rua:${e.address.street}</p>`;
    
    let outputcard4 = "";
    outputcard4 += `<h1>Nome:${f.name}</h1>`;
    outputcard4 += `<p>Email:${f.email}</p>`;
    outputcard4 += `<p>cidade:${f.address.city}</p>`;
    outputcard4 += `<p>Rua:${f.address.street}</p>`;



    /* for( user of users){
           
}
*/
    document.getElementById('n1').innerHTML = output;
    document.getElementById('n2').innerHTML = outputcard;
    document.getElementById('n3').innerHTML = outputcard1;
    document.getElementById('n4').innerHTML = outputcard2;
    document.getElementById('n5').innerHTML = outputcard3;
    document.getElementById('n6').innerHTML = outputcard4;
}







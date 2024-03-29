const API_URL = 'https://api.escuelajs.co/api/v1';

async function fetchData(url){
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



async function reviewData(){
    try {
        const response1 = await fetchData(`${API_URL}/products/`);
        const reponse2 = await fetchData(`${API_URL}/products/${response1[0].id}`);
        console.log(response1[2], reponse2);

    } catch (err) {
        console.log(err);
    }
}

reviewData();
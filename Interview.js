const URL = 'https://www.somefakeurl.com';

async function fetchData() {
    const data = await fetch(URL);
    const result = await data.json();

    return result;
}
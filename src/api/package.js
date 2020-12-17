const BASE_URL = 'https://registry.npmjs.org/';

export async function getPackage(query , offset = 0) {
    const response = await fetch(`${BASE_URL}-/v1/search?text=${query}&size=10&from=${offset}`);
    return  await response.json();

}

import { Bairro } from './../../../DTOs/Bairro';

function generateBairros() {
    const data: Bairro[] = [];
    for (let x = 1; x < 25; x++) {
        data.push({ Id: x, Nome: 'Bairro ' + x });
    }
    return data;
}

export default generateBairros;

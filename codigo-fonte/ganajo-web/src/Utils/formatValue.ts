function formatValue(value : number, places : number, auxBefore? : string, auxAfter? : string){
    return (auxBefore ?? '') + " " + value.toFixed(places).toString().replace('.', ',') + " " + (auxAfter ?? '');
}

export default formatValue;
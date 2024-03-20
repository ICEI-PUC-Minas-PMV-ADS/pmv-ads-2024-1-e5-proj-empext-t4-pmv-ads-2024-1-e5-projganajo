function formatStringLimit(value : string, start : number, end : number, auxAfter? : string){
    return value.slice(start, end) + ((value.length > end) ? auxAfter : '');
}

export default formatStringLimit;
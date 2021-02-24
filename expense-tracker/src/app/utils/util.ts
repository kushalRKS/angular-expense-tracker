export const saveToMemory = (data:Array<any>) => {
    console.log(data);
    if(data.length == 0) resetMemory(data);
    localStorage.setItem('transactions', JSON.stringify(data))
}

const resetMemory = (data:Array<any>) => {
    localStorage.removeItem('transactions');
}
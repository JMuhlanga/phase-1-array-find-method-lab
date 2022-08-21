// code your solution here
function superbowlWin(record){
    let singledElement;
    singledElement = record.find(el => el.result === "W");

    if(singledElement){
        return singledElement.year;
    }else{
        return undefined;
    } 
}









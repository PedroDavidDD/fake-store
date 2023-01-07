
const getClothesByAll = ( objDecision = {  
    decision: "",
    value: "", 
    range:{ my: 0, mn: 0}, 
    data: []
} ) => {

    switch (objDecision.decision) {
        case "all":
            objDecision.data;
            break;
        case "mayor":
            objDecision.data = objDecision.data.filter( dato => dato.range.my > dato.range.mn );
            break;
        default:  
            objDecision.data = !!objDecision.data && objDecision.data.filter( 
                // dato => dato[objDecision.decision].includes(`${objDecision.value}`)
                dato => dato[objDecision.decision] === (`${objDecision.value}`)
            );
            break;
    }

    return objDecision;
}
 
export default getClothesByAll;



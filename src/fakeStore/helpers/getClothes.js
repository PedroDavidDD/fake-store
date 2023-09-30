
const getClothesByAll = ( objDecision = {  
    decision: "",
    value: "", 
    range:{ my: 0, mn: 0}, 
    information: []
} ) => {

    switch (objDecision.decision) {
        case "all":
            objDecision.information;
            break;
        case "mayor":
            objDecision.information = objDecision.information.filter( dato => dato.range.my > dato.range.mn );
            break;
        case "filter":
                if (!objDecision.information || objDecision.information.length === 0) return;
            
                // Filtramos los productos que coincidan con el valor ingresado
                const filtered  = objDecision.information.filter((product) =>
                  product.title.toLowerCase().includes(objDecision.value)
                );
                // Actualizamos el estado de los productos filtrados
                objDecision.information = filtered;
            break;
        default:  
            objDecision.information = !!objDecision.information && objDecision.information.filter( 
                // dato => dato[objDecision.decision].includes(`${objDecision.value}`)
                dato => dato[objDecision.decision] == (`${objDecision.value}`)
            );
            break;
    }
    
    return {
        ...objDecision,
        objDecision
    };
}
 
export default getClothesByAll;



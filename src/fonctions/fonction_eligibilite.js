import ftto from '../data/ftto_ftth_ftte/output_ftto_36_mois.json'
import ftte from '../data/ftto_ftth_ftte/output_ftte_36_mois.json'
const remove_apostrophe = (string) => {
    let str = [];
    let final;
    
    for(var i=0; i<string.length ; i++){
        str[i] = string[i].toUpperCase();
        if(string.charCodeAt(i) === 8217){
            str[i] = ' '
        }
    }
    
    for(i=0; i<str.length ; i++){
        final = final + str[i];
    }

    final = final.replace('undefined', '');

    return final;
}

export function strNoAccent_Apostrophe(a) {
    var b="áàâäãåçéèêëíïîìñóòôöõúùûüýÁÀÂÄÃÅÇÉÈÊËÍÏÎÌÑÓÒÔÖÕÚÙÛÜÝ",
        c="aaaaaaceeeeiiiinooooouuuuyAAAAAACEEEEIIIINOOOOOUUUUY",
        d="";
    for(var i = 0, j = a.length; i < j; i++) {
      var e = a.substr(i, 1);
      d += (b.indexOf(e) !== -1) ? c.substr(b.indexOf(e), 1) : e;
    }

    d = remove_apostrophe(d);
    return d.toUpperCase();
  }

  export function RemoveDoubleValue(arr) {
    let result = []
    let bool_100mb = false;
    let bool_1Gb = false;
    let bool_10Gb = false;
    let bool_25Gb = false;
    let bool_100Gb = false;
    arr.forEach(e => {
        if(e.libelle.includes('100 Mb/s') && e.technologie === "Fibre FTTO" && !bool_100mb){
            result.push({
                debit:"100 Mb/s",
                technologie:"Fibre FTTO"
            })
            bool_100mb = true;
        }
        else if(e.libelle.includes("1 Gb/s")  && e.technologie === "Fibre FTTO" && !bool_1Gb){
            result.push({
                debit:"1 Gb/s",
                technologie:"Fibre FTTO"
            })
            bool_1Gb = true;
        }
        else if(e.libelle.includes("10 Gb/s") && e.technologie === "Fibre FTTO" && !bool_10Gb){
            result.push({
                debit:"10 Gb/s",
                technologie:"Fibre FTTO"
            })
            bool_10Gb = true;
        }
        else if(e.libelle.includes("25 Gb/s") && e.technologie === "Fibre FTTO" && !bool_25Gb){
            result.push({
                debit:"25 Gb/s",
                technologie:"Fibre FTTO"
            })
            bool_25Gb = true;
        }
        else if(e.libelle.includes("100 Gb/s") && e.technologie === "Fibre FTTO" && !bool_100Gb){
            result.push({
                debit:"100 Gb/s",
                technologie:"Fibre FTTO"
            })
            bool_100Gb = true
        }
    })

    organizeOffres(result)


    return result;
    

}

function organizeOffres(arr){
    arr[arr.length - 1].debit = "100 Gb/s"
    arr[arr.length - 2].debit = "25 Gb/s"

    return arr
}

export function removewithfilter(arr) {
    let outputArray = arr.filter(function(v, i, self)
    {
          
        // It returns the index of the first
        // instance of each value
        return i === self.indexOf(v);
    });
    return outputArray;
}


export function lessExpensivePrice_ftto(final_tab_argument, pourcentage) {
    const final_lowest_price_tab = []
    const prix_2 = []
    const prix_4 = []
    const prix_5 = []
    const prix_10 = []
    const prix_20 = []
    const prix_30 = []
    const prix_40 = []
    const prix_50 = []
    const prix_100 = []
    const prix_200 = []
    const prix_300 = []
    const prix_500 = []
    const prix_1000 = []
    const prix_2000 = []
    const prix_4000 = []
    const prix_10000 = []

    ftto.forEach(offre_ftto => { // ftto contient le fichier JSON ou il y a les prix
        final_tab_argument && final_tab_argument.forEach(e_offre => { //final_tab_argument contient la réponse en JSON de l'API appliwave
            if(e_offre.code === offre_ftto.Reference){ 
                e_offre.prix = Math.floor(parseFloat(offre_ftto.Prix) * pourcentage) // si les références correspondent on crée le prix et on l'ajoute dans final_tab_argument
                //e_offre.prix = Math.floor(Math.round((parseFloat(offre_ftto.Prix) * pourcentage) * 100) / 100)
            }
        })
    })    

    console.log(final_tab_argument)

    final_tab_argument.forEach((e, index) => {
        if(e.debit === "2Mbps" && e.prix){
            prix_2.push({prix:e.prix, index:index})
        }
        if(e.debit === "4Mbps" && e.prix){
            prix_4.push({prix:e.prix, index:index})
        }
        if(e.debit === "5Mbps" && e.prix){
            prix_5.push({prix:e.prix, index:index})
        }
        if(e.debit === "10Mbps" && e.prix){
            prix_10.push({prix:e.prix, index:index})
        }
        if(e.debit === "20Mbps" && e.prix){
            prix_20.push({prix:e.prix, index:index})
        }
        if(e.debit === "30Mbps" && e.prix){
            prix_30.push({prix:e.prix, index:index})
        }
        if(e.debit === "40Mbps" && e.prix){
            prix_40.push({prix:e.prix, index:index})
        }
        if(e.debit === "50Mbps" && e.prix){
            prix_50.push({prix:e.prix, index:index})
        }
        if(e.debit === "100Mbps" && e.prix){
            prix_100.push({prix:e.prix, index:index})
        }
        if(e.debit === "200Mbps" && e.prix){
            prix_200.push({prix:e.prix, index:index})
        }
        if(e.debit === "300Mbps" && e.prix){
            prix_300.push({prix:e.prix, index:index})
        }
        if(e.debit === "500Mbps" && e.prix){
            prix_500.push({prix:e.prix, index:index})
        }
        if(e.debit === "1Gbps" && e.prix){
            prix_1000.push({prix:e.prix, index:index})
        }
        if(e.debit === "2Gbps" && e.prix){
            prix_2000.push({prix:e.prix, index:index})
        }
        if(e.debit === "4Gbps" && e.prix){
            prix_4000.push({prix:e.prix, index:index})
        }
        if(e.debit === "10Gbps" && e.prix){
            prix_10000.push({prix:e.prix, index:index})
        }
    })

    /*if(prix_2.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_2)])
    if(prix_4.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_4)])
    if(prix_5.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_5)])*/
    if(prix_10.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_10)])
    /*if(prix_20.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_20)])
    if(prix_30.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_30)])
    if(prix_40.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_40)])*/
    //if(prix_50.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_50)])
    if(prix_100.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_100)])
    /*if(prix_200.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_200)])
    if(prix_300.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_300)])*/
    //if(prix_500.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_500)])
    if(prix_1000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_1000)])
    //if(prix_2000.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_2000)])
    if(prix_4000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_4000)])
    if(prix_10000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_10000)])

    

    return final_lowest_price_tab;
}

export function lessExpensivePrice_ftte(final_tab_argument, pourcentage){
    const final_lowest_price_tab = []
    const prix_2 = []
    const prix_4 = []
    const prix_5 = []
    const prix_10 = []
    const prix_20 = []
    const prix_30 = []
    const prix_40 = []
    const prix_50 = []
    const prix_100 = []
    const prix_200 = []
    const prix_300 = []
    const prix_500 = []
    const prix_1000 = []
    const prix_2000 = []
    const prix_4000 = []
    const prix_10000 = []

    ftte.forEach(offre_ftte => {
        final_tab_argument && final_tab_argument.forEach(e_offre => {
            if(e_offre.code === offre_ftte.Reference){
                e_offre.prix = Math.floor(parseFloat(offre_ftte.RecurentCharge) * pourcentage)
                //e_offre.prix = Math.floor(Math.round((parseFloat(offre_ftto.Prix) * pourcentage) * 100) / 100)
            }
        })
    })    

    final_tab_argument.forEach((e, index) => {
        if((e.debit === "2Mbps" || e.debit === "BPEA 2/100") && e.prix){
            prix_2.push({prix:e.prix, index:index})
        }
        if(e.debit === "4Mbps" && e.prix){
            prix_4.push({prix:e.prix, index:index})
        }
        if(e.debit === "5Mbps" && e.prix){
            prix_5.push({prix:e.prix, index:index})
        }
        if((e.debit === "10Mbps" || e.debit === "BPEA 10/100") && e.prix){
            prix_10.push({prix:e.prix, index:index})
        }
        if(e.debit === "20Mbps" && e.prix){
            prix_20.push({prix:e.prix, index:index})
        }
        if(e.debit === "30Mbps" && e.prix){
            prix_30.push({prix:e.prix, index:index})
        }
        if(e.debit === "40Mbps" && e.prix){
            prix_40.push({prix:e.prix, index:index})
        }
        if(e.debit === "50Mbps" && e.prix){
            prix_50.push({prix:e.prix, index:index})
        }
        if((e.debit === "100Mbps" || e.debit === "") && e.prix){
            prix_100.push({prix:e.prix, index:index})
        }
        if(e.debit === "200Mbps" && e.prix){
            prix_200.push({prix:e.prix, index:index})
        }
        if(e.debit === "300Mbps" && e.prix){
            prix_300.push({prix:e.prix, index:index})
        }
        if(e.debit === "500Mbps" && e.prix){
            prix_500.push({prix:e.prix, index:index})
        }
        if(e.debit === "1Gbps" && e.prix){
            prix_1000.push({prix:e.prix, index:index})
        }
        if(e.debit === "2Gbps" && e.prix){
            prix_2000.push({prix:e.prix, index:index})
        }
        if(e.debit === "4Gbps" && e.prix){
            prix_4000.push({prix:e.prix, index:index})
        }
        if(e.debit === "10Gbps" && e.prix){
            prix_10000.push({prix:e.prix, index:index})
        }
    })

    /*if(prix_2.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_2)])
    if(prix_4.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_4)])
    if(prix_5.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_5)])*/
    if(prix_10.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_10)])
    /*if(prix_20.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_20)])
    if(prix_30.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_30)])
    if(prix_40.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_40)])*/
    //if(prix_50.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_50)])
    if(prix_100.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_100)])
    /*if(prix_200.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_200)])
    if(prix_300.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_300)])*/
    //if(prix_500.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_500)])
    if(prix_1000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_1000)])
    //if(prix_2000.length > 0) final_lowest_price_tab.push(finalTab[lowerstPriceElement(prix_2000)])
    if(prix_4000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_4000)])
    if(prix_10000.length > 0) final_lowest_price_tab.push(final_tab_argument[lowerstPriceElement(prix_10000)])

    //console.log(final_lowest_price_tab)
    return final_lowest_price_tab;
}

export function lowerstPriceElement(prix_element){
    const tab = []
    let final_index = 0;

    prix_element.forEach(element => {
        tab.push(element.prix)
    })

    prix_element.forEach(e => {
        if(e.prix === Math.min(...tab)){
            final_index = e.index
        }
    })

    return final_index;
}


export default remove_apostrophe;
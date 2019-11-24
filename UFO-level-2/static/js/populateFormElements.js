let cmbCity = d3.select("#cmbCity")
function populateCityCombo(){
    cmbCity.selectAll("option").remove()    
    let city = []
    //push all elements in an array
    tableData.forEach(function(d){
        city.push(d.city)
    })

    //putting array in set to get distinct records
    // https://stackoverflow.com/questions/33089695/how-can-i-sort-an-es6-set
    cmbCity.append("option").text("Select All")
    Array.from(new Set(city)).sort().forEach(function(d){
        cmbCity.append("option").text(d)
    })
}//populateCityCombo

let cmbState = d3.select("#cmbState")
function populateStateCombo(){
    cmbState.selectAll("option").remove()    
    let state = []
    //push all elements in an array
    tableData.forEach(function(d){
        state.push(d.state)
    })

    //putting array in set to get distinct records
    // https://stackoverflow.com/questions/33089695/how-can-i-sort-an-es6-set
    cmbState.append("option").text("Select All")
    Array.from(new Set(state)).sort().forEach(function(d){
        cmbState.append("option").text(d)
    })
}//populateStateCombo

let cmbCountry = d3.select("#cmbCountry")
function populateCountryCombo(){
    cmbCountry.selectAll("option").remove()    
    let country = []
    //push all elements in an array
    tableData.forEach(function(d){
        country.push(d.country)
    })

    //putting array in set to get distinct records
    // https://stackoverflow.com/questions/33089695/how-can-i-sort-an-es6-set
    cmbCountry.append("option").text("Select All")
    Array.from(new Set(country)).sort().forEach(function(d){
        cmbCountry.append("option").text(d)
    })
}//populateCountryCombo


let cmbShape = d3.select("#cmbShape")
function populateShapeCombo(){
    cmbShape.selectAll("option").remove()    
    let shape = []
    //push all elements in an array
    tableData.forEach(function(d){
        shape.push(d.shape)
    })

    //putting array in set to get distinct records
    // https://stackoverflow.com/questions/33089695/how-can-i-sort-an-es6-set
    cmbShape.append("option").text("Select All")
    Array.from(new Set(shape)).sort().forEach(function(d){
        cmbShape.append("option").text(d)
    })
}//populateShapeCombo

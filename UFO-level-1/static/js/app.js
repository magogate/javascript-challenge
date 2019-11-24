/**
 * Created By: Mandar R. Gogate
 * Created On: 11/23/2019
 * Comments: Since I am an old school, I will always be using anonymous
 *          functions.
 */

// from data.js
let tableData = data;

populateCityCombo()
populateStateCombo()
populateCountryCombo()
populateShapeCombo()

// appending table row data into a table
myTBody = d3.select("#ufo-table").select("tbody")

//when page gets loaded initially, all data will get fill in
populateDataToTable(tableData)

function removeDataFromTable(){
    myTBody.selectAll("tr").remove()
}

function populateDataToTable(myData){
    myData.forEach(function(d){            
        myRow = myTBody.append("tr")
        myRow.append("td").text(d.datetime)
        myRow.append("td").text(d.city)
        myRow.append("td").text(d.state)
        myRow.append("td").text(d.country)
        myRow.append("td").text(d.shape)
        myRow.append("td").text(d.durationMinutes)
        myRow.append("td").text(d.comments)
    })
}//end of populateDataToTable

let cmdSearch = d3.select("#filter-btn")
cmdSearch.on("click", function(d){    

    let inputDate = d3.select("#datetime").property("value")
    let inputCity = d3.select("#cmbCity").property("value")
    let inputState = d3.select("#cmbState").property("value")
    let inputCountry = d3.select("#cmbCountry").property("value")
    let inputShape = d3.select("#cmbShape").property("value")

    filteredData = tableData.filter(function(d){
        //if selection is empty do not filter the data        
        if(inputDate == "" && inputCity == "Select All" && inputState == "Select All" && inputCountry == "Select All" && inputShape == "Select All" ){
            return d.datetime    
        }else{
            return (inputDate != "" ? d.datetime == inputDate : true)
                        && (inputCity != "Select All" ? d.city == inputCity : true)
                        && (inputState != "Select All" ? d.state == inputState : true)
                        && (inputCountry != "Select All" ? d.country == inputCountry : true)
                        && (inputShape != "Select All" ? d.shape == inputShape : true)
        }        
    })    
    //based on user input, filter main dataset and re-populate table
    if(filteredData.length == 0){ 
        alert("There is no data available for this selection...!")
    }else {
        removeDataFromTable()
        populateDataToTable(filteredData)    
    }
})//end of on click

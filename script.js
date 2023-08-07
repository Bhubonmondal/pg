
var submittedInfo = []; // Array to store submitted information
var p=0,b=0,s=0,t=0;
var pb=0,ps=0,pt=0;


document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Get the selected option
  var option = document.getElementById("option").value;
  
  // Get the entered value
  var value = document.getElementById("value").value;
  
  // Store the submitted information in an object
  var submittedData = {
    option: option,
    value: value
  };
  
  // Add the submitted information to the array
  submittedInfo.push(submittedData);
  
  // Update the displayed table of submitted information
  updateSubmittedTable();
  
  // Clear the form inputs
  document.getElementById("option").value = "";
  document.getElementById("value").value = "";
});

function updateSubmittedTable() {
  var submittedBody = document.getElementById("submittedBody");
  
  // Clear the existing table body
  while (submittedBody.firstChild) {
    submittedBody.firstChild.remove();
  }
  
  // Populate the table with the submitted information
  submittedInfo.forEach(function(data) {
    var row = document.createElement("tr");
    
    // Create the cells for each column
    var cellWhoPaid = document.createElement("td");
    cellWhoPaid.innerText = data.option;
    var cellP = document.createElement("td");
    var cellB = document.createElement("td");
    var cellS = document.createElement("td");
    var cellT = document.createElement("td");
    
    // Fill the corresponding cells based on the selected option
    if (data.option === "P") {
      cellP.innerText = data.value;
      p=data.value/4;
    } else if (data.option === "B") {
      cellB.innerText = data.value;
      b=data.value/4;
    } else if (data.option === "S") {
      cellS.innerText = data.value;
      s=data.value/4;
    } else if (data.option === "T") {
      cellT.innerText = data.value;
      t=data.value/4;
    }

  

       pb=b-p;
       ps=s-p;
       pt=t-p;
       
       if(pb<0){
              pb=b+p
              document.getElementById("pb").innerHTML="P "+pb+" rupees from B";
       }
       else{
              document.getElementById("pb").innerHTML="P pay "+pb+" to B";
       }
       if(ps<0){
              ps=s+p
              document.getElementById("ps").innerHTML="P took "+ps+" rupees from S";
       }
       else{
              document.getElementById("ps").innerHTML="P pay "+ps+" to S";
       }
       if(pt<0){
              pt=t+p;
              document.getElementById("pt").innerHTML="P took "+pt+" rupees from T";
       }
       else{
              document.getElementById("pt").innerHTML="P pay "+pt+" to T";
       }



    // Append the cells to the row
    row.appendChild(cellWhoPaid);
    row.appendChild(cellP);
    row.appendChild(cellB);
    row.appendChild(cellS);
    row.appendChild(cellT);
    
    // Append the row to the table body
    submittedBody.appendChild(row);
  });
  
  // Display the table
  document.getElementById("result").style.display = "block";
  

}


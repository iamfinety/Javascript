
let items=[];
//set the event handler for the four buttons
function init() {
	//console.log("init");
	document.getElementById("addButton").addEventListener("click", addItem);
    document.getElementById("removeButton").addEventListener("click", removeItem);
    document.getElementById("highlightButton").addEventListener("click", hightlightItem);
    // the sort function is found in the website offered by Sean
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_array_of_objects
    document.getElementById("sortButton").addEventListener("click",() => {
        items.sort((a,b) => {
            if(a.name < b.name){
                return -1;
            }
            if(a.name > b.name){
                return 1;
            }
        });
        display();
    });
}
// handle the add button,if nothing input and pressed add button, then alart user, otherwise add the item to the itemlist
function addItem(){
    let name = document.getElementById("itemName");
    if(name.value === ""){
        alert("Please enter valid item");
    }
    let item ={name:document.getElementById("itemName").value, checked:false, highlighed:false}
    items.push(item);
    document.getElementById("itemName").value="";
    display();
}
//remove the checkbox and its label respectively
function removeItem(){
    let boxes = document.getElementsByTagName("input");
    let texts = document.getElementsByTagName("label");
    for(let i=0;i<boxes.length;i++){
        box = boxes[i];
        let text = texts[i];
        if(box.checked){
            box.parentNode.removeChild(box);
            text.parentNode.removeChild(text);
        }
    }
}
// set the checkbox and label inside the div
function display(){
    let existingNode = document.getElementById("area");
    existingNode.innerHTML = "";
    for(let item of items){
        let newitem = document.createElement("div");
        newitem.id = item.name;
        existingNode.appendChild(newitem);
        let newBox = document.createElement("input")
        newBox.type ="checkbox";
        newBox.name= "boxes";
        newBox.id = item.name +"id";
        newitem.appendChild(newBox);
        let label= document.createElement("label");
        label.htmlFor = item.name+"id";
        label.appendChild(document.createTextNode(item.name));
        newitem.appendChild(label);
    }
    

}
function hightlightItem(){
    // for(let item of items){
    //     let boxes = document.getElementsByTagName("input");
    //     for(let i=0;i<boxes.length;i++){
    //         box = boxes[i];
    //         if(box.checked && item.highlighed == false){
    //             box.parentNode.style.backgroundColor = "green";
    //             item.highlighed = true;
    //         }
    //     }

    // }
    for(let item of items){
        let divs = document.getElementById(item.name);
        let child = divs.childNodes;
        for(let i=0;i<child.length;i++){
            if(child[i].checked){
                if(item.highlighed === false){
                    divs.style.backgroundColor = "green";
                    item.highlighed = true;
                }
                else if(item.highlighed === true){
                    divs.style.backgroundColor = "white";
                    item.highlighed = false;
                }
            }
        }
    }
}
// function sort(){
//     // let existingNode = document.getElementById("area");
//     // let child = existingNode.childNodes;

//     // for(let i=0;i<child.length;i++){
//     //     if (child[i].value > child[i+1].value){
//     //         child[i+1].insertBefore(child[i]);
//     //         display();
//     //     }
//     // }
//     // for(let item of items){
//     //     let specificDiv1 = document.getElementById(item.name).value;
//     //     let specificDiv2 = document.getElementById(item.name).value;
//     //     if(specificDiv1 > specificDiv2){
//     //         specificDiv2.insertBefore(specificDiv1);
//     //     }
//     // }
//     let list = document.getElementById("area");
//     let switching=true;
//     while(switching){
//         switching= false;
//         let b=list.getElementsByTagName("label");
//         for(let i=0;i<(b.length-1);i++){
//             let shouldSwitch = false;
//             if(b[i].innerHTML.toLowerCase() > b[i+1].innerHTML.toLowerCase()){
//                 shouldSwitch = true;
//                 break;
//             }
//             if(shouldSwitch){
//                 b[i].parentNode.insertBefore(b[i+1],b[i]);
//                 switching = true;
//             }
//         }
        
//     }

// }
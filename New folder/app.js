
var klist = document.getElementById("neww")
function addition(){
    var add = document.getElementById("input")
    if(add.value === ""){
        alert("Please type something")
    }

    var check = document.createElement("input")
    check.setAttribute("type" , "checkbox")


        var btn = document.createElement("input")
        btn.setAttribute("type" , "button")
        btn.setAttribute("value" , "del")
        btn.setAttribute("onclick" , "dele(this)")
        btn.setAttribute("class" , "delbtn")

        var editbtn = document.createElement("input")
        editbtn.setAttribute("type" , "button")
        editbtn.setAttribute("value" , "edit")
        editbtn.setAttribute("onclick" , "edit(this)")
        editbtn.setAttribute("class" , "btns")
        
        // editbtn.style.marginLeft = "60%"
        var newpara = document.createElement("p")
        var para = document.createTextNode(add.value)
        newpara.appendChild(check)
        newpara.appendChild(para)
        newpara.appendChild(btn)
        newpara.appendChild(editbtn)
        // newpara.appendChild(edit())
        var sher = document.getElementById("neww");
        var sher1 = sher.appendChild(newpara)
        sher.appendChild(newpara)
        add.value = "";
    }
    function dele(e){
        e.parentNode.remove()
        console.log(e)
    }
    function edit(e){
        // var val =  e.parentNode.childNodes[1]
        // var input = document.createElement("input")
        // input.setAttribute("type","text")
        // input.setAttribute("id","inputtt")
        // input.setAttribute("value","sher")
        // input.innerHTML = val.nodeValue
        

       var val =  e.parentNode.childNodes[1]
       var promp = prompt("",val.nodeValue)
        val.nodeValue = promp
    // console.log(val)
    }
    function DeleteAll(){
      klist.innerHTML = "";
        
    }
//                      Notes about HTML with two options:
// 1-  To calling html elements we was using the elem tags like <br> and son on 
// 2-  but we can exchange this steps by using createElement("elemnt tags") then append it to the big/main tags like div or body or ul inside li cases 

// extention for store links
let storeLink = [];
let inpVal = document.querySelector("#ins_links");
let saveTab = document.querySelector("#save_tab");
let delValOut = document.querySelector("#btn_ins_out");
let outputLinks = document.querySelector("#person_obj");

    let shortDb= JSON.parse(localStorage.getItem("myLinks"));
    if(shortDb){

    storeLink= shortDb;  
    render()    
    }    

    // Button to inserst the links 
    document.querySelector("#btn_ins").addEventListener("click",function(){
        storeLink.push(inpVal.value);

        // local storage to save links inserted when you have page refresh 
                // using JSON.stringfy to convert js objects to string 
        localStorage.setItem("myLinks",JSON.stringify(storeLink));
        render() 
    })

    // Save Tabs 
        saveTab.addEventListener("click",function(){
            // 1- connect our EXT to chrome api to determine which window & tab will save 
            chrome.tabs.query(
            {active:true, lastFocusedWindow: true
            },function(tabs){
                        storeLink.push(tabs[0].url)
                        localStorage.setItem("myLinks",JSON.stringify(storeLink))
                        render() 
                       
                    }
            )
        }) 

        // Button to re read links inserted  
    delValOut.addEventListener("click",function(){
      // by this line calling data saved in local storage to show it here
     localStorage.clear()
     storeLink=[]
        render()
    })
        

  // start to reget the data inserted show it into website
 function render(){       
        // read JSON.parse to convert js string to object 
    // First one:
        let listItems= ""        
        for(let i=0; i<storeLink.length; i++){
            listItems += 
            `<li class="text-center"><a href="${storeLink[i]}" target="_blink">${storeLink[i]}</a> </li>`;    
        }
        outputLinks.innerHTML=listItems;
 
 
// Second one:
   /* for(let i=0; i<storeLink.length; i++){
        // extablish element name 
       let parg= document.createElement("li");       
       parg.innerHTML=storeLink[i]  ;   
           // append the element with main tag to appear inside html file      
       outputLinks.append(parg);     
    }*/
  }

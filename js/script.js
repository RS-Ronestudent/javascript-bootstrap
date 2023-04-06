let tag = document.querySelectorAll(".sr");
let tagArray=Array.from(tag);

tagArray.map((htmlTag)=>{

    let allClass = htmlTag.classList;
    
    let classArray=Array.from(allClass);

    classArray.map((classItem)=>{
        let itemArray=classItem.split("-");
        if(itemArray.length>1){
            itemArray.map((itm)=>{
                if(itm=="color"){
                    let color=itemArray[2];
                    htmlTag.style.color=color;
                }else if(itm=="font"){
                    let font=itemArray[2];
                    htmlTag.style.fontSize=font
                }
                else if(itm=="bg"){
                    let bg=itemArray[2];
                    htmlTag.style.background=bg
                }
            })
        }

    })
})





















// srArray.map((text)=>{
//         let textArray=Array.from(text.classList);
//         textArray.map((value)=>{
//            let valueArray= value.split("-");
//             if(valueArray.length>1){
//                 let color=valueArray[2];
//                 sr.style.color=color
//             }
//         })
// })
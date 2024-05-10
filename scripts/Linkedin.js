
function showmore(event){
   let {id}=event.target
   if(id=="button"){
      let classes=["right-li-6","right-li-7",'right-li-8','right-li-9','right-li-10']
      for(let classname=0;classname<classes.length;classname++){
         let listitem= document.getElementsByClassName(classes[classname])[0]
         if(listitem.style.display!="none"){
          listitem.style.display="none"
         }else{
          listitem.style.display="list-item"
         }
      }
   }else if(id=='Recent'){

      let content=document.getElementById('content-1');
      if(content.style.display!='none'){
         content.style.display='none'
      }else{
         content.style.display='block'
      }
   }else if(id=='Groups'){

      let content=document.getElementById('content-2');
      if(content.style.display!='none'){
         content.style.display='none'
      }else{
         content.style.display='block'
      }
   }else if(id=='Hashtags'){
      let content=document.getElementById('content-3');
      if(content.style.display!='none'){
         content.style.display='none'
      }else{
         content.style.display='block'
      }
   }



}


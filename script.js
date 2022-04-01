const List=document.querySelector('ul')
// console.log(List);
List.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI') e.target.classList.toggle('done');

})



























// const list=document.querySelector('ul');
// list.addEventListener('click',(event)=>{
//     if(event.target.tagName==='LI'){
//         event.target.classList.toggle('done');
//     }
// });


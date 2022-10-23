function $(selector){ 
    return document.querySelector(selector); 
}

//contact
function contact(e){
    e.preventDefault();
    let name=$("#name");
    let number=$("#number");
    let msg=$("#msg");
    let sub=$("#sub");
    console.log(name.value,number.value,sub.value,msg.value);
    let collections=JSON.parse(window.localStorage.getItem('contact_data'))||[];
    console.log(collections);
    let user={
        'name':name.value,
        'number':number.value,
        'msg':msg.value,
        'sub':sub.value,
    }
    collections.push(user);
    window.localStorage.setItem('contact_data',JSON.stringify(collections));
    window.alert("Data send succcessfully");

    setTimeout(function(){
        window.location.reload();
    },1000)
}
//comment
function comment(e){
    e.preventDefault();
    let msg=$("#msg");
    console.log(msg.value);
    let collections=JSON.parse(window.localStorage.getItem('comment_data'))||[];
    console.log(collections);
    let user={
        
        'msg':msg.value,
        
    }
    collections.push(user);
    window.localStorage.setItem('comment_data',JSON.stringify(collections));
    window.alert("Save your comment succcessfully");

    setTimeout(function(){
        window.location.reload();
    },1000)
}
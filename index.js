document.querySelectorAll('input').forEach(v=>{
    v.addEventListener('input',function(){
        if(this.value.length < 6) {
            alert('不能少于6位')
        }
    })
})
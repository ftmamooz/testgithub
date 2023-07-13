document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});

   
    document.getElementById('add-but').addEventListener('click',()=>{
      document.querySelector('.add-user-modal').classList.add('show')
      document.querySelector('.smokey-back').classList.remove('dis-none')
    })

    document.querySelector('.smokey-back').addEventListener('click',()=>{
      document.querySelector('.smokey-back').classList.add('dis-none')
      document.querySelector('.add-user-modal').classList.remove('show')
    })
  });
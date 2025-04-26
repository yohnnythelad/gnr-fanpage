
(() => {
    'use strict'
  
    // Obter todos os formulários aos quais queremos aplicar estilos de validação personalizados do Bootstrap
    const forms = document.querySelectorAll('.needs-validation')
    const alertSuccess = document.getElementById('alert-success')
    const alertnaosuccess=document.getElementById('alert-noSuccess')
    // Fazer um laço sobre eles e impedir a sua submissão
    Array.from(forms).forEach(form => {
      
      form.addEventListener('submit', event => {
        
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
          
          
        } 
        else {
          alertSuccess.classList.remove('d-none')
          event.preventDefault()
        }
        //alertSuccess.classList.remove('d-none')
        form.classList.add('was-validated')
        
        //event.preventDefault()
        
        

        
        
      }, false )
      
    })
  })()


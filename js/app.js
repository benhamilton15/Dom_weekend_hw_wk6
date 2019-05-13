document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFromSubmit)
  
  })

  const handleFromSubmit = function(event){
    event.preventDefault()
  
    const locate = document.querySelector('#hero-list')
    const newListItem = document.createElement('li')
    const name = document.createElement('h1')
    name.textContent = `${event.target.name.value}`
  
    const nationality = document.createElement('h2')
    nationality.textContent = `${event.target.nationality.value}`
  
    const role = document.createElement('p')
    role.textContent = `${event.target.role.value}`
  
    
  
    locate.appendChild(newListItem)
    newListItem.appendChild(name)
    newListItem.appendChild(nationality)
    newListItem.appendChild(role)
    const form = document.querySelector('#new-item-form')
    form.reset()
  }
  
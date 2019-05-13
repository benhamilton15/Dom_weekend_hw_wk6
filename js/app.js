document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFromSubmit)
  
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick)
  })

  const handleFromSubmit = function(event){
    event.preventDefault()
      
    const locate = document.querySelector('#hero-list')
    
    const newListItem = document.createElement('li')
    locate.appendChild(newListItem)

    const name = document.createElement('h1')
    name.textContent = `${event.target.name.value}`
    newListItem.appendChild(name)

    
    const nationality = document.createElement('h2')
    nationality.textContent = `${event.target.nationality.value}`
    newListItem.appendChild(nationality)
  
    const role = document.createElement('p')
    role.textContent = `${event.target.role.value}`
    newListItem.appendChild(role)
    
    event.target.reset()

  }

  const handleDeleteAllClick = function (event) {
    const readingList = document.querySelector('#hero-list');
    readingList.innerHTML = '';
  }
  
let tags = []

window.onload = function() {
    let tagContainer = document.querySelector('.tag-container')
    let input = document.querySelector('input')
    let btnLimparTodos = document.querySelector(".limpar-todos")

    input.addEventListener('keyup', addTags)
    btnLimparTodos.addEventListener("click", clearAllTags)

    function addTags(event) {
        const keyPressedIsEnter = event.key == 'Enter'
        if(keyPressedIsEnter) {
            input.value.split(',').forEach(tag => {
                if(tag.trim()) {
                    tags.push(tag.trim())
                    console.log(tag)
                }
            })

            updateTags();
            input.value = ''
        }
    }

    function updateTags() {
        clearTags()

        tags.slice().reverse().forEach(tag => {
            tagContainer.prepend(createTag(tag)) //prepend: anterior ao conteudo existente dentro da tagContainer
        });
    }

    function createTag(tag) {
        const div = document.createElement('div')
        div.classList.add('tag')

        const span = document.createElement('span')
        span.innerHTML = tag

        div.append(span) //append: depois do conteudo existente dentro da div

        const i = document.createElement('i')
        i.classList.add('far') //far fa-times-circle
        i.classList.add('fa-times-circle')
        i.setAttribute('data-item', tag)
        i.onclick = removeTag

        span.append(i)

        

        return div
    }

    function clearAllTags() {
        clearTags()
        
        tags = []
    }

    function clearTags() {
        tagContainer
            .querySelectorAll('.tag')
            .forEach(tagElement => {
                tagElement.remove()
            })
    }

    function removeTag(event) {
        const i = event.currentTarget
        const id = i.dataset.item
        const index = tags.indexOf(id)

        tags.splice(index, 1);
        updateTags();
    }
};




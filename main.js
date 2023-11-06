/* Selection des Element par leur id */
const taskInput = document.getElementById('task_input');
const addButton = document.getElementById('add_button');
const taskList = document.getElementById('task_list');

/* ajoute d'un gestionnaire d'événement qui écoute le clic sur le bouton "ajouter" */
addButton.addEventListener('click', ()=>{

    /*recuperation de la saisie dans le champ input */
    const taskText = taskInput.value.trim();
    /*trim() garantit que l'entrée de l'utilisateur n'a pas d'espaces superflus. */

    /* verifions si l'utilisateur a saisir quelque chose */
    if(taskText !== ''){

        /* Crée élément <li>, qui représente un élément de la liste de tâches. */
        const taskItem = document.createElement('li');

        /* ajouter une class dans 'li' */
        taskItem.classList.add('task');

        /* ajouter une class dans 'ul' */
        taskList.classList.add('affiche');
        
        /* Définit le contenu HTML de l'élément de tâche. */
        taskItem.innerHTML=`
        <div class = "case"><input type="checkbox"></div>
        <div class = "champText"><input type="text" value="${taskText}"></div>
        <div class = "ajout"><button> Suprimer </buttoon></div>`;

        /* ajouter une class dans le champ input="checkbox" */
        const checkboxField = taskItem.querySelector('input[type = "checkbox"]');
        checkboxField.classList.add('checkboxField');

        /* ajouter une class dans le champ input="text" */
        const textField = taskItem.querySelector('input[type = "text"]');
        textField.classList.add('textField');

        /* afficher la saisir dans "ul"*/
        taskList.appendChild(taskItem);

        /* vider le champ de saisir */
        taskInput.value= '';

       /*  suppression des taches */
       const deleteButton = taskItem.querySelector('button');

       /* ajoute d'un gestionnaire d'événement qui écoute le clic sur le bouton "button" */
       deleteButton.addEventListener('click', ()=>{
        taskList.removeChild(taskItem);
       });

       /* faire une mise à jour */
       const upDateTask = taskItem.querySelector('input[type="text"]');

       /* ajoute d'un gestionnaire d'événement qui écoute le clic sur le champ "input" */
       upDateTask.addEventListener('input', ()=>{
        taskText = upDateTask.value.trim();
       });
    }
});
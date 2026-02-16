fetch('profile.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Chyba při načítání souboru JSON');
        }
        return response.json();
    })
    .then(data => {
        document.querySelector('#name').textContent = data.name;

        const skillsList = document.querySelector('#skills');
        data.skills.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        const interestsContainer = document.querySelector('#interests');
        data.interests.forEach(interest => {
            const span = document.createElement('span');
            span.textContent = interest + " ";
            interestsContainer.appendChild(span);
        });

        const projectsContainer = document.querySelector('#projects');
        data.projects.forEach(project => {
            const projectDiv = document.createElement('div');
            let imageHtml = '';
            if (project.image) {
                imageHtml = `<img src="${project.image}" alt="${project.title}">`;
            }
            projectDiv.innerHTML = `
                <div class="project-content">
                    <div class="project-text">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">Odkaz na projekt</a>
                    </div>
                    ${imageHtml ? `<div class="project-image">${imageHtml}</div>` : ''}
                </div>
            `;
            projectsContainer.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('Došlo k chybě:', error); 
        document.body.innerHTML += '<p style="color:red">Nepodařilo se načíst data profilu.</p>';
    });
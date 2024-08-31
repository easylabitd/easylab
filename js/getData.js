// دالة لإدراج المشاريع في الصفحة
function displayProjects() {
    const projectContainer = document.querySelector('#projects .card-container');
    let projectHTML = '';

    projects.forEach(project => {
        projectHTML += `
            <div class="card">
                <img src="images/projects/${project.image}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        `;
    });

    projectContainer.innerHTML = projectHTML;
}

// دالة لإدراج الخدمات في الصفحة
function displayServices() {
    const serviceContainer = document.querySelector('#services .card-container');
    let serviceHTML = '';

    services.forEach(service => {
        serviceHTML += `
            <div class="card">
                <img src="images/services/${service.image}" alt="${service.title}">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
    });

    serviceContainer.innerHTML = serviceHTML;
}

// دالة لإدراج الأنظمة في الصفحة
function displaySystems() {
    const systemContainer = document.querySelector('#systems-services .system-card-container');
    let systemHTML = '';

    systems.forEach(system => {
        systemHTML += `
            <div class="card">
                <img src="images/systems/${system.image}" alt="${system.title}">
                <h3>${system.title}</h3>
                <p>${system.description}</p>
            </div>
        `;
    });

    systemContainer.innerHTML = systemHTML;
}

// استدعاء الدوال عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    displayProjects();
    displayServices();
    displaySystems();
});

// Sistema de filtrado
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const projectsGrid = document.getElementById('projectsGrid');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        
        // Actualizar botón activo
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filtrar proyectos
        let visibleCount = 0;
        projectCards.forEach(card => {
            const category = card.dataset.category;
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                }, visibleCount * 100);
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Mostrar estado vacío si no hay proyectos
        if (visibleCount === 0) {
            const emptyState = document.createElement('div');
            emptyState.className = 'empty-state';
            emptyState.innerHTML = `
                <div class="empty-state-icon">🔍</div>
                <p class="empty-state-text">No hay proyectos en esta categoría aún</p>
            `;
            projectsGrid.appendChild(emptyState);
        } else {
            const emptyState = projectsGrid.querySelector('.empty-state');
            if (emptyState) {
                emptyState.remove();
            }
        }
    });
});

// Animación inicial de las tarjetas
projectCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
});
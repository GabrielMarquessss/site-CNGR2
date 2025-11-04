/**
 * Script.js - Adiciona interatividade visual à página Força e Magia
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona todas as imagens dentro das galerias
    const images = document.querySelectorAll('.gallery img');

    // Define a classe CSS que será adicionada/removida para o destaque
    const highlightClass = 'section-highlight';

    // 2. Itera sobre cada imagem encontrada
    images.forEach(image => {
        // Encontra a seção pai mais próxima (hero-section) de cada imagem
        const parentSection = image.closest('.hero-section');

        if (parentSection) {
            // --- Efeito ao entrar com o mouse (mouseover) ---
            image.addEventListener('mouseover', () => {
                // Adiciona a classe de destaque à seção pai
                parentSection.classList.add(highlightClass);
            });

            // --- Efeito ao sair com o mouse (mouseout) ---
            image.addEventListener('mouseout', () => {
                // Remove a classe de destaque da seção pai
                parentSection.classList.remove(highlightClass);
            });
        }
    });

    console.log("Efeito de destaque de seção carregado. Passe o mouse sobre as imagens!");
});
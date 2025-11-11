// Espera o conteúdo da página carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Selecionar os elementos
    
    // Gatilhos de Título
    const dilletTrigger = document.getElementById('play-dillet');
    const r10Trigger = document.getElementById('play-r10');

    // Players de Áudio
    const audioDillet = document.getElementById('audio-dillet');
    const audioR10 = document.getElementById('audio-r10');

    // Botão de Parar
    const stopButton = document.getElementById('stop-button');

    // Lista de todos os áudios para facilitar o controle
    const allAudios = [audioDillet, audioR10];

    // Função para parar todas as músicas E esconder o botão
    function stopAllAudio() {
        allAudios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
        stopButton.style.display = 'none'; // Esconde o botão ao parar
    }

    // 2. Adicionar os Eventos de Clique

    // Quando clicar no título do Dillett
    dilletTrigger.addEventListener('click', () => {
        stopAllAudio();     // Para qualquer outra música (e esconde o botão)
        audioDillet.play(); // Toca a música do Dillett
        stopButton.style.display = 'block'; // Mostra o botão
    });

    // Quando clicar no título do Ronaldinho
    r10Trigger.addEventListener('click', () => {
        stopAllAudio();   // Para qualquer outra música (e esconde o botão)
        audioR10.play();  // Toca a música do R10
        stopButton.style.display = 'block'; // Mostra o botão
    });

    // Quando clicar no botão 'X' de parar
    stopButton.addEventListener('click', () => {
        stopAllAudio(); // Simplesmente chama nossa função de parar tudo
    });

});
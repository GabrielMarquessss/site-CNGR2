// Espera o conteúdo da página carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

    // 1. Selecionar os elementos
    
    // Os gatilhos (os títulos <h2> que demos IDs)
    const dilletTrigger = document.getElementById('play-dillet');
    const r10Trigger = document.getElementById('play-r10');

    // Os players de áudio (as tags <audio> que demos IDs)
    const audioDillet = document.getElementById('audio-dillet');
    const audioR10 = document.getElementById('audio-r10');

    // Lista de todos os áudios para facilitar o controle
    const allAudios = [audioDillet, audioR10];

    // Função para parar todas as músicas e rebobinar (para não tocar uma por cima da outra)
    function stopAllAudio() {
        allAudios.forEach(audio => {
            audio.pause(); // Pausa a música
            audio.currentTime = 0; // Volta para o início (segundo 0)
        });
    }

    // 2. Adicionar os Eventos de Clique

    // Quando clicar no título do Dillett
    dilletTrigger.addEventListener('click', () => {
        stopAllAudio();     // Para qualquer outra música que estiver tocando
        audioDillet.play(); // Toca a música do Dillett
    });

    // Quando clicar no título do Ronaldinho
    r10Trigger.addEventListener('click', () => {
        stopAllAudio();   // Para qualquer outra música que estiver tocando
        audioR10.play();  // Toca a música do R10
    });

});
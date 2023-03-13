/*

    OBJETIVO 1_ quando o usuario clicar no botão do trailer, a modal abrirá com o vídeo do trailer

        -passo 1- pegar o elemento do botao na tela, usando js
        -passo 2- identificar quando o usuario clicar no botão no js
        -passo 3- pegar o elemento da modal no js
        -passo 4- abrir a modal no js   


    OBJETIVO 2_ quadno usuario clicar no X, a modal fechará

        -passo 1- pegar o elemento de fechar a modal no js
        -passo 2- identificar um clique no X
        -passo 3- fechar a modal

*/




    const btn = document.querySelector('button.botao-trailer');
    const modal = document.querySelector('div.modal');
    const btnFecharModal = document.querySelector('span.fechar-modal');
    const video = document.getElementById('video');
    const linkVideo = video.scr;    

    function alternarModal(){
        modal.classList.toggle('aberto')
    }
    

    btn.addEventListener('click', () => {
        alternarModal()
        video.setAttribute('src', linkVideo);
    });

    btnFecharModal.addEventListener('click', () =>{
        alternarModal();
        video.setAttribute('src', "");
    });
    
    
 
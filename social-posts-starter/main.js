/* - Creiamo il nostro array di 5 oggetti che rappresentano ciascun post. Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data, testo del post, immagine, numero di likes.
Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es: https://picsum.photos/id/237/600/350
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
Inserire a inizio del file JavaScript una sezione di commento dove scrivere gli step richiesti di logica in italiano, per aiutarvi a ragionare prima della stesura del codice. */

const posts = [
    {
        profileImg : `unsplash.it/300/300?image=16`, //va inserito dopo (https://)
        username : `Jacopo Ferroni`,
        time : `1 settimana fa`,
        postImg : `picsum.photos/id/237/200/301`,
        like : 120,
    },

    {
        profileImg : `unsplash.it/300/300?image=17`, //va inserito dopo (https://)
        username : `Giulia Ferroni`,
        time : `2 giorni fa`,
        postImg : `picsum.photos/id/237/200/302`,
        like : 5000,
    },

    {
        profileImg : `unsplash.it/300/300?image=18`, //va inserito dopo (https://)
        username : `Carlo Ferroni`,
        time : `4 ore fa`,
        postImg : `picsum.photos/id/237/200/303`,
        like : 2000,
    },

    {
        profileImg : `unsplash.it/300/300?image=19`, //va inserito dopo (https://)
        username : `Ettore Ferroni`,
        time : `1 anno fa`,
        postImg : `picsum.photos/id/237/200/304`,
        like : 800,
    }
];


const post = document.getElementById(`container`);

post.innerHTML = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">Phil Mangione</div>
                <div class="post-meta__time">4 mesi fa</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="https://unsplash.it/600/300?image=171" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div> 
    </div>            
    </div>
`;

const change = document.querySelector(`.post__image`);

change.addEventListener(`click`, function () {
    
    let i = 0;
    const singleUser = posts[i];
    
    if(i <= posts.length) {

        post.innerHTML = `
        <div class="post">
                    <div class="post__header">
                        <div class="post-meta">                    
                            <div class="post-meta__icon">
                                <img class="profile-pic" src="https://${singleUser.profileImg}" alt="Phil Mangione">                    
                            </div>
                            <div class="post-meta__data">
                                <div class="post-meta__author">${singleUser.username}</div>
                                <div class="post-meta__time">${singleUser.time}</div>
                            </div>                    
                        </div>
                    </div>
                    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                    <div class="post__image">
                        <img src="https://${singleUser.postImg}" alt="">
                    </div>
                    <div class="post__footer">
                        <div class="likes js-likes">
                            <div class="likes__cta">
                                <a class="like-button  js-like-button" href="#" data-postid="1">
                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                    <span class="like-button__label">Mi Piace</span>
                                </a>
                            </div>
                            <div class="likes__counter">
                                Piace a <b id="like-counter-1" class="js-likes-counter">${singleUser.like}</b> persone
                            </div>
                        </div> 
                    </div>            
                </div>          
        </div>
        `;

        i++;

    }
    else if(i == posts.length) {

        i = 0;

    }

    const btn = document.querySelector(`.like-button__label`);
    
    btn.addEventListener(`click`, function() {
    
        let i = 0;
        singleUser.like += 1;
        
        post.innerHTML = `
        <div class="post">
                    <div class="post__header">
                        <div class="post-meta">                    
                            <div class="post-meta__icon">
                                <img class="profile-pic" src="https://${singleUser.profileImg}" alt="Phil Mangione">                    
                            </div>
                            <div class="post-meta__data">
                                <div class="post-meta__author">${singleUser.username}</div>
                                <div class="post-meta__time">${singleUser.time}</div>
                            </div>                    
                        </div>
                    </div>
                    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
                    <div class="post__image">
                        <img src="https://${singleUser.postImg}" alt="">
                    </div>
                    <div class="post__footer">
                        <div class="likes js-likes">
                            <div class="likes__cta">
                                <a class="like-button  js-like-button" href="#" data-postid="1">
                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                    <span class="like-button__label">Mi Piace</span>
                                </a>
                            </div>
                            <div class="likes__counter">
                                Piace a <b id="like-counter-1" class="js-likes-counter">${singleUser.like}</b> persone
                            </div>
                        </div> 
                    </div>            
                </div>          
        </div>
        `;
    
        i++;
    });

});

    


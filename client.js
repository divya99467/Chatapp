// // ek variable milega io
 const socket = io()

// let name;
// let textarea = document.querySelector('#textarea');
// let messageArea= document.querySelector('.message__area');
// do {
//     name = prompt('Please enter your name: ')
// } while(!name)

// textarea.addEventListener('keyup',(e)=>{

//     if(e.key ==='Enter'){
//         sendMessage(e.target.value)
//     }
// });


// function sendMessage(message){
//     let msg={
//         user:name,
//         message:message.trim()//white space trim ho jaega



//     }
//     //append
//     appendMessage(msg,'outgoing');
//     textarea.value = '';
//     scrolltobottom();
    
//     //send to server
//     socket.emit('message',msg)

    


// }

// function appendMessage(msg,type){
//     let mainDiv = document.createElement('div')
//     let className = type

//     mainDiv.classList.add(className,'message');

//     let markup = `
//     <h4><b> ${msg.user}</b></h4}
//     <p> ${msg.message}</p>
//     `
//     // abhi html h markup banana h
//     mainDiv.innerHTML= markup;
//     //message area me append karenge

//     messageArea.appendChild(mainDiv);

// }
// //receive
// socket.on('message',(msg)=>{
//     //console.log(msg);//on browser
//     appendMessage(msg,'incoming');
//     scrolltobottom();
// })
// function scrolltobottom(){
//     messageArea.scrollTop = messageArea.scrollHeight;//baar baar scroll na krna pade
//     //recent code ke pass hio le jae
// }const socket = io()
let name;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
//var audio = new Audio('ting.mp3');

do {
    name = prompt('Please enter your name: ')
} while(!name)

textarea.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        sendMessage(e.target.value)
    }
})

function sendMessage(message) {
    let msg = {
        user: name,
        message: message.trim()
    }
    // Append 
    appendMessage(msg, 'outgoing')
    textarea.value = ''
    scrollToBottom()

    // Send to server 
    socket.emit('message', msg)

}

function appendMessage(msg, type) {
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')
    // if(type =='incoming'){ 
      
    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}

// Recieve messages 
socket.on('message', (msg) => {
    appendMessage(msg, 'incoming')
   // audio.play();

    scrollToBottom()

})

function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight
}




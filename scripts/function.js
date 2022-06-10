function closeWindow(id){
    document.getElementById(id).style.display = 'none';
}

function openWindow(id) {
    
    if (document.getElementById(id).style.display === 'none' ){
        document.getElementById(id).style.display = 'inline';
    }
    else {
        document.getElementById(id).style.display = 'none';
   }
        
} 


function clearcolor(x){
    document.getElementById(x).className='folderF';
}

function blurcolor(x){
    document.getElementById(x).className='folder';
}


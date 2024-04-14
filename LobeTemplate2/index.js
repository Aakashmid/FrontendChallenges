
playVid = () => {
    let vidcon=document.getElementById('videoContainer');
    vidcon.style.display='block';
    let spanClose=document.getElementById('backgroundSpan');
    
    spanClose.style.display='block';
    document.body.style.overflow='hidden';
}
hideVid=()=>{
    let vidcon=document.getElementById('videoContainer');
    vidcon.style.display='none';
    let spanClose=document.getElementById('backgroundSpan');
    spanClose.style.display='none';
    document.body.style.overflow='auto';
}
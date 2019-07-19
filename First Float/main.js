        onmouseover="document.getElementById('div1').style.display = 'block';"

document.getElementById('physicalBenefits').addEventListener('click', function(){
 document.getElementById('muscleRecovery').style.display = 'block';
 document.getElementById('muscleRecovery').style.color = "black";       
});


document.getElementById('muscleRecovery').addEventListener('click', function(){
        document.getElementById('muscleRecovery').style.display = 'none';
})
//Neck stretches
function Completed1(){
    var value=document.getElementById('Complete1')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('1').classList.add('highlight');
    }
}

//Shoulder rolls
function Completed2(){
    var value=document.getElementById('Complete2')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('2').classList.add('highlight');
    }
}

//Arm Circles
function Completed3(){
    var value=document.getElementById('Complete3')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('3').classList.add('highlight');
    }
}
//Triceps Stretch
function Completed4(){
    var value=document.getElementById('Complete4')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('4').classList.add('highlight');
    }
}
//Wrist Stretches
function Completed5(){
    var value=document.getElementById('Complete5')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('5').classList.add('highlight');
    }
}
//Chest Opener
function Completed6(){
    var value=document.getElementById('Complete6')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('6').classList.add('highlight');
    }
}
//Cat-Cow
function Completed7(){
    var value=document.getElementById('Complete7')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('7').classList.add('highlight');
    }
}
//Hip Flexor Stretch
function Completed8(){
    var value=document.getElementById('Complete8')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('8').classList.add('highlight');
    }
}
//Quadricep Stretches
function Completed9(){
    var value=document.getElementById('Complete9')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('9').classList.add('highlight');
    }
}
//Calf Stretches
function Completed10(){
    var value=document.getElementById('Complete10')
    if(value.value=='NC'){
        value.value='C';
        value.innerHTML="Completed";
        document.getElementById('10').classList.add('highlight');
    }
}

//Back button to go back to Routines page
function Back(){
    window.location.href='../Routine_Basketball.html';
}



var i;
/*Workout lists*/

/*Running and sprinting*/
function RS(){
    //Enter the instructions in the below array
    var olData = ['Interval Running: Incorporate interval running into your training routine. Sprint for 30 seconds, followed by a 1-minute jog or walk. Repeat for 15-20 minutes.',
    'Suicides: Run to various points on the court, touching the floor at each spot, and then return. Increase speed as you become more conditioned.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Jump Rope*/
function JP(){
    //Enter the instructions in the below array
    var olData = ['Jumping rope is an excellent cardiovascular exercise that also improves footwork, coordination, and agility. Mix in different techniques like double-unders and crossovers.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Agility Drills */
function AD(){
    //Enter the instructions in the below array
    var olData = ['Set up cone drills or ladder drills to improve agility and quick lateral movements. Work on shuffles, side steps, and rapid changes of direction.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Basketball Drills*/
function BD(){
    //Enter the instructions in the below array
    var olData = ['Incorporate basketball-specific drills that involve continuous movement, such as dribbling drills, fast breaks, and full-court sprints.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*HIIT*/
function HIIT(){
    //Enter the instructions in the below array
    var olData = ['Combine exercises like burpees, squat jumps, and mountain climbers in a high-intensity circuit. Perform each exercise for 30-60 seconds with short rest intervals.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Cycling*/
function Cy(){
    //Enter the instructions in the below array
    var olData = ['Stationary cycling or outdoor biking is an effective low-impact cardiovascular exercise. It helps build stamina without putting excessive strain on joints.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Stair Climbing*/
function SC(){
    //Enter the instructions in the below array
    var olData = ['Use stairs for an intense cardiovascular workout. Run or walk up and down stairs, focusing on explosive movements and maintaining a quick pace.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Rowing*/
function Ro(){
    //Enter the instructions in the below array
    var olData = ['Incorporate rowing exercises to engage multiple muscle groups and improve cardiovascular fitness. It\'s a low-impact option that provides a great workout.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Circuit Training*/
function CT(){
    //Enter the instructions in the below array
    var olData = ['Design a circuit with various exercises, such as jumping jacks, burpees, and box jumps. Move from one exercise to the next with minimal rest.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}

/*Cone or Shuttle drill*/
function CS(){
    //Enter the instructions in the below array
    var olData = ['Set up cones or markers to simulate defensive movements or offensive plays. Perform these drills with speed and precision.'];
    var string="";
    for(i=0;i<olData.length;i++){
        string += olData[i] + '\n\n';
    }
    alert(string);
}
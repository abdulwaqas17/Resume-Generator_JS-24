// -----------  FOR ADD NEW TEXTAREA IN WORK EXPERIENCE ------------ 
function  addNewWE() {
    
    console.log('hhh');
    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');

    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('cancel');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('weField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    newDiv.appendChild(newTextArea);
    // console.log(newTextArea.classList);

    let weAddBtn = document.getElementById('weAddBtn');
    let WE = document.getElementById('WE');

    
    
    
    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');
    
    newDiv.appendChild(removeBtn)
    
    WE.insertBefore(newDiv,weAddBtn)
 
}



// -----------  FOR ADD NEW TEXTAREA IN ACADEMIC QULAIFICATION ------------ 
function addNewAQ() {
    
    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('cancel');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('aqField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    newDiv.appendChild(newTextArea);
    
    let aqAddBtn = document.getElementById('aqAddBtn');
    let AQ = document.getElementById('AQ');


    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');
    
    newDiv.appendChild(removeBtn)
    
    
    
    AQ.insertBefore(newDiv,aqAddBtn)

}


// -----------  FOR ADD NEW TEXTAREA IN PROJECTS ------------ 
function addNewPro() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('cancel');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('proField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    newDiv.appendChild(newTextArea);
    
    let proAddBtn = document.getElementById('proAddBtn');
    let proBox = document.getElementById('proBox');
    

    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');
    
    newDiv.appendChild(removeBtn)

    proBox.insertBefore(newDiv,proAddBtn)
    
}


// -----------  FOR ADD NEW TEXTAREA IN CERTIFICATION ------------ 
function addNewCert() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('cancel');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('certField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    newDiv.appendChild(newTextArea);
    
    let certAddBtn = document.getElementById('certAddBtn');
    let certBox = document.getElementById('certBox');

    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');
    
    newDiv.appendChild(removeBtn);
    
    certBox.insertBefore(newDiv,certAddBtn);
    
}



// -----------  FOR ADD NEW INPUT FIELD IN INTEREST ------------ 
function addNewLang() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');
    
    let newInput = document.createElement('input');
    newInput.classList.add('form-control');
    newInput.classList.add('langField');
    newInput.setAttribute('placeholder','Enter here');
    newInput.setAttribute('type','text');

    newDiv.appendChild(newInput);

    let langBox = document.getElementById('langBox');
    let langAddBtn = document.getElementById('langAddBtn');

    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');

    newDiv.appendChild(removeBtn)

    langBox.insertBefore(newDiv,langAddBtn);




}



// -----------  FOR ADD NEW INPUT FIELD IN SKILLS ------------ 
function addNewSkill() {

    
    let newDiv = document.createElement('div');
    newDiv.classList.add('my-2');
    newDiv.classList.add('cancel');

    
    let newInput = document.createElement('input');
    newInput.classList.add('cancel');
    newInput.classList.add('form-control');
    newInput.classList.add('my-2');
    newInput.classList.add('skillsField');
    newInput.setAttribute('placeholder','Enter here');
    newInput.setAttribute('type','text');
    
    newDiv.appendChild(newInput);

    let skillsBox = document.getElementById('skillsBox');
    let skillsAddBtn = document.getElementById('skillsAddBtn');

    let removeBtn = document.createElement('span');
    removeBtn.innerHTML = 'x';
    removeBtn.classList.add('remove');
    removeBtn.setAttribute('onclick','removeIt(this)');

    newDiv.appendChild(removeBtn)


    skillsBox.insertBefore(newDiv,skillsAddBtn);

}











    
    
// --------------------  main function--------------
function setDetails(){
    // storing values of inputs fields in the variables 
 var cvContainer = document.querySelector('.cv-container');    

var userName = document.getElementById('nameField');
var userBio = document.getElementById('bioField');
var userContact = document.getElementById('contactField');
var userEmail = document.getElementById('emailField');
var userAddress = document.getElementById('addressField');
var facebookField = document.getElementById('facebookField');
var instaField = document.getElementById('instaField');
var linkedinField = document.getElementById('linkedinField');
var resumePhoto = document.getElementById('resumePhoto').files[0];

if(resumePhoto){
    var resumePhotoURL = URL.createObjectURL(resumePhoto);
    console.log(resumePhotoURL);
}
// var langField = document.getElementById('langField');

var langField = document.querySelectorAll('.langField');
var objective = document.querySelector('.objective');
var skillField = document.querySelectorAll('.skillsField');
var weField = document.querySelectorAll('.weField');
var aqField = document.querySelectorAll('.aqField');
var proField = document.querySelectorAll('.proField');
var certField = document.querySelectorAll('.certField');

console.log(userContact);
console.log(skillField);
// console.log(languagesField);


console.log(weField);


// && userBio.value && userContact.value && userEmail.value && userAddress.value && resumePhotoURL && objective.value
   
//  check is required fields are fill or not
if (userName.value && userBio.value && userContact.value && userEmail.value && userAddress.value && resumePhotoURL && objective.value) {
    // function weTextareas() {
   
   //     var weSectionT = document.createElement('div');
   //     // weSectionT.classList.add('weSectionT');
   
   // //     weSection.innerHTML =    `<div class="weSection">
   // //     <h2>Work Experience</h2>
   // // </div>`;
   // //     // var weH1 = document.createElement('h1');
   // //     // weH1.innerHTML = 'Work Experience';
   // //     // weSection.appendChild(weH1)
   
   // //     // weSection.appendChild(weH1);
     
   // //     console.log(weH1);
   
   //     weField.forEach((we)=> {
   
   //        var weP = document.createElement('p');
   //        weP.innerHTML = we.value;
   //        weSectionT.appendChild(weP);
   
   //     });
   
   //     // var weT = weSectionT;
   //     // window.localStorage.setItem('weT',weT);
   //     // console.log(weT);
   
   //     // console.log(weSection);
   //     return weSectionT;
   
   // };
   
   
   // var weT = weTextareas();
   // console.log(weT);
   
   
   var desireCV = document.querySelector('.desireCV');
   desireCV.innerHTML = `
   <div class="cv-container">
   <div class="left-section">
       <div>
       <img src="${resumePhotoURL}" alt="Profile Picture">
       <h2>${userName.value}</h2>
       <p>${userBio.value}</p>

       </div>

       <ul>
           <li><strong>Email:</strong> ${userEmail.value}</li>
           <li><strong>Phone:</strong> ${userContact.value}</li>
           <li><strong>Address:</strong> ${userAddress.value}</li>
   
           ${linkedinField.value ? ` <li><strong>LinkedIn:</strong> ${linkedinField.value} ` : ''}
           ${facebookField.value ? ` <li><strong>Facebook:</strong> ${facebookField.value} ` : ''}
           ${instaField.value ? ` <li><strong>Instagram:</strong> ${instaField.value} ` : ''}
          
         
       
       </ul>
   </div>
   `;
   
   
   if(langField[0].value) {
       var langUl = document.querySelector('.left-section ul');
       console.log(langUl);
   
       var langlii = document.createElement('li');
       langlii.innerHTML = `<strong>Languages:</strong>`;
       langUl.appendChild(langlii);
   
       console.log(langField);
   
       langField.forEach((lang)=> {
   
           var langLi = document.createElement('li');
           langLi.innerHTML = lang.value;
           langUl.appendChild(langLi);
           console.log('hhhhhhhhhhh');
           console.log(langField);
    
        });
   
   }
   
   
   
   
   // ------------ rightSection ---------------- 
   var cvContainer = document.querySelector('.cv-container');
   
   var rightSection = document.createElement('div');
   rightSection.classList.add('right-section');
   
   rightSection.innerHTML = `
   <div class="section">
           <h2>Professional Summary</h2>
           <p>${objective.value}</p>
       </div>
   `;
   
   cvContainer.appendChild(rightSection);
   
   
   
   
   // ------------ we --------------- 
   if(weField[0].value) {
       var weSection = document.createElement('div');
       weSection.classList.add('section');
       weSection.classList.add('weSection');
       weSection.innerHTML = `<h2>Work Experience</h2>`
   
       weField.forEach((we)=> {
   
           var weP = document.createElement('p');
           weP.innerHTML = we.value;
           weSection.appendChild(weP);
    
        });
   
       rightSection.appendChild(weSection);
   
       console.log(cvContainer);
       console.log(rightSection);
   
       cvContainer.appendChild(rightSection);
   
   }
   
   
   // ------------ aq --------------- 
   if(aqField[0].value) {
       var aqSection = document.createElement('div');
       aqSection.classList.add('section');
       aqSection.classList.add('aqSection');
       aqSection.innerHTML = `<h2>Academic Qualification</h2>`
   
       aqField.forEach((aq)=> {
   
           var aqP = document.createElement('p');
           aqP.innerHTML = aq.value;
           aqSection.appendChild(aqP);
    
        });
   
       rightSection.appendChild(aqSection);
   
       console.log(cvContainer);
       console.log(rightSection);
   
       cvContainer.appendChild(rightSection);
   
   }
   
   
   
   
   
   // // ------------ pro --------------- 
   if(proField[0].value) {
       var proSection = document.createElement('div');
       proSection.classList.add('section');
       proSection.classList.add('proSection');
       proSection.innerHTML = `<h2>Projects</h2>`
   
       proField.forEach((pro)=> {
   
           var proP = document.createElement('p');
           proP.innerHTML = pro.value;
           proSection.appendChild(proP);
    
        });
   
       rightSection.appendChild(proSection);
   
       console.log(cvContainer);
       console.log(rightSection);
   
       cvContainer.appendChild(rightSection);
   
   }
   
   
   
   
   // ------------ cert --------------- 
   if(certField[0].value) {
       var certSection = document.createElement('div');
       certSection.classList.add('section');
       certSection.classList.add('certSection');
       certSection.innerHTML = `<h2>Certification & Achievements</h2>`
   
       certField.forEach((cert)=> {
   
           var certP = document.createElement('p');
           certP.innerHTML = cert.value;
           certSection.appendChild(certP);
    
        });
   
       rightSection.appendChild(certSection);
   
       console.log(cvContainer);
       console.log(rightSection);
   
       cvContainer.appendChild(rightSection);
   
   }
   
   
   
   // ------------ skills --------------- 
   if(skillField[0].value) {
       var skillSection = document.createElement('div');
       skillSection.classList.add('section');
       skillSection.innerHTML = `<h2>Skills</h2>`
   
       var skillsBox = document.createElement('div');
       skillsBox.classList.add('skills');
   
       skillField.forEach((skill)=> {
   
           var skillSpan = document.createElement('span');
           skillSpan.innerHTML = skill.value;
           skillsBox.appendChild(skillSpan);
    
        });
   
       skillSection.appendChild(skillsBox);
       rightSection.appendChild(skillSection);
   
       console.log(cvContainer);
       console.log(rightSection);
   
       cvContainer.appendChild(rightSection);
   
   }
   
   var userChoice = document.querySelector('.userChoice');
   // ager none h
   if (userChoice.classList.contains('none')){
       // to show kr do, none hta do
       userChoice.classList.remove('none');
   }
   
   }else {
    alert('Kindly must field required field')
   }


}






// --------------- goToHome() -------------
function goToHome() {

    var CVpage = document.querySelector('.CVpage');
    if(!CVpage.classList.contains('none')){
        CVpage.classList.add('none');
    }
    
    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(cvForm.classList.contains('none')){
        cvForm.classList.remove('none');
    }
}


//  -------- displayT1() --------------
function displayT1(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }
}


//  -------- displayT2() --------------
function displayT2(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#03045e';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#00b4d8';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#03045e';
    })
}



//  -------- displayT3() --------------
function displayT3(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#0fa3b1';
    ls.style.order = '1';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#b5e2fa';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#0fa3b1';
    })
}



//  -------- displayT4() --------------
function displayT4(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#540d6e';
    ls.style.order = '1';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#ee4266';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#540d6e';
    })


    
    
}


//  -------- displayT5() --------------
function displayT5(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#5c6b73';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#9db4c0';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#5c6b73';
    })

    let cvContainer = document.querySelector('.cv-container');
    cvContainer.style.flexDirection = 'column';
    cvContainer.style.gap = '10px';

    ls.style.flexDirection = 'row';
    ls.style.justifyContent = 'space-between';
    ls.style.gap = '40%';
    ls.style.width = '100%';
    ls.style.height = '20%';

    let rs = document.querySelector('.right-section');
    rs.style.width = '100%';
    rs.style.height = '80%';

    let lsUl = document.querySelector('.left-section ul');
    lsUl.style.width = '45%';
    
}


//  -------- displayT6() --------------
function displayT6(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#780116';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#f7b538';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#780116';
    });

    let cvContainer = document.querySelector('.cv-container');
    cvContainer.style.flexDirection = 'column';
    cvContainer.style.gap = '10px';

    ls.style.flexDirection = 'row';
    ls.style.justifyContent = 'space-between';
    ls.style.gap = '40%';
    ls.style.width = '100%';
    ls.style.height = '20%';

    let rs = document.querySelector('.right-section');
    rs.style.width = '100%';
    rs.style.height = '80%';

    let lsUl = document.querySelector('.left-section ul');
    lsUl.style.width = '45%'



    
    
}


//  -------- displayT7() --------------
function displayT7(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#e26d5c';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#ffd97d';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#e26d5c';
    })


    
    let cvContainer = document.querySelector('.cv-container');
    cvContainer.style.flexDirection = 'column';
    cvContainer.style.gap = '10px';

    ls.style.flexDirection = 'row';
    ls.style.justifyContent = 'space-between';
    ls.style.gap = '40%';
    ls.style.width = '100%';
    ls.style.height = '20%';

    let rs = document.querySelector('.right-section');
    rs.style.width = '100%';
    rs.style.height = '80%';

    let lsUl = document.querySelector('.left-section ul');
    lsUl.style.width = '45%';

    


    let divOfLS = document.querySelector('.left-section div');
    divOfLS.style.order = '2';
    
    
}

//  -------- displayT8() --------------
function displayT8(){

    var CVpage = document.querySelector('.CVpage');
    if(CVpage.classList.contains('none')){
        CVpage.classList.remove('none');
    }

    var cvForm = document.querySelector('.cvForm');
    if(!cvForm.classList.contains('none')){
        cvForm.classList.add('none');
    }

    var userChoice = document.querySelector('.userChoice');
    if(!userChoice.classList.contains('none')){
        userChoice.classList.add('none');
    }

    var ls = document.querySelector('.left-section'); 
    console.log(ls);
    ls.style.background = '#25a18e';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = '#9fffcb';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = '#25a18e';
    })

    
    let cvContainer = document.querySelector('.cv-container');
    cvContainer.style.flexDirection = 'column';
    cvContainer.style.gap = '10px';

    ls.style.flexDirection = 'row';
    ls.style.justifyContent = 'space-between';
    ls.style.gap = '40%';
    ls.style.width = '100%';
    ls.style.height = '20%';

    let rs = document.querySelector('.right-section');
    rs.style.width = '100%';
    rs.style.height = '80%';

    let lsUl = document.querySelector('.left-section ul');
    lsUl.style.width = '45%';


    let divOfLS = document.querySelector('.left-section div');
    divOfLS.style.order = '2';

    
    
}




function removeIt(r) {
    let parentDiv = r.parentElement;
    console.log(r);
    console.log(parentDiv);
    parentDiv.remove();
    // parentDiv.style.display = 'none';
}

// ----------- downloadCV -------------
// function downloadCV(){
//     window.print();
// }


// for download cv  
function downloadCV() {
    html2canvas(document.querySelector(".cv-container")).then(canvas => {
      let link = document.createElement("a");
      link.download = "cv.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  }

/* 
<div class="right-section">
    <div class="section">
        <h2>Professional Summary</h2>
        <p>${objective.value}</p>
    </div>


    ${weField ? ` <div class="weSection">

                    <h2>W E</h2>
                    ${weT}
                   </div>`
    :''} 



    <div class="section">
        <h2>Education</h2>
        <h3>Master of Computer Science - Elite University</h3>
        <p>Graduation: 2017</p>
        <p>Specialized in artificial intelligence and cloud computing, achieving top honors.</p>
    </div>
    <div class="section">
        <h2>Skills</h2>
        <div class="skills">
            <span>Python</span>
            <span>Java</span>
            <span>Machine Learning</span>
            <span>Cloud Computing</span>
            <span>Project Management</span>
            <span>Agile Methodologies</span>
            <span>React</span>
            <span>UI/UX Design</span>
        </div>
    </div>
</div>
</div>*/




/*Template literals ke andar yeh likha ja sakta hai:

Strings (static or multi-line)
Dynamic expressions (variables, functions, calculations, etc.)
Ternary operators for conditional rendering
Lekin DOM manipulations aur complex logic ko template literals ke baahar rakhna chahiye.



*/


/*
-------------- TODOS ----------------
1 ==> PLAIN LINKEDIN POST OF JS
2 ==> POST NOW ON LIN
3 ==> - AND MULTI TEMPLATE IN RESUME
4 ==> ID CARD ASSIGNMENT
5 ==> VIEW CODE OF STDS
*/




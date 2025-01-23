// -----------  FOR ADD NEW TEXTAREA IN WORK EXPERIENCE ------------ 
function  addNewWE() {
    
    console.log('hhh');

    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('weField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);

    let weAddBtn = document.getElementById('weAddBtn');
    let WE = document.getElementById('WE');

    WE.insertBefore(newTextArea,weAddBtn)


}



// -----------  FOR ADD NEW TEXTAREA IN ACADEMIC QULAIFICATION ------------ 
function addNewAQ() {
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('aqField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    
    let aqAddBtn = document.getElementById('aqAddBtn');
    let AQ = document.getElementById('AQ');
    
    AQ.insertBefore(newTextArea,aqAddBtn)
    
}


// -----------  FOR ADD NEW TEXTAREA IN PROJECTS ------------ 
function addNewPro() {
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('proField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    
    let proAddBtn = document.getElementById('proAddBtn');
    let proBox = document.getElementById('proBox');
    
    proBox.insertBefore(newTextArea,proAddBtn)
    
}


// -----------  FOR ADD NEW TEXTAREA IN CERTIFICATION ------------ 
function addNewCert() {
    
    
    let newTextArea = document.createElement('textarea');
    newTextArea.classList.add('form-control');
    newTextArea.classList.add('certField');
    newTextArea.classList.add('mt-2');
    newTextArea.setAttribute('rows',3);
    newTextArea.setAttribute('placeholder','Enter here');

    // console.log(newTextArea.classList);
    
    let certAddBtn = document.getElementById('certAddBtn');
    let certBox = document.getElementById('certBox');
    
    certBox.insertBefore(newTextArea,certAddBtn)
    
}



// -----------  FOR ADD NEW INPUT FIELD IN INTEREST ------------ 
function addNewLang() {

    let newInput = document.createElement('input');
    newInput.classList.add('form-control');
    newInput.classList.add('my-2');
    newInput.classList.add('langField');
    newInput.setAttribute('placeholder','Enter here');
    newInput.setAttribute('type','text');

    let langBox = document.getElementById('langBox');
    let langAddBtn = document.getElementById('langAddBtn');

    langBox.insertBefore(newInput,langAddBtn);

}



// -----------  FOR ADD NEW INPUT FIELD IN SKILLS ------------ 
function addNewSkill() {

    let newInput = document.createElement('input');
    newInput.classList.add('form-control');
    newInput.classList.add('my-2');
    newInput.classList.add('skillsField');
    newInput.setAttribute('placeholder','Enter here');
    newInput.setAttribute('type','text');

    let skillsBox = document.getElementById('skillsBox');
    let skillsAddBtn = document.getElementById('skillsAddBtn');

    skillsBox.insertBefore(newInput,skillsAddBtn);

}





// storing values of inputs fields in the variables 
function setDetails(){

var cvContainer = document.querySelector('.cv-container');    

var userName = document.getElementById('nameField');
var userBio = document.getElementById('bioField');
var userContact = document.getElementById('contactField');
var userEmail = document.getElementById('emailField');
var userAddress = document.getElementById('addressField');
var facebookField = document.getElementById('facebookField');
var instaField = document.getElementById('instaField');
var linkedinField = document.getElementById('linkedinField');
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
    <img src="#" alt="Profile Picture">
    <h2>${userName.value}</h2>
    <p>${userBio.value}</p>
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
    ls.style.background = 'blue';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = 'aqua';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = 'blue';
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
    ls.style.background = 'red';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = 'orange';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = 'red';
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
    ls.style.background = 'purple';

    var rh2 = document.querySelectorAll('.right-section h2'); 
    console.log(rh2);
    rh2.forEach((r)=>{
        r.style.borderColor = 'pink';
    })

    var skSpan = document.querySelectorAll('.skills span'); 
    console.log(skSpan);
    skSpan.forEach((sp)=>{
        sp.style.background = 'purple';
    })


    
    
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
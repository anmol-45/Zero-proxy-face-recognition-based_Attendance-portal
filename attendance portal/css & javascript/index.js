function teacherlogin(teacher){
    window.location.href = teacher;
}
function studentlogin(student){
    window.location.href = student;
}
function gotohome(home){
    window.location.href = home;
}
function gotosignup(signup){
    window.location.href = signup;

}
 
function validate()
        {
            pass1Obj=document.getElementById("pass1");
            pass2Obj=document.getElementById("pass2");
            if(pass1Obj.value===pass2Obj.value)
            {
                return true
            }
            else
            {
                alert("Password Mismatch");
                return false;
            }
        }
//loading webcam
   

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAtz5_ZjdVd3lZexuG5hbqZ85hccO4jVDo",
    authDomain: "contact-form-8719b.firebaseapp.com",
    databaseURL: "https://contact-form-8719b-default-rtdb.firebaseio.com",
    projectId: "contact-form-8719b",
    storageBucket: "contact-form-8719b.appspot.com",
    messagingSenderId: "97976805172",
    appId: "1:97976805172:web:55f2c7e860fdf7fbb62761",
    measurementId: "G-26M2VZGF3Q"
};


//reaference to the database
const app = firebase.initializeApp(firebaseConfig);


var studentSignupDb = firebase.databaseURL().ref('student_application');

document.getElementById(student_application).addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var emailid = getelementVal("student_email");
    var pass1 = getelementVal("pass1");
    var pass2 = getelementVal("pass2");
    var roll = getelementVal("student_roll");
    var name = getelementVal("student_name");
    var section = getelementVal("Section") ;
    var semester = getelementVal("Semester");

    console.log(emailid,pass1,pass2,roll,name,section,semester);
}

const getelementVal = (id)=>{
    return getElementById(id).value;
};

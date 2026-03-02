// const myModal = document.getElementById('myModal')
// const myInput = document.getElementById('myInput')

// myModal.addEventListener('shown.bs.modal', () => {
//   myInput.focus()
// })

setInterval(myTimeout1, 2000),
    setInterval(myTimeout2, 4000),
    setInterval(myTimeout3, 6000);
setInterval(myTimeout4, 8000);
setInterval(myTimeout5, 10000);
setInterval(myTimeout6, 12000);
setInterval(myTimeout7, 140000);



function myTimeout1() {
    document.getElementById("demo").innerHTML = "للنجاح";
}
function myTimeout2() {
    document.getElementById("demo").innerHTML = "التميز";
}
function myTimeout3() {
    document.getElementById("demo").innerHTML = "الابتكار";
}

function myTimeout4() {
    document.getElementById("demo").innerHTML = "التطور";
}
function myTimeout5() {
    document.getElementById("demo").innerHTML = "قمة";
}
function myTimeout6() {
    document.getElementById("demo").innerHTML = "اصرار";
}


function myTimeout7() {
    document.getElementById("demo").innerHTML = "نمو";
}








window.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.border-box');

    function animateBoxes() {
        boxes.forEach((box, index) => {
            setTimeout(() => {
                box.style.borderColor = 'red';
                setTimeout(() => {
                    box.style.borderColor = 'gray';
                }, 1000);
            }, index * 1000);
        });

        setTimeout(() => {
            resetBoxes();
            animateBoxes();
        }, boxes.length * 1000);
    }

    function resetBoxes() {
        boxes.forEach((box) => {
            box.style.borderColor = 'gray';
        });
    }

    animateBoxes();
});

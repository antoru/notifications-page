const notifications = () => {

    const title__num = document.querySelector('.title__num');
    const mark = document.querySelector('.mark');

    const nodelist = (myClass) => {
        const nodelist = document.querySelectorAll(myClass);
        return nodelist;
    }

    const nodelistLength = (myClass) => {
        const nodelist = document.querySelectorAll(myClass);
        return nodelist.length;
    }

    const printLength = () => {
        title__num.innerHTML = nodelistLength('.unread');
    }

    printLength();

    const removeClass = () => {
        if (nodelistLength('.unread') > 0) {
            for (let unread of nodelist('.unread')) {
                unread.classList.remove('unread');
            }
        }
    }

    mark.addEventListener('click',()=>{
        removeClass();
        printLength();
    });

}

notifications();
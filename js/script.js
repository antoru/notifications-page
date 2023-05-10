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

    
    let unreadNodelist = document.querySelectorAll('.unread');

    if (unreadNodelist) {

        for (let element of unreadNodelist) {

            element.addEventListener('click', (event) => {

                let targetElement = event.currentTarget;

                if (targetElement.classList.contains('unread')) {
                    targetElement.classList.remove('unread');
                    printLength();
                }

            })

        }

    }

}

notifications();
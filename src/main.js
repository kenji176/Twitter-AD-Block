window.onload = function() {
    window.addEventListener('scroll', function(){
        const tweet = document.getElementsByClassName('css-1dbjc4n');
        for(i in tweet){
            if(tweet[i].hasAttribute("role")){
                const role = tweet[i].getAttribute('role');
                if(role == 'article'){
                    const data_testid = tweet[i].getAttribute('data-testid');
                    if(data_testid == 'tweet'){
                        for(let n=0; n<tweet[i].childElementCount; n++) {
                            if (tweet[i].children[n].textContent.slice( -7 ) == 'プロモーション'){
                                tweet[i].remove();
                            }else{
                                ;
                            }
                        }
                    }
                }
            }
        }
    });
};
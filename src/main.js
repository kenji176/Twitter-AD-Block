window.onload = function() {
    window.addEventListener('scroll', function(){
        const tweet = document.getElementsByClassName('css-1dbjc4n');
        for(let i = 0, len = tweet.length; i<len; i++){
            if (tweet[i] == null){
                ;
            }else{
                if(tweet[i].hasAttribute("role")){
                    const role = tweet[i].getAttribute('role');
                    if(role == 'article'){
                        const data_testid = tweet[i].getAttribute('data-testid');
                        if(data_testid == 'tweet'){
                            for(let n=0; n<tweet[i].childElementCount; n++) {
                                if (tweet[i].children[n].textContent.slice( -7 ) == 'プロモーション'){
                                    const twi = tweet[i].parentNode.parentNode.parentNode.parentNode
                                    twi.remove();
                                }
                            }
                        }
                    }
                }
            }
        }
    });
};

for (let i = 1; i <= 3; i++) {
    var promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(i)
    }, 1000);
    });
    promise.then(function(result) {
        console.log(result)
    });
  }
  
  promise.finally(function(result){
    console.log('Done')
  })
  
function getName(){



    var queryString = window.location.search || '';
    var keyValPairs = [];
    var params      = {};
    queryString     = queryString.substr(1);

    if (queryString.length)
    {
       keyValPairs = queryString.split('&');
       for (pairNum in keyValPairs)
       {
          var key = keyValPairs[pairNum].split('=')[0];
          if (!key.length) continue;
          if (typeof params[key] === 'undefined')
             params[key] = [];
          params[key].push(keyValPairs[pairNum].split('=')[1]);
       }
    }


  document.getElementById('intro').innerHTML = "Hi "+ params['nameForm'] + " the Website is under Construction!";
}

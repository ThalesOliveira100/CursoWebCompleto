const _ = require('lodash');
setInterval(() => console.log(_.random(5, 10)), 2000);

// Utilizamos também o Nodemon, que permite que o arquivo fique sempre executando, como um script, utiliza-se o CTRL + C para encerra-lo.
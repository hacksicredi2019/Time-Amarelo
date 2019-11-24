const PROXY_CONFIG = [{

   context: ['api/'],
  //  target: 'http://172.22.239.57:5000/escolas',
   target: 'http://localhost:4200',
   secure: false,
   logLevel:' debug'

 }
];



 module.exports = PROXY_CONFIG;

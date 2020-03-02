module.exports = function(app){
    var AWS = require('aws-sdk')
    // AWS
    var s3 = new AWS.S3();
    var resultado;
    var apicall = require('axios');

    app.get('/forms/teste', function(req,res){
        res.render('forms/teste');
    });

    app.post('/teste/salvar', function(req,res){
        var nome = req.body;
        //res.render('Fteste');
        //res.send(req.body);
        //console.log(nome);

        switch (req.body.opt) {
            case "iniciar":
                apicall.post('https://emr0243vtd.execute-api.us-east-1.amazonaws.com/dev/', {
                    regiao: 'us-east-1',
                    lastnomeinst: req.body.nome
                  })
                  .then((response) => {
                    console.log(response);
                  }, (error) => {
                    console.log(error);
                  });

            case "terminar":
                apicall.post('https://pe648d1xrd.execute-api.us-east-1.amazonaws.com/dev', {
                    regiao: 'us-east-1',
                    lastnomeinst: req.body.nome
                  })
                  .then((response) => {
                    console.log(response);
                  }, (error) => {
                    console.log(error);
                  });

        }
        
        var returnS3 = function(result){
        
            result = JSON.stringify(result);
            
        }
    });

}
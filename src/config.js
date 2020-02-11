let env_mode =process.env.ENV_MODE ||'production';
let config={};
if(1 || env_mode ==='dev'){
    config = {
        basename: '',
        dbname: '',
        host: '',
        port: '',

    };
}
    else{
    config = {
        basename: 'travis-messageall',
        dbname: '',
        host: '',
        port: '',

    };
}

module.exports=config;

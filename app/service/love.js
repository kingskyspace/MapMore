const Service=require('egg').Service;


class LoveService extends Service{

    async findAll(){
        let  client=await this.app.mysql.select('love_info',{
            limit:10
        });
        return client;
    }
}

module.exports=LoveService;

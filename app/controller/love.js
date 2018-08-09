const Controller=require('egg').Controller;

class LoveController extends Controller{
    async findAll(){
        let all=await this.ctx.service.love.findAll();
        const response={};
        response.data=all;
        this.body=response;
        this.status=200;
    }
}

module.exports=LoveController;
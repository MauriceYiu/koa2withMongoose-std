const router = require('koa-router')();
const studentModel = require('./../model/student');

router.get('/', async (ctx, next) => {

    let indexInfo = {
        title: '首页',
        helloInfo: '欢迎光临...'
    };

    let studentList = [];
    try {
        let studentData = await studentModel.find().exec();
        for (let i = 0; i < studentData.length; i++) {
            let obj = {
                name: studentData[i].name,
                sex: studentData[i].sex,
                age: studentData[i].age
            }
            studentList.push(obj);
        }
    } catch (error) {
        console.log(error);
    }

    await ctx.render('index', {
        indexInfo,
        studentList
    });
});

router.get('/add', async (ctx, next) => {
    let addInfo = {
        title: '添加学生',
        info: '添加学生'
    }
    let addRes;
    try {
        if(!ctx.request.query.name){
            throw '数据不完整...';
            return;
        }
        addRes = await studentModel.create(ctx.request.query);
    } catch (error) {
        console.log(error);
    }

    console.log(addRes);

    await ctx.render('add', {
        addInfo
    });
});

module.exports = router;
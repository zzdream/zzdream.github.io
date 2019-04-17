function bigGlass(i, opt) {
    //获取最外层容器
    var box = document.getElementsByClassName(i)[0];
    box.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;position:relative;';
    //创建小图容器
    var leftBox = document.createElement('div');
    leftBox.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;position:relative;';
    //创建小图
    this.leftImg = document.createElement('img');
    this.leftImg.src = opt.imgUrl;
    this.leftImg.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;border:none;display:block;';
    //创建滤镜
    var ball = document.createElement('div');
    ball.style.cssText = 'width:' + (opt.boxWid / opt.scal) + 'px;height:' + (opt.boxHei / opt.scal) + 'px;position:absolute;left:0;top:0;background-color:#ffffff;opacity:0.3;display:none;'
    //创建蒙板
    var mengban = document.createElement('div');
    mengban.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;position:absolute;left:0;top:0;z-index:10;';
    //插入小图，滤镜，蒙板
    leftBox.appendChild(this.leftImg);
    leftBox.appendChild(ball);
    leftBox.appendChild(mengban);
    //创建大图容器
    var rightBox = document.createElement('div');
    rightBox.style.cssText = 'width:' + opt.boxWid + 'px;height:' + opt.boxHei + 'px;position:absolute;left:' + (opt.boxWid + 10) + 'px;top:0;z-index:10;overflow:hidden;display:none;'
    //创建大图
    this.rightImg = document.createElement('img');
    this.rightImg.src = opt.imgUrl;
    this.rightImg.style.cssText = 'width:' + (opt.boxWid * opt.scal) + 'px;height:' + (opt.boxHei * opt.scal) + 'px;border:none;display:block;position:absolute;left:0;top:0;';
    //插入大图
    rightBox.appendChild(this.rightImg);
    //插图小图容器，大图容器
    box.appendChild(leftBox);
    box.appendChild(rightBox);
    var that = this;
    leftBox.onmousemove = function (event) {
        var e = event || window.event;
        //显示滤镜和大图容器
        ball.style.display = 'block';
        rightBox.style.display = 'block';
        //计算滤镜位置
        var posX = e.offsetX - ball.offsetWidth / 2;
        var posY = e.offsetY - ball.offsetHeight / 2;
        //判断临界点
        //X方向
        if (posX < 0) {
            posX = 0;
        } else if (posX > leftBox.offsetWidth - ball.offsetWidth) {
            posX = leftBox.offsetWidth - ball.offsetWidth
        }
        //Y方向
        if (posY < 0) {
            posY = 0;
        } else if (posY > leftBox.offsetHeight - ball.offsetHeight) {
            posY = leftBox.offsetHeight - ball.offsetHeight
        }
        //赋值
        ball.style.left = posX + 'px';
        ball.style.top = posY + 'px';
        that.rightImg.style.left = (-1 * posX * opt.scal) + 'px';
        that.rightImg.style.top = (-1 * posY * opt.scal) + 'px';

        this.onmouseout = function () {
            ball.style.display = 'none';
            rightBox.style.display = 'none';
        }
    }
}
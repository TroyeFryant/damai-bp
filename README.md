# damai-bp

某麦网BP-一键直达提交订单页面

**注意**：本源码仅供学习交流，禁止用于非法用途！

----------------------------------

### 使用教程

源码分为**前端**和**后端**，分别按照如下操作：

**前端**：

编辑damai/vendor.js，将17782行的ip修改为自己前段网址或ip

**后端**：

后端代码采用nodejs编写，因此在使用前要安装所需要的依赖。

api-chapiao.js为查票模式，使用前需要在headers输入自己的cookie（注意时效性）

在getsign函数中，需要把XXXXXXXXXX改为cookie里的_m_h5_tk字段，注意只取前半段

api-youpiao.js为有票模式，在前端调用前需要添加相应的数据。

其中day的数据获取方法各有不同，这个大家可以自己试着找找，为避免侵权，本文不贴出其他有关链接。

![f069809f5f9ef56bc356d279afb8a2b](https://github.com/TroyeFryant/damai-bp/assets/111677045/c1b6e08f-50e2-4756-ad6c-a4b98e5a9d24)

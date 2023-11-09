const express = require('express');
const axios = require('axios');
const crypto = require('crypto');
const app = express();
const port = 8887;

// 解决跨域问题
app.use((req, res, next) => {
    const allowedOrigins = [
        // 在这里添加前端域名
		'http://127.0.0.1:5500',
		'http://127.0.0.1:5501',
		'http://127.0.0.1:5502'
    ];

    const origin = req.get('origin');
    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    }

    next();
});

app.get('/h5/:api/:version', async (req, res) => {
    try {
        // 获取请求的服务器网址（域名）
	    const domain = `${req.get('host')}`;
        console.log('Server API：', domain); 

        // 获取请求的前端网址（域名）
        const origin = req.get('origin');
        console.log('Request Origin:', origin);
	
        const api = req.params.api;
        const t = req.query.t;
        const requestStart = req.query.requestStart;
        const dataString = req.query.data;
        const sign = getsign(t, dataString);

        const apiUrl = `https://mtop.damai.cn/h5/${api}/${req.params.version}?jsv=2.7.2&appKey=12574478&t=${t}&sign=${sign}&type=originaljson&dataType=json&v=${req.params.version}&H5Request=true&AntiCreep=true&AntiFlood=true&api=${api}&requestStart=${requestStart}&data=${encodeURIComponent(dataString)}`;
		console.log(apiUrl);

        const response = await axios.get(apiUrl, {
            headers: {
				"authority": "mtop.damai.cn",
				"accept": "application/json",
				"accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
				"content-type": "application/x-www-form-urlencoded",
                //这里写自己的cookie
				"cookie": "",
				"origin": "https://m.damai.cn",
				"referer": "https://m.damai.cn/",
				"sec-ch-ua": "^^Chromium^^;v=^^118^^, ^^Microsoft Edge^^;v=^^118^^, ^^Not=A?Brand^^;v=^^99^^",
				"sec-ch-ua-mobile": "?1",
				"sec-ch-ua-platform": "^^Android^^",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-site",
				"user-agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Mobile Safari/537.36 Edg/118.0.2088.76"
			}

        });
		console.log('==============');
		console.log(response.data.ret);

		if (api === 'mtop.alibaba.damai.detail.getdetail' || api === 'mtop.alibaba.detail.subpage.getdetail'){
			if (JSON.stringify(response.data.data) !== "{}"){
				const result = JSON.parse(response.data.data.result);
				console.log(result.itemBasicInfo.projectTitle)
				console.log('===========================')
			}
		}
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});

function getsign(t, dataString) {
    const hash = crypto.createHash('md5');
    //XXXXXXXXXX为cookie里的_m_h5_tk字段，注意只取前半段
    const str = `XXXXXXXXXX&${t}&12574478&${dataString}`;
    hash.update(str);
    return hash.digest('hex');
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

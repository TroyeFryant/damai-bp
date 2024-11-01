// ==UserScript==
// @name         AutoClickDamaiTicket
// @namespace    http://tampermonkey.net/
// @version      2024-04-14
// @description  try to take over the world!
// @author       You
// @match        https://m.damai.cn/shows/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=damai.cn
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var next_page_Interval = setInterval(function () {
        // 获取所有 class 为 bui-calendar-handler-btn 的元素
        const elements = document.querySelectorAll('.bui-calendar-handler-btn');

        // 检查是否有至少两个元素
        if (elements.length >= 2) {
            // 点击第二个元素（索引从0开始，第二个是索引1）
            elements[1].click();
            console.log('点击了第二个 bui-calendar-handler-btn 的 div');
        } else {
            console.log('未找到足够的 bui-calendar-handler-btn 的 div');
        }

        // 查找包含 "无票" 的目标 div 元素
        const targetDiv = [...document.querySelectorAll('.label-color.label-color-normal')]
            .find(div => div.textContent.trim() === '无票');

        // 如果找到了目标元素，则点击它
        if (targetDiv) {
            targetDiv.click();
            console.log('点击了无票的 div');
            clearInterval(next_page_Interval);
        } else {
            console.log('未找到无票的 div');
        }


    }, 1000);




    var currentURL = window.location.href;
    var url = new URL(currentURL);
    var current_itemId = url.searchParams.get("itemId");
    console.log(current_itemId);

    var keys = Object.keys(localStorage);
    if (keys.includes(current_itemId)) {
        console.log("The string is in the keys.");

        var retrievedData = localStorage.getItem(current_itemId);
        var retrievedArray = JSON.parse(retrievedData);
        console.log(retrievedArray);

        var auto_click_Interval = setInterval(function () {
            console.log("进入===>auto_click_Interval");


            var dates_click = document.querySelector(".sku-content.sku-content-column");
            if (dates_click && !dates_click.querySelector('.bui-dm-sku-card-item.item-selected.theme-normal')) {

                var dateElements = dates_click.querySelectorAll('.bui-dm-sku-card-item-box .item-text');
                dateElements.forEach(div => {
                    var date_name = div.textContent.trim();
                    if (date_name === retrievedArray[0] || retrievedArray[0].includes(date_name) || date_name.includes(retrievedArray[0])) {
                        // 模拟点击该div元素
                        div.click();
                        console.log("点击了日期=>" + retrievedArray[0]);
                    }
                });

            }

            var prices_click = document.querySelector(".bui-dm-sku-card.sku-tickets-card");
            if (prices_click && !prices_click.querySelector('.bui-dm-sku-card-item.item-selected.theme-normal')) {
                var priceElements = prices_click.querySelectorAll('.bui-dm-sku-card-item-box .item-text');
                priceElements.forEach(div => {
                    var price_name = div.textContent.trim();
                    if (price_name === retrievedArray[1]) {
                        // 模拟点击该div元素
                        div.click();
                        console.log("点击了价格=>" + retrievedArray[1]);
                    }
                });
            }

            var total_num_div = document.querySelector(".number-info");
            if (total_num_div) {

                var total_num_int = retrievedArray[2];
                console.log("total_num_int===>" + total_num_int);

                var maxClicks = total_num_int;
                var clickCount = 1;
                var interval = 200;

                var intervalID = setInterval(function () {
                    var plus_button = document.querySelector(".plus-enable");
                    if (plus_button && clickCount < maxClicks) {
                        // 创建一个点击事件
                        var event = new MouseEvent('click', {
                            'view': window,
                            'bubbles': true,
                            'cancelable': true
                        });
                        // 触发事件
                        plus_button.dispatchEvent(event);
                        clickCount++; // 增加点击计数
                        console.log('点击次数: ' + clickCount);
                    } else {
                        clearInterval(intervalID); // 清除定时器
                        clearInterval(auto_click_Interval);

                        console.log('已完成所有点击或找不到按钮');

                    }
                }, interval);

            }

        }, 2000);

    } else {
        console.log("The string is not in the keys.");
    }

    var sku_pop_wrapper_Interval = setInterval(function () {
        var target_div = document.querySelector('.sku-pop-wrapper');
        var sku_footer_buy_button = document.querySelector('.sku-footer-buy-button.normal');
        if (target_div && sku_footer_buy_button) {

            clearInterval(sku_pop_wrapper_Interval);

            var save_button = document.createElement("a");
            save_button.textContent = "保存";
            save_button.style.position = "fixed";
            save_button.style.top = "200px";
            save_button.style.right = "50px";
            save_button.style.padding = "15px";
            save_button.style.backgroundColor = "#3498db";
            save_button.style.color = "#ffffff";
            save_button.style.border = "none";
            save_button.style.borderRadius = "5px";
            save_button.style.fontSize = "50px";
            save_button.style.textDecoration = "none";
            save_button.style.cursor = "pointer";
            save_button.style.zIndex = '9999';
            target_div.appendChild(save_button);


            save_button.addEventListener('click', function () {

                //日期
                var dates = document.querySelector(".sku-content.sku-content-column");
                var date = dates.querySelector(".bui-dm-sku-card-item.item-selected.theme-normal");
                var date_string = date.textContent.slice(0, -2);
                console.log(date_string);

                //价格
                var prices = document.querySelector(".bui-dm-sku-card.sku-tickets-card");
                var price = prices.querySelector(".bui-dm-sku-card-item.item-selected.theme-normal");
                var price_string = price.textContent;
                console.log(price_string);

                //数量
                var total_num_1 = document.querySelector(".number-info");
                var total_num_2 = total_num_1.querySelector(".total");
                var total_num_string = total_num_2.textContent.slice(0, 1);
                var total_num_int = parseInt(total_num_string);
                console.log(total_num_int);

                var arrayData = [date_string, price_string, total_num_int];
                var jsonData = JSON.stringify(arrayData);
                localStorage.setItem(current_itemId, jsonData);

            });

        }

    }, 1000);

})();

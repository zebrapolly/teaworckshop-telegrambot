const TelegramBot  = require('node-telegram-bot-api');

const token = '351768290:AAHTuBi3IzU-GYxUvcAlVxV2ABhkb09fQLA';

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
    
bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
        "keyboard": [["Чай"], ["Контакты"]]
        }
    });  
});

bot.onText(/Контакты/, (msg) => {
    bot.sendLocation(msg.chat.id,55.794817, 38.445381);
    bot.sendMessage(msg.chat.id, "Здесь мы находимся");  
    bot.sendMessage(msg.chat.id, "Мы работаем семь дней в неделю с 10:00 до 20:00");  
});


bot.onText(/Чай/, (msg) => {   
    bot.sendMessage(msg.chat.id, "Чайный ассортимент", {
        "reply_markup": {
            "keyboard": [["Пуэр Шу (черный)"], ["Пуэр шен (зеленый)"], ["Красный"]], 
            }
        });  
});

bot.onText(/Пуэр Шу/, (msg) => {   
    bot.sendMessage(msg.chat.id, "Пуэр Шу (черный)", {
        parse_mode: 'markdown',
        disable_web_page_preview: false,
        reply_markup: {
            inline_keyboard: [
                [{text: "Юн Жэн Гунтин", 
                //url: 'https://teaworkshop.ru/product/menxaj-chunxaj-zolotoj-banchzhan/',
                callback_data: 111}],
                [{text: "Мэнхай Чунхай «Золотой Банчжан»", 
                callback_data: 222
                }]
            ],
        },
        // "reply_markup": {
        //     "inline_keyboard": {
        //         "keyboard": [
        //         // [{text: "Юн Жэн Гунтин", url: 'https://teaworkshop.ru/product/menxaj-chunxaj-zolotoj-banchzhan/'}, 
        //         ["Мэнхай Чунхай «Золотой Банчжан»"], 
        //         ["Красный"]
        //         ]}
        // }
        });  
});

bot.on('callback_query', (msg) => {
    console.log(msg.data)
    if (msg.data == 111) {
        console.log('dfsd')
        bot.sendMessage(msg.message.chat.id, "Пуэр Шу (черный)")
        bot.sendPhoto(msg.message.chat.id, "https://teaworkshop.ru/wp-content/uploads/2014/05/menhaj-chunhaj-zolotoj-banchzhan-1.jpg")
        bot.sendMessage(msg.message.chat.id, 'Год: 2012 г \nУпа­ков­ка: блин 357 г \nПревосходный шу пуэр «Золотой банчжан». \nПрекрасно подойдет для большой компании. Пресс блина очень легко ломается и выдержит 7-8 проливов. Вкус очень мягкий с фруктово-ореховыми нотками. К середине чаепития «Золотой банчжан» перенесет вас и ваших друзей в теплую и уютную атмосферу, похожую на вечерние посиделки возле костра или камина.', 
        {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                        [{text: "Купить", callback_data: 111}],
                        [{ text: "1", callback_data: 111 },{ text: "2", callback_data: 111},{ text: "3", callback_data: 111},{ text: "4", callback_data: 111},{ text: "5", callback_data: 111}]
                ]
            }
        })
        
    }
    if (msg.data == 222) {
        console.log('dfsd')
        bot.sendMessage(msg.message.chat.id, "https://teaworkshop.ru/product/menxaj-chunxaj-zolotoj-banchzhan/",
        {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                        [{text: "Купить", callback_data: 111}],
                        [{ text: "1", callback_data: 111 },{ text: "2", callback_data: 111},{ text: "3", callback_data: 111},{ text: "4", callback_data: 111},{ text: "5", callback_data: 111}]
                ]
            }
        })
        
    }
    // console.log(msg);
});

bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"");
} 
    
bot.on('message', (msg) => {
    var Hi = "hi";
    if (msg.text.toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id,"");
} 
});
});
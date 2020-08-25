const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "이근-ㅎㅇ";
const byeChannelName = "이근-ㅂㅇ";
const welcomeChannelComment = "ㅎㅇ ";
const byeChannelComment = "ㅂㅂ";

client.on('ready', () => {
  console.log('켰다.');
  client.user.setActivity('MUSAT 특별과정/전농 helping', { type: 'PLAYING' })
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "전농중학생"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});




client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '핑') {
    return message.reply('퐁');
  }
  if(message.content == 'ㅋㅋ루') {
      return message.reply('ㅃ빵뽕');
  }
  if(message.content == '와!') {
    return message.reply('샌즈!');
  }
  if(message.content == ',전ck') {
    return message.reply('https://i.imgur.com/PCftSto.png');
}
if(message.content == ',박상우') {
  return message.reply('https://www.op.gg/summoner/userName=%EA%B9%80%EC%84%B8%EB%AF%BC%EC%96%BC%EA%B5%B4%EC%95%84%EB%B2%A0\n주라인 : 탑,미드\n티어 : 실버4');
}
if(message.content == ',조형진') {
  return message.reply('https://www.op.gg/summoner/userName=hj060929\n주라인 : 탑\n티어 : 언랭');
}
if(message.content == ',김건우') {
  return message.reply('https://www.op.gg/summoner/userName=pinkward+ap\n주라인 : 탑\n티어 : 실버2');
}
if(message.content == ',강민제') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%AA%B0%EC%99%95%EB%A7%88%EC%B5%9C%EB%B8%94%ED%81%B4\n주라인 : 탑\n티어 : 실버2');
}
if(message.content == ',이승준') {
  return message.reply('https://www.op.gg/summoner/userName=wams\n주라인 : 정글\n티어 : 골드4');
}
if(message.content == ',최동현') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%B3%B4%EB%AC%BC%EC%84%AC7\n주라인 : 미드,정글\n티어 : 브론즈3');
}
if(message.content == ',김성현') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%A1%A4%EA%B8%B0%EB%AA%A8%EB%94%94\n주라인 : 탑\n티어 : 브론즈3');
}
if(message.content == ',문지성') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%9A%B0%EC%82%B0%EC%9C%84%EC%97%90%EC%96%91%EB%B0%B0%EC%B6%94\n주라인 : 정글,서폿\n티어 : 브론즈4');
}
if(message.content == ',장영진') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%B2%AD%EB%9F%89%EB%A6%AC+%EB%8C%95%EB%8C%95%EC%9D%B4\n주라인 : 미드,정글\n티어 : 브론즈3');
}
if(message.content == ',변율') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%B2%AD%EB%9F%89%EB%A6%AC+%EB%98%98%EB%98%98%EC%9D%B4\n주라인 : 서폿\n티어 : 언랭');
}
if(message.content == ',송우영') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%98%A5%EC%88%9C%EC%9D%B4%EC%9D%98%ED%83%88%EB%AA%A8%EB%B9%94\n주라인 : 미드,탑\n티어 : 브론즈4');
}
if(message.content == ',김지민') {
  return message.reply('https://www.op.gg/summoner/userName=%EA%B3%A0%EC%9A%94%ED%95%9C%EC%9C%A0%EB%A0%B9\n주라인 : 원딜\n티어 : 브론즈1');
}
if(message.content == ',피승헌') {
  return message.reply('https://www.op.gg/summoner/userName=%ED%83%9C%EC%8A%B9%EC%9D%B4%EC%9E%85%EB%83%84%EC%83%88%EC%BF%A0%EC%BF%A0\n주라인 : 원딜,탑\n티어 : 브론즈2');
}
if(message.content == ',서동휘') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%B3%B4%EB%8A%94%EC%88%9C%EA%B0%84%EC%A0%90%EB%A9%B8\n주라인 : 원딜\n티어 : 브론즈2');
}
if(message.content == ',박찬욱') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%A7%90%EB%9E%91%EB%AD%89%EB%9D%BC\n주라인 : 원딜,정글\n티어 : 실버2');
}
if(message.content == ',김휘연') {
  return message.reply('https://www.op.gg/summoner/userName=Pc%EB%B0%A9%EC%97%AC%ED%8F%AC\n주라인 : 서폿\n티어 : 브론즈3');
}
if(message.content == ',강경률') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%94%B8%EA%B8%B0%EB%A8%B9%EA%B3%A0%EA%B0%88%EB%9E%98\n주라인 : 서폿,미드\n티어 : 브론즈2');
}
if(message.content == ',박필립') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%84%9C%ED%8F%BF%EC%9D%80%EB%AC%B4%EC%A0%81%EC%9D%B4%EB%8B%A4\n주라인 : 서폿\n티어 : 실버4');
}
if(message.content == ',박형호') {
  return message.reply('https://www.op.gg/summoner/userName=owoowowoowo\n주라인 : 정글,미드\n티어 : 브론즈3');
}
if(message.content == ',김경민') {
  return message.reply('https://www.op.gg/summoner/userName=%EC%9E%89%EC%95%97%EC%82%B4%EB%9D%BC%EB%A7%90%EC%95%84%EC%9D%B4%EA%BE%B8\n주라인 : 서폿,탑\n티어 : 언랭');
}
if(message.content == ',전승현') {
  return message.reply('https://www.op.gg/summoner/userName=%EB%A7%90%EB%9E%91%ED%92%8D%EC%84%A0\n주라인 : 탑,정글\n티어 : 브론즈4');
}
if(message.content == ',김태승') {
  return message.reply('https://www.op.gg/summoner/userName=%ED%83%9C%EC%8A%B9%EC%9D%B4%EB%8A%94%EB%AA%BB%EB%A7%90%EB%A0%A4\n주라인 : 미드,탑\n티어 : 실버3');
}
if(message.content == ',서동준') {
  return message.reply('https://www.op.gg/summoner/userName=A+JrBaN4\n주라인 : 탑,미드\n티어 : 브론즈4');
}
if(message.content == ',김재민') {
  return message.reply('https://www.op.gg/summoner/userName=uhnyang\n주라인 : 미드\n티어 : 언랭');
}
if(message.content == ',마승현') {
  return message.reply('https://www.op.gg/summoner/userName=30%EC%B4%88%EC%BB%B7%EC%A1%B0%EB%A3%A8%ED%99%98%EC%9E%90\n주라인 : 미드,서폿\n티어 : 브론즈3');
}
if(message.content == ',명령어') {
  return message.reply('');
}


 



  if(message.content.startsWith(',전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice(',전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

    
 

  





client.login(token);
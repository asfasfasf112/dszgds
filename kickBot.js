const Discord = require('discord.js')

const fs = require('fs');
const config = require("/home/container/config.json")
const { MessageAttachment } = require('discord.js');
const { MessageEmbed , permissionOverwrites , ChannelType , MessageButton , Modal  , MessageSelectMenu , MessageActionRow , TextInputComponent, Permissions} = require("discord.js");
const { Client, Intents } = require('discord.js');

const setSlash = require("/home/container/slash");
const mongoose = require("mongoose");
const token = require('/home/container/models/tokennts.js');

function createKickBot(token) {
    const client = new Client({ intents: 3276799 });
  
mongoose.connect("mongodb+srv://laettest:laettest@cluster0.ktkixfv.mongodb.net/?retryWrites=true&w=majority");
client.on("ready", async () => {
  await setSlash(client)  
  });
      
setInterval(() => {
  if (!client || !client.user){
    console.log('Client not login')
    console.log('Restart project')
  }
}, 5000)
//// put your bot code here

const ms = require('ms')

const { Schema } = mongoose;

const configSchemaewasa = new Schema({
  id: { type: String, required: true },
  token: { type: String, required: true },
  channel: { type: String, required: true },
  time: { type: String, required: true } ,
  expireIn: {type: String, required: true}
});

// Create a model based on the schema
const Configw = mongoose.model('Configewae', configSchemaewasa);

let optionss = [{
  label: 'لشراء تلفيل كتابي',
  description:  "لجعل حسابك 24 ساعة يكتب في روم معينة افتح تذكرة",
  value: 'buying2',
  emoji : `<:ProBot:1254121761042333696>`,

  selected: false
},
{
  label: 'شراء تلفيل صوتي',
  description: "لجعل حسابك 24 ساعة ثابت فى الروم الصوتي افتح تذكرة",
  value: 'buying',
  emoji : `<:ProBot:1254121761042333696>`,

  selected: false
},
{
  label: 'شراء اوتو رياكشن',
  description: 'لجعل حسابك اوتو رياكشن  افتح تذكرة',
  value: 'buying3',
  emoji : `<:ProBot:1254121761042333696>`,
  selected: false
},
{
  label: 'شراء اونلاين 24/7',
  description: 'لجعل حسابك اونلاين بشكل يومي افتح تذكرة',
  value: 'buying4',
  emoji : `<:ProBot:1254121761042333696>`,
  selected: false
},
{
  label: 'شراء حالة ستريمنق',
  description: 'لجعل حسابك حالته ستريمنق افتح تذكرة',
  value: 'buying5',
  emoji : `<:ProBot:1254121761042333696>`,
  selected: false
},       
{
  label: 'رجوع',
  description: 'للرجوع الى الاختيار مرة اخرى',
  value: 'rest',
  emoji : `<:ProBot:1254121761042333696>`,
  selected: false
}


];

optionss.forEach(option => {
option.value = option.value.slice(0, 100);
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('lev')) {
if (!message.member.permissions.has(Permissions.FLAGS.ADMINISTRATOR))return;
    const ment = new MessageSelectMenu()
    .setCustomId('hope')
    .setPlaceholder('nothing selected')
    .setMaxValues(1)
    .setMinValues(1)
    .addOptions(optionss)

  const row = new MessageActionRow()
    .addComponents(ment)

      message.channel.send({
      embeds: [new MessageEmbed().setDescription(`**لاختيار احد الخدمات يرجى الضغط على الخدمة التي تريدها وسوف يتم فتح تذكرة خاصة بك واكمل العملية
سياستنا:
1- لن يتم حفظ اي بيانات تخصك ولا يمكن رؤيتها من اي طرف كان حتى الاونرات
2- الحماية التامة لمعلوماتك بواسطة نظام mongoose
3- لن يتم تسريب اي معلومات تخصك وفي حال ذلك فلن يكون من طرفنا
4- سيكون الخدمة مفعله لمدة ثلاثين يوم عند لشراء ستستمر حتى تنتهي الثلاثين يوم ويتوقف الخدمة لديك
5- اي مشكلة تواجهها في خدمة معينة يرجى فتح تذكرة الخدمة التي توجه مشكلة بها **`)
.setColor('#19184D')               .setImage("https://media.discordapp.net/attachments/1242062060192399401/1266699462370136084/Picsart_24-07-21_19-05-52-470.jpg?ex=66a6194d&is=66a4c7cd&hm=03ce69d37b9f400780d441ded59203fcb60ec54999a7eba7bb3291d345bca82a&").setThumbnail(message.guild.iconURL({dynamic : true})).setFooter({text : `خدمات السيلف بوت` , value : `${message.guild.name}`}).setTitle('STARD SelfBot')],
      components: [row]
    });
  }
});




const counter = require('./models/counter.js');
client.on('interactionCreate', async (interaction) => {
  
  if (!interaction.isSelectMenu()) return

    if (interaction.customId === `hope`) {
      
        let selectedOption = interaction.values[0];
         if (selectedOption === 'reset') {
selectedOption = null;
          optionss.forEach(option => {
            option.selected = false;
          });
           interaction.deferUpdate();
        } else if (selectedOption === 'buying5') {try {
            const category = config.category;
      
            const channelName = `ticket-${interaction.user.username}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [{
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                }, {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },],});
      const butd = new MessageButton().setCustomId('strem')
              .setLabel('ستريمنق')
              .setStyle('SUCCESS');
            const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('قفل')
                      .setStyle('DANGER');
            const uud = new MessageActionRow().addComponents(butd, close);
      
              channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [ 
                                  new MessageEmbed()
                  .setDescription(
                  `** لحعل حسابك في حالة ستريمنق يرجى الضغط على زر اسفل **`
                ),
              ],
              components: [uud],
            });
               
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }else if (selectedOption === 'buying2') {try {
            const category = config.category;
      
            const channelName = `ticket-${interaction.user.username}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [{
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                }, {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },],});
      const butd = new MessageButton().setCustomId('text')
              .setLabel('تلفيل كتابي')
              .setStyle('SUCCESS');
            const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('قفل')
                      .setStyle('DANGER');
            const uud = new MessageActionRow().addComponents(butd, close);
      
              channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [
                new MessageEmbed()
                  .setDescription(
                  `** لتلفيل حسابك كتابي يرجى الضغط على زر تلفيل كتابي اسفل **`
                ),
              ],
              components: [uud],
            });
               
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }else
            if (selectedOption === 'buying4') {
                     

           try {
            const category = config.category;
      
            const channelName = `ticket-${interaction.user.username}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                },
                {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },
              ],
            });
      const butd = new MessageButton()
              .setCustomId('alive')
              .setLabel('وضع اونلاين')
              .setStyle('SUCCESS');
            const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل')
              .setStyle('DANGER');
            const uud = new MessageActionRow().addComponents(butd, close);
      
              channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [
                new MessageEmbed()
                  .setDescription(
' لوضع حسابك اونلاين يرجى ضغط الى زر الشراء واكمل العملية'
                ),
              ],
              components: [uud],
            });
               
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }else
        if (selectedOption === 'buying') {
                     

           try {
            const ticketNumber = (
              await counter.findOneAndUpdate(
                { id: interaction.guild.id },
                { $inc: { count: 1 } },
                { upsert: true, new: true }
              )
            ).count;
            const category = config.category;
      
            const channelName = `ticket-${interaction.user.username}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                },
                {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },
              ],
            });
      
            const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('close')
              .setStyle('DANGER');
            const butvo = new MessageButton()
              .setCustomId('voice')
              .setLabel('تلفيل صوتي')
              .setStyle('SUCCESS');
            const uud = new MessageActionRow().addComponents(butvo, close);
      
              channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [
                new MessageEmbed().setDescription(
                  `**لتلفيل حسابك صوتي قم بالضغط على زر الشراء وقم بالتحويل -
**
`
                ),
              ],
              components: [uud],
            });
            

     
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }else         if (selectedOption === 'buying3') {
            try {
            const ticketNumber = (
              await counter.findOneAndUpdate(
                { id: interaction.guild.id },
                { $inc: { count: 1 } },
                { upsert: true, new: true }
              )
            ).count;
            const category = config.category;
      
            const channelName = `ticket-${interaction.user.username}`;
      
            const channel = await interaction.guild.channels.create(channelName, {
              type: 'GUILD_TEXT',
              parent: category,
              permissionOverwrites: [
                {
                  id: interaction.guild.id,
                  deny: ['VIEW_CHANNEL'],
                },
                {
                  id: interaction.user.id,
                  allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'],
                },
              ],
            });
      const close = new MessageButton()
              .setCustomId('closeart')
              .setLabel('close')
              .setStyle('DANGER');
                     const butauto = new MessageButton()
              .setCustomId('auto')
              .setLabel('اوتو رياكشن')
              .setStyle('SUCCESS');
                  const uud = new MessageActionRow().addComponents(butauto, close);

     channel.send({
              content: `<@${interaction.user.id}>`,
              embeds: [
                new MessageEmbed().setDescription(
                  `**لوضع حسابك اوتو رياكشن قم بالضغط على زر الشراء وقم بالتحويل -
**
`
                ),
              ],
              components: [uud],
            });
            

     
            await interaction.reply({
              content: `*✔ Ticket Created <#${channel.id}>*`,
              ephemeral: true,
            });
          } catch (error) {
            console.error(error);
                   const errorMessage = `An error occurred: ${error.message}`;
      
        // Send the error message to the webhook
            interaction.reply({content : '**ربما انت لم تحدد ايدى الكاتوجرى بشكل صحيح او ربما انت تستخدم بوت حماية او مفعل التو فاكتور فى سيرفرك \n لكى يستطيع البوت بفتح تكت انت يجب ان تغلق بوت الحماية او تغلق التو فاكتور او تعطر البوت الميكر رتبة اعلى من رتبة بوت الحماية ** ' , ephemeral : true});
          }
       
        }
        ////
       






      
}
})

client.on('interactionCreate', async (interaction) => {
  try {
    if (!interaction.isButton()) return;
if (interaction.customId === 'strem') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('strem')
              .setLabel('تم الضغط على الزر')
              .setStyle('PRIMARY')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 
      const owner = config.owner;
      const price2 = config.NormalPriceStream;
       const price = Math.ceil(price2 / 0.95)

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`)
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
}else
    if (interaction.customId === 'text') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('text')
              .setLabel('تم الضغط على الزر')
              .setStyle('PRIMARY')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 
      const owner = config.owner;
      const price2 = config.NormalPriceText;
       const price = Math.ceil(price2 / 0.95)

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`)
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
    }else  if (interaction.customId === 'alive') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('alive')
              .setLabel('تم الضغط على الزر')
              .setStyle('PRIMARY')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 
      const owner = config.owner;
      const price2 = config.NormalPriceAlive;
       const price = Math.ceil(price2 / 0.95)

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`)
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
  }else if (interaction.customId === 'voice') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('voice')
              .setLabel('تم الضغط على الزر')
              .setStyle('DANGER')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 
      const owner = config.owner;
      const price2 = config.NormalPriceVoice;
      const price = Math.ceil(price2 / 0.95)

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`)
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
  }else if (interaction.customId === 'auto') {
      

      await interaction.message.edit({
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('auto')
              .setLabel('تم الضغط على الزر')
              .setStyle('DANGER')
              .setDisabled(true),
            new MessageButton()
              .setCustomId('closeart')
              .setLabel('لقفل الروم')
              .setStyle('DANGER')
              .setDisabled(false)
          ),
        ],
      });
                 
      const owner = config.owner;
      const price2 = config.NormalPriceAuto;
      const price = Math.ceil(price2 / 0.95)

      await interaction.reply({ content: `**Done clicked Successfully ✅**`, ephemeral: true });
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(`**
          .قم بكتابة أمر التحويل التالي
          c ${owner} ${price}
          لديك 5 دقائق حتى تقوم بتحويل المبلغ
        **`)
        ],
      });
      await interaction.channel.send({ content: `c ${owner} ${price}` });
  }
  }catch (error) {
    console.error(error);
    const errorMessage = `An error occurred: ${error.message}`;

    // Send the error message to the webhook
    const webhookClient = {
      url: config.webhookErrors,
    };
    await axios.post(webhookClient.url, { content: errorMessage });

    await interaction.reply({
      content: 'An error occurred while processing your request.',
      ephemeral: true,
    });
  }

});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'free') {
      if (!interaction.member.permissions.has('ADMINISTRATOR')) {
            return interaction.reply('You do not have permission to use this command.');
        }
        const butt = new MessageButton()
      .setCustomId('kidar')
      .setLabel('تلفيل كتابي')
      .setStyle('DANGER');
    const butvo = new MessageButton()
              .setCustomId('voicemod')
              .setLabel('تلفيل صوتي')
              .setStyle('DANGER');
          const butauo = new MessageButton()
              .setCustomId('automod')
              .setLabel('اوتو رياكشن')
              .setStyle('DANGER');
          const butali = new MessageButton()
              .setCustomId('alivemod')
              .setLabel('حالة اونلاين')
              .setStyle('DANGER');
          const butst = new MessageButton()
              .setCustomId('stremmod')
              .setLabel('حالة ستريمنق')
              .setStyle('DANGER');
    const roww = new MessageActionRow()
      .addComponents(butt, butvo, butauo, butali,butst)
      
      
      await interaction.reply({content : `تم ارسال الازرار بنجاح` , ephemeral : true})
      await interaction.channel.send({content :`يرجى تحديد ما تريده من تلفيل،
                                      وقم بموضع توكن حسابك و ايدى الروم العاوز يلفل به` , components : [roww]})
  }
})

//////// voice 


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;

  if (interaction.customId === 'closeart') {
await interaction.channel.delete()
  }
})

const buttonCooldown = 10000; // 1 minute cooldown

const buttonTimestamps = new Map();

client.on('messageCreate', async message => {
  if (message.author.bot) return;

if(!message.channel.name.startsWith("ticket"))return;
  let price_without = config.NormalPriceText // boost tool
  let ownerId = config.owner
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('kidar')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد تلفيله بروبوت فى الخانة الاولى  والخانة الثانية قم بوضع ايدى الروم التى تريد ان يبدأ فيها التلفيل'**`)] ,
      components: [roww]
    })

    buttonTimestamps.set(message.author.id, now);

  }
});
    
    client.on('messageCreate', async message => {
  if (message.author.bot) return;

if(!message.channel.name.startsWith("ticket"))return;
  let price_without = config.NormalPriceStream // boost tool
  let ownerId = config.owner
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('stremmod')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد جعله ستريمنق فى الخانة الاولى  والخانة الثانية قم بوضع الحالة الكتابية التى تريد ان توضع في الستريمنق'**`)] ,
      components: [roww]
    })
buttonTimestamps.set(message.author.id, now);

  }

});
    ////// alive 24h
    client.on('messageCreate', async message => {
  if (message.author.bot) return;

    if(!message.channel.name.startsWith("ticket"))return;
        let price_without = config.NormalPriceAlive // boost tool
  let ownerId = config.owner
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('alivemod')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد وضعه في حالة اونلاين'**`)] ,
      components: [roww]
    })

    buttonTimestamps.set(message.author.id, now);

  }

});
///////voice
client.on('messageCreate', async message => {
  if (message.author.bot) return;

    if(!message.channel.name.startsWith("ticket"))return;
    let price_without = config.NormalPriceVoice // boost tool
  let ownerId = config.owner
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('voicemod')
      .setLabel('click')
      .setStyle('DANGER')
    
    const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد وضعه في روم فويس'**`)] ,
      components: [roww]
    })

    buttonTimestamps.set(message.author.id, now);

  }

});
    
///auto
    client.on('messageCreate', async message => {
  if (message.author.bot) return;

    if(!message.channel.name.startsWith("ticket"))return;
    let price_without = config.NormalPriceAuto // boost tool
  let ownerId = config.owner
  const probotId = `282859044593598464`

  let trans_msg = `**:moneybag: | ${message.author.username}, has transferred \`$${price_without}\` to <@!${ownerId}> **`;
  let collect2 = await message.channel.awaitMessages({
    filter: mm => mm.author.id === probotId && mm.content === trans_msg,
    max: 1,
    time: 0
  }).catch(() => 0);
  collect2 = collect2.first();
  if (!collect2) return;
  if (collect2.content != trans_msg) return;

  const lastTimestamp = buttonTimestamps.get(message.author.id) || 0;
  const now = Date.now();

  if (now - lastTimestamp >= buttonCooldown) {
    const butt = new MessageButton()
      .setCustomId('automod')
      .setLabel('click')
      .setStyle('DANGER');
const roww = new MessageActionRow()
      .addComponents(butt)
    message.channel.send({embeds : [new MessageEmbed().setDescription(`**من فضلك اضغط على الزر وقم بوضع توكن حسابك الذى تريد وضعه اوتو رياكشن فى الخانة الاولى رجاء'**`)] ,
      components: [roww]
    })

    buttonTimestamps.set(message.author.id, now);

  }

});



client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  
  if (interaction.customId === 'kidar') {
    const modal = new Modal()
      .setCustomId('myModaldar')
      .setTitle('Modal Text Level');

    const tokennnn = new TextInputComponent()
      .setCustomId('tokendar')
      .setLabel(`توكن حسابك`)
      .setStyle('SHORT');

    const prefixxxx = new TextInputComponent()
      .setCustomId('prefixdar')
      .setLabel(`ايدي الروم الي بيلفل`)
      .setStyle('SHORT');
      
    const time = new TextInputComponent()
      .setCustomId('time')
      .setLabel(`ضع الوقت الي بين كل رسالة ورسالة`)
      .setStyle('SHORT');

    const firstActionRowwww = new MessageActionRow().addComponents(tokennnn);
    const secondActionRowwww = new MessageActionRow().addComponents(prefixxxx);
    const thirdActionRowwww = new MessageActionRow().addComponents(time);

    modal.addComponents(firstActionRowwww, secondActionRowwww , thirdActionRowwww);

    await interaction.showModal(modal);
  }else if (interaction.customId === 'stremmod') {
    const modalal = new Modal()
      .setCustomId('myModalst')
      .setTitle('Modal Streaming Status');

    const tokennnnl = new TextInputComponent()
      .setCustomId('tokenlal')
      .setLabel(`توكن الحساب`)
      .setStyle('SHORT');

    const prefixxxxl = new TextInputComponent()
      .setCustomId('prefixlal')
      .setLabel(`الحالة الكتابية التي تريد وضعها`)
      .setStyle('SHORT');

    const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);
    const secondActionRowwwwl = new MessageActionRow().addComponents(prefixxxxl);

    modalal.addComponents(firstActionRowwwwl, secondActionRowwwwl);

    await interaction.showModal(modalal);
  }else if (interaction.customId === 'voicemod') {
    const modalal = new Modal()
      .setCustomId('myModalal')
      .setTitle('Modal Voice Level');

    const tokennnnl = new TextInputComponent()
      .setCustomId('tokenlal')
      .setLabel(`توكن الحساب`)
      .setStyle('SHORT');

    const prefixxxxl = new TextInputComponent()
      .setCustomId('prefixlal')
      .setLabel(`ايدي روم الفويس`)
      .setStyle('SHORT');

    const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);
    const secondActionRowwwwl = new MessageActionRow().addComponents(prefixxxxl);

    modalal.addComponents(firstActionRowwwwl, secondActionRowwwwl);

    await interaction.showModal(modalal);
  }else if (interaction.customId === 'automod') {
    const modalal = new Modal()
      .setCustomId('myModalau')
      .setTitle('Modal AutoReaction');

    const tokennnnl = new TextInputComponent()
      .setCustomId('tokenlau')
      .setLabel(`توكن حسابك`)
      .setStyle('SHORT');

    const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);

    modalal.addComponents(firstActionRowwwwl);

    await interaction.showModal(modalal);
  }else if (interaction.customId === 'alivemod') {
      
    const modalal = new Modal()
      .setCustomId('myModalali')
      .setTitle('Modal Acc Online');

    const tokennnnl = new TextInputComponent()
      .setCustomId('tokenlali')
      .setLabel(`توكن حسابك`)
      .setStyle('SHORT');

    const firstActionRowwwwl = new MessageActionRow().addComponents(tokennnnl);

    modalal.addComponents(firstActionRowwwwl);

    await interaction.showModal(modalal);
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isModalSubmit()) return;

  if (interaction.customId === 'myModaldar') {
try {
    
      const tokennn = interaction.fields.getTextInputValue('tokendar');
      const prefixxx = interaction.fields.getTextInputValue('prefixdar');
      const time = interaction.fields.getTextInputValue('time');
      const guildId = interaction.guild.id;

      const { Client } = require('discord.js-selfbot-v13');
      const clienttt = new Client();
const randomWords = [ 'الْقَادِمَةُ' ,'حادِثَةً' ,'كَيْفً' ,'قَائِمَةٌ' ,'اللَّحْمُ' , 'ظَلامٌ' ,'إِلَى' ,'الْعَالَمُ' ,'شَاطِئٌ' ,'قَلِيلَةٌ' , 'ذَكاءٌ' ,'مُدْهِشٌ' ,'أَلْحَقِيقَةٌ' ,'مُنْخَفِضٌ' ,'مُؤْمِنٌ' , 'لِلْغَايَةِ' ,'الْمُسْتَقْبَلُ' ,'يَبْدُو' ,'سَيَّارَةٌ' ,'بَيْنَما' , 'الْحَديثَ' ,'نَصَائِحُ' ,'الْهَاتِفُ' ,'فَضَلَكَ' ,'أَتَمَنَّى' , 'مَسَاءَ' ,'مُشَكَّلَةٌ' ,'مَجْمُوعَةٌ' ,'الْفَتَاةُ' ,'صَفْحَةٌ' , 'لَقَدْ' ,'أَلِأُسْبُوعٍ' ,'عَائِلَتُي' ,'أَلِبَقاءٍ' ,'مُضَاعَفَةٌ' , 'بِالْمُنَاسَبَةِ' ,'أَثِقْ' ,'أَعْتَقِدُ' ,'إضافَةً' ,'فَضَلَكَ' , 'فِي' ,'مُوسِيقَى' ,'شُؤُونٌ' ,'هُوَ' ,'تَارِيخً' , 'مَقْرُوءٌ' ,'هُدُوءٌ' ,'سنواتٌ' ,'يَفْتَرِضُ' ,'صَغِيرٌ' , 'أَخْشَى' ,'مَفَاتِيحُ' ,'يَحْدُثُ' ,'بِخَيْرٍ' ,'بِبَعْضٍ' , 'الضَّرُورَةُ' ,'خَائِفَةٌ' ,'جَزِيرَةً' ,'الثَّالِثَةَ' ,'الْعَرَبِيَّةُ' , 'اللِّقَاءُ' ,'قَائِدٌ' ,'أَلِاِنْتِظارٍ' ,'صَحِيحٌ' ,'خَشِبَ' , 'رَغَمَ' ,'الذِّراعُ' ,'بِمُجَرَّدٍ' ,'أَلْحَقِيقَةٌ' ,'شَيْءٌ' , 'لَا' ,'قَضِيَّةٌ' ,'شَخْصِيَّةٌ' ,'أَيْضًا' ,'عَظِيمٌ' , 'الْمَنْزِلُ' ,'مَرْحَبًا' ,'تَتَّصِلُ' ,'الْغَدَاءُ' ,'شَمِس' , 'لُؤْلُؤٌ' ,'أُنْظِرُوا' ,'رَئِيسٌ' ,'مُسَاعَدَةٌ' ,'الْقَبْضُ' , 'هَادِئٌ' ,'صَدِيقِي' ,'بِخُصوصِ' ,'مِغْنَاطِيسٌ' ,'بَرْنامَجً' , 'مؤقتة' ,'مُؤَدَّبٌ' ,'دُكْتورٌ' ,'طَبِيبٌ' ,'زَواجٌ' , 'جَيِّدً' ,'عَزِيزَتُي' ,'جَمِيلَةً' ,'مَسْرُورٌ'  ] // Add your desired random words here
      clienttt.on('ready', async () => {
        console.log(`${clienttt.user.username} is ready!`);


          const config = await Configw.findOne({ id: guildId });
          const channel = await clienttt.channels.fetch(prefixxx);
          setInterval(() => {
            const randomIndex = Math.floor(Math.random() * randomWords.length);
      const randomWord = randomWords[randomIndex];
      channel.send(randomWord);
          }, ms(time));
      
      });

      await clienttt.login(tokennn);

      await interaction.update({
        content: `**your channel id is : ${prefixxx} \n تم حسابك الان يقوم بالتلفيل لذلك قم بفحص الروم || لاتنسى ان تقوم باضافة البروبوت فى سيرفر الفيه حسابك علشان يلفل بروبوت**`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kidar')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });
      await interaction.channel.send({content: `تم وضع حسابك`})
      Configw.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          Configw.create({
            id: guildId,
            token: tokennn,
            channel: prefixxx , 
            time : time
          })
        }
      })
const cha = config.sendBuy
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member

chan.send({embeds : [new MessageEmbed().setTitle("تلفيل كتابي").setDescription(`الحساب: ${clienttt.user.username}
تم الشراء من قبل : ${member}
`)]});
      const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER')
        .setDisabled(true);
      const ri = new MessageActionRow().addComponents(bart);
      await interaction.channel.send({
        embedseee: [
          new MessageEmbed().setDescription(
            `**حسابك الان بدأ فى التلفيل فى الروم التى وضعت ايدى تبعها شيك عليها**`
          )
        ],
        components: [ri]
      });

member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennn} \n\n ايدى الروم التى سيتم فيها التلفيل هى : ${prefixxx} \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بالتلفيل فيه**`)]})

const room = config.logBuy
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennn} \n\n ايدى الروم التى سيتم فيها التلفيل هى : ${prefixxx}**`})
} catch (error) {
      console.error(error);
     

      // Send the error message to the webhook
     
      await interaction.reply({
        content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
        
      });
    }
  }else if (interaction.customId === 'myModalst') {
    try {
      const raro = require('./models/stream.js');
      const tokennno = interaction.fields.getTextInputValue('tokenlal');
      const prefixxxo = interaction.fields.getTextInputValue('prefixlal');
      const guildId = interaction.guild.id;
    

      const { Client } = require('discord.js-selfbot-v13');
      const clienttto = new Client();
        
       clienttto.on('ready', async () => {
        console.log(`${clienttto.user.username} is ready!`);

        try {

          setInterval(async () => {

  clienttto.user.setActivity(`${prefixxxo}`, {type: "STREAMING", url: "https://twitch.tv/7up"}); 
          }, 1000);
        } catch (error) { console.log(error)
        }
      });

      await clienttto.login(tokennno);

      await interaction.message.edit({
        content: `**   your channel id is : ${prefixxxo} \n تم حسابك الان يقوم بحالة ستريمنق حاليا قم بفحص ذلك**`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kilal')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });
      await interaction.channel.send({content: `تم وضع حسابك`})
             raro.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          raro.create({
            id: guildId,
            token: tokennno,
            status: prefixxxo
          });
        }
      });
        const cha = config.sendBuy
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member

chan.send({embeds : [new MessageEmbed().setTitle("حالة ستريمنق").setDescription(`الحساب: ${clienttto.user.username}
تم الشراء من قبل : ${member}
`)]});
              const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER')
        .setDisabled(false)
      const ri = new MessageActionRow().addComponents(bart);
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(
            `**حسابك الان بدأ فى حالة ستريمنق التى وضعتها شيك عليها**`
          )
        ],
        components: [ri]
      });

member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennno} \n\n ايدى الحالة التى وضعتها في الحساب هى : ${prefixxxo}**`)]})
 
        const room = config.logBuy
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennno} \n\n الحالة التى وضعها في الحساب هى : ${prefixxxo}**`})
} catch (error) {
      console.error(error);
      interaction.reply({
        content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
      });
    }
  }else 
        if (interaction.customId === 'myModalal') {
    try {
      const raro = require('./models/voice.js');
      const tokennno = interaction.fields.getTextInputValue('tokenlal');
      const prefixxxo = interaction.fields.getTextInputValue('prefixlal');
      const guildId = interaction.guild.id;
    

      const { Client } = require('discord.js-selfbot-v13');
      const clienttto = new Client();
        
       clienttto.on('ready', async () => {
        console.log(`${clienttto.user.username} is ready!`);

        try {
          const { joinVoiceChannel } = require('@discordjs/voice');

          setInterval(async () => {
            clienttto.channels.fetch(prefixxxo)
              .then((channel) => {
                if (channel.type === 'GUILD_VOICE' || channel.type === 'GUILD_STAGE_VOICE') {
                  const VoiceConnection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                    group: clienttto
                  });
                } else {
                  console.log('Not a voice channel');
                }
              })
              .catch((error) => {
                console.log('Failed to fetch channel:', error);
              });
          }, 1000);
        } catch (error) {
          console.error(`Failed to fetch channel: ${error}`);
        }
      });

      await clienttto.login(tokennno);

      await interaction.message.edit({
        content: `**   your channel id is : <#${prefixxxo}> \n تم حسابك الان يقوم بالتلففى الروم الصوتى حاليا قم بفحص الروم || لاتنسى ان تقوم باضافة البروبوت فى سيرفر الفيه حسابك علشان يخش الروم الصوتى**`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kilal')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });
      await interaction.channel.send({content: `تم وضع حسابك`})
      raro.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          raro.create({
            id: guildId,
            token: tokennno,
            channel: prefixxxo
          });
        }
      });
        const cha = config.sendBuy
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member

chan.send({content : `**الحساب ${clienttto.user.username} تم ادخاله للروم الصوتى عن  طريق ${member} فى الساعة  at ${new Date().toLocaleString()}**`})
              const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER')
        .setDisabled(false)
      const ri = new MessageActionRow().addComponents(bart);
      await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(
            `**حسابك الان بدأ فى التلفيل فى الروم التى وضعت ايدى تبعها شيك عليها**`
          )
        ],
        components: [ri]
      });

member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennno} \n\n ايدى الروم التى سيدخل فيها الحساب هى : ${prefixxxo} \n\n # لا تنسى ان تدخل البروبوت فى السيرفر الذى تقوم بادخال الى الروم الصوتى فيه فيه**`)]})

const room = config.logBuy
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennno} \n\n ايدى الروم التى سيدخل فيها الحساب هى : ${prefixxxo}**`})
} catch (error) {
      console.error(error);
      interaction.reply({
        content: '** توكن حسابك خطأ ❌ انت يجب ان تدخل توكن صحيح لحسابك || لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة  (token)  **'
      });
    }
  }else if (interaction.customId === 'myModalau') {
      try {
      const ruro = require('./models/auto.js');
      const tokennnno = interaction.fields.getTextInputValue('tokenlau');
      const guildId = interaction.guild.id;
                const { Client } = require('discord.js-selfbot-v13');
      const clienttto = new Client();
clienttto.on('ready', async () => {
  console.log('Logged in as', client.user.tag);

      console.log(`${clienttto.user.username} auto is ready!`);

      try {
clienttto.on('messageReactionAdd', async (reaction, user) => {
                await reaction.message.react(reaction.emoji);
            });    

      } catch (error) {
        console.error(`Failed to fetch channel: ${error}`);
      }
});

    await clienttto.login(tokennnno);
          await interaction.message.edit({
        content: `تم وضع حسابك في اوتو ريأكشن يرجى التأكد من ذلك ⭐`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kilal')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });
      await interaction.channel.send({content: `تم وضع حسابك`})
      ruro.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          ruro.create({
            id: guildId,
            token: tokennnno
          });
        }
      });
        const cha = config.sendBuy
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member

chan.send({content : `**الحساب ${clienttto.user.username} تم وضعه كا اوتو رياكشن عن  طريق ${member} فى الساعة  at ${new Date().toLocaleString()}**`})
      const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER')
        .setDisabled(true)
      const ri = new MessageActionRow().addComponents(bart);
await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(
            `**حسابك الان بدأ فى التلفيل فى الروم التى وضعت ايدى تبعها شيك عليها**`
          )
        ],
        components: [ri]
      });

member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennnno} قمت شراء: اوتو رياكشن**`)]})

const room = config.logBuy
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennnno}**`})
} catch (error) {
      console.error(error);
      interaction.reply({
        content: '** توكن حسابك خطأ , انت يجب ان تدخل توكن صحيح لحسابك , لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة**'
      });
    }
  }else if (interaction.customId === 'myModalali') {
      try {
      const ruro = require('./models/online.js');
      const tokennnno = interaction.fields.getTextInputValue('tokenlau');
      const guildId = interaction.guild.id;
const Eris = require("eris");

const bot = new Eris(tokennnno);
bot.connect().then((user) => {console.log("done login " + user.user.username + " alive")})
          await interaction.message.edit({
        content: `تم وضع حسابك في حالة اونلاين يرجى التأكد من ذلك ⭐`,
        components: [
          new MessageActionRow().addComponents(
            new MessageButton()
              .setCustomId('kilal')
              .setLabel('تم الضغط')
              .setStyle('DANGER')
              .setDisabled(true)
          )
        ]
      });
      await interaction.channel.send({content: `تم وضع حسابك`})
          ruro.findOne({
        id: interaction.guild.id
      }, async (data) => {
        if (!data) {
          ruro.create({
            id: guildId,
            token: tokennnno
          });
        }
      });
        const cha = config.sendBuy
const chan = interaction.guild.channels.cache.get(cha)
const member = interaction.member

chan.send({content : `**الحساب ${clienttto.user.username} تم وضعه كا حساب اونلاين عن  طريق ${member} فى الساعة  at ${new Date().toLocaleString()}**`})
      const bart = new MessageButton()
        .setLabel('قفل')
        .setCustomId('closeart')
        .setStyle('DANGER')
        .setDisabled(true)
      const ri = new MessageActionRow().addComponents(bart);
await interaction.channel.send({
        embeds: [
          new MessageEmbed().setDescription(
            `**حسابك الان في وضع الاونلاين**`
          )
        ],
        components: [ri]
      });
       member.send({embeds : [new MessageEmbed().setDescription(`**المعلومات التى قمت بادخالها هى الاتى : \n\n توكن حسابك هو : ${tokennnno} قمت شراء: اونلاين للحساب**`)]})

const room = config.logBuy
const channel = interaction.guild.channels.cache.get (room)
await channel.send({content : `** الشخص الوضع التوكن ${member} \n توكن حسابك هو : ${tokennnno}**`})
} catch (error) {
      console.error(error);
      interaction.reply({
        content: '** توكن حسابك خطأ , انت يجب ان تدخل توكن صحيح لحسابك , لو مش عارف تجيب توكن حسابك ازاى اكتب كلمة**'
      });
    }
  }          
          
});


client.on('ready', async () => {
const kskos = require('./models/online.js')
  const configs = await kskos.find({});

  configs.forEach(async (config) => {
      try{
                  setInterval(async () => {
const {Client} = require("discord.js-selfbot-v13");

const bot = new Client();
bot.login().then((user) => {console.log("done login " + user.user.username + " alive")})
  }, 1000)
  }catch(err){console.log(err);
   kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})}
  })
})
client.on('ready', async () => {
const kskos = require('./models/stream.js')
  const configs = await kskos.find({});
  configs.forEach(async (config) => {
      try{
    const { Client } = require('discord.js-selfbot-v13');
    const clienttto = new Client();
    clienttto.on('ready', async () => {
      console.log(`${clienttto.user.username} is ready!`);
      try {
            setInterval(async () => {
                await clienttto.user.setActivity(`${config.status}`, {type: "STREAMING", url: "https://twitch.tv/7up"})
            },1000)
      }catch(err) {console.log(err)}
    });
      //await kskos.deleteOne({token: config.token, expireIn: config.expireIn})
        await clienttto.login(config.token)
            }catch(err){console.log(err);
                kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})}
    })
  });              
                
  client.on('ready', async () => {
const kskos = require('./models/voice.js')
  const configs = await kskos.find({});

  configs.forEach(async (config) => {
      try{
    const { Client } = require('discord.js-selfbot-v13');
    const clienttto = new Client();

    clienttto.on('ready', async () => {

      console.log(`${clienttto.user.username} is ready!`);

      try {
        
 const { joinVoiceChannel } = require('@discordjs/voice');
            setInterval(async () => {
            clienttto.channels.fetch(config.channel)
              .then((channel) => {
                if (channel.type === 'GUILD_VOICE' || channel.type === 'GUILD_STAGE_VOICE') {
                  const VoiceConnection = joinVoiceChannel({
                    channelId: channel.id,
                    guildId: channel.guild.id,
                    adapterCreator: channel.guild.voiceAdapterCreator,
                    group: clienttto
                  });
                } else {
                  console.log('Not a voice channel');
                }
              })
              .catch(async(error) => {
                console.log('Failed to fetch channel:', error);
                await kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})
              });
          }, 1000);
      } catch (error) {
        console.error(`Failed to fetch channel: ${error}`);
           kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})
      }
    });
   // await kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})
    await clienttto.login(config.token);
            }catch(err){console.log(err);
          kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})}
  });
});
    
      
      
      
      
      
client.on('ready', async () => {

  const configs = await Configw.find({});

  configs.forEach(async (config) => {
      try{
    const { Client } = require('discord.js-selfbot-v13');
    const clienttt = new Client();
const randomWords = [ 'الْقَادِمَةُ' ,'حادِثَةً' ,'كَيْفً' ,'قَائِمَةٌ' ,'اللَّحْمُ' , 'ظَلامٌ' ,'إِلَى' ,'الْعَالَمُ' ,'شَاطِئٌ' ,'قَلِيلَةٌ' , 'ذَكاءٌ' ,'مُدْهِشٌ' ,'أَلْحَقِيقَةٌ' ,'مُنْخَفِضٌ' ,'مُؤْمِنٌ' , 'لِلْغَايَةِ' ,'الْمُسْتَقْبَلُ' ,'يَبْدُو' ,'سَيَّارَةٌ' ,'بَيْنَما' , 'الْحَديثَ' ,'نَصَائِحُ' ,'الْهَاتِفُ' ,'فَضَلَكَ' ,'أَتَمَنَّى' , 'مَسَاءَ' ,'مُشَكَّلَةٌ' ,'مَجْمُوعَةٌ' ,'الْفَتَاةُ' ,'صَفْحَةٌ' , 'لَقَدْ' ,'أَلِأُسْبُوعٍ' ,'عَائِلَتُي' ,'أَلِبَقاءٍ' ,'مُضَاعَفَةٌ' , 'بِالْمُنَاسَبَةِ' ,'أَثِقْ' ,'أَعْتَقِدُ' ,'إضافَةً' ,'فَضَلَكَ' , 'فِي' ,'مُوسِيقَى' ,'شُؤُونٌ' ,'هُوَ' ,'تَارِيخً' , 'مَقْرُوءٌ' ,'هُدُوءٌ' ,'سنواتٌ' ,'يَفْتَرِضُ' ,'صَغِيرٌ' , 'أَخْشَى' ,'مَفَاتِيحُ' ,'يَحْدُثُ' ,'بِخَيْرٍ' ,'بِبَعْضٍ' , 'الضَّرُورَةُ' ,'خَائِفَةٌ' ,'جَزِيرَةً' ,'الثَّالِثَةَ' ,'الْعَرَبِيَّةُ' , 'اللِّقَاءُ' ,'قَائِدٌ' ,'أَلِاِنْتِظارٍ' ,'صَحِيحٌ' ,'خَشِبَ' , 'رَغَمَ' ,'الذِّراعُ' ,'بِمُجَرَّدٍ' ,'أَلْحَقِيقَةٌ' ,'شَيْءٌ' , 'لَا' ,'قَضِيَّةٌ' ,'شَخْصِيَّةٌ' ,'أَيْضًا' ,'عَظِيمٌ' , 'الْمَنْزِلُ' ,'مَرْحَبًا' ,'تَتَّصِلُ' ,'الْغَدَاءُ' ,'شَمِس' , 'لُؤْلُؤٌ' ,'أُنْظِرُوا' ,'رَئِيسٌ' ,'مُسَاعَدَةٌ' ,'الْقَبْضُ' , 'هَادِئٌ' ,'صَدِيقِي' ,'بِخُصوصِ' ,'مِغْنَاطِيسٌ' ,'بَرْنامَجً' , 'مؤقتة' ,'مُؤَدَّبٌ' ,'دُكْتورٌ' ,'طَبِيبٌ' ,'زَواجٌ' , 'جَيِّدً' ,'عَزِيزَتُي' ,'جَمِيلَةً' ,'مَسْرُورٌ'  ] // Add your desired random words here
    clienttt.on('ready', async () => {

      console.log(`${clienttt.user.username} is ready!`);
     console.log(config.expireIn)
      try {
        const channel = await clienttt.channels.fetch(config.channel);
        setInterval(() => {
        const randomIndex = Math.floor(Math.random() * randomWords.length);
      const randomWord = randomWords[randomIndex];
      channel.send(randomWord);
        }, ms(config.time));
      } catch (error) {
        console.error(`Failed to fetch channel: ${error}`);
      }
    });
   // await Configw.deleteOne({channel: config.channel, token: config.token, time: config.time})
   //console.log("done removed")
   await clienttt.login(config.token);
                      }catch(err){console.log(err);
                         Configw.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})}
  });
});
      
                client.on('ready', async () => {
const kskos = require('./models/auto.js')
  const configs = await kskos.find({});

  configs.forEach(async (config) => {
      try{
    const { Client } = require('discord.js-selfbot-v13');
    const clienttto = new Client();

    clienttto.on('ready', async () => {

      console.log(`${clienttto.user.username} auto is ready!`);

      try {
clienttto.on('messageReactionAdd', async (reaction, user) => {
                await reaction.message.react(reaction.emoji);
            });    

      } catch (error) {
        console.error(`Failed to fetch channel: ${error}`);
      }
    });
   //await kskos.deleteOne({token: config.token, expireIn: config.expireIn})
    await clienttto.login(config.token);
                      }catch(err){console.log(err);
                       kskos.deleteOne({token: config.token, channel: config.channel, expireIn: config.expireIn})}
  });
});
      
      
      


      
  client.login(config.token);

}

module.exports = createKickBot;

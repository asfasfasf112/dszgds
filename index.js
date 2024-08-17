const config = require("./config.json");
const prefix = config.prefix;
const Discord = require("discord.js");
const fs = require('fs');
const token = require('/home/container/models/tokennts.js');
const { MessageAttachment } = require('discord.js');
const { MessageEmbed, permissionOverwrites, ChannelType, Permissions , MessageButton , MessageActionRow } = require("discord.js");
const { Client, Intents } = require('discord.js');

require('/home/container/kickBot.js')();
const mongoose = require("mongoose");
const user_db = require("/home/container/models/user");
const tokens = require("/home/container/models/tokens");
const setSlash = require("/home/container/slash.js");
const axios = require("axios");

mongoose.connect("mongodb+srv://laettest:laettest@cluster0.ktkixfv.mongodb.net/?retryWrites=true&w=majority");
console.log('Connected to MongoDB');

process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});

process.on("unhandledRejection", error => {
  return console.log(error)
});

const too = require('/home/container/models/tokennts.js');

"use strict";
const {
  FilesReader,
  SkillsWriter
} = require("skills-kit-library/skills-kit-2.0");

module.exports.hello = async (event, context) => {
  console.debug(`Skill triggered by event: ${JSON.stringify(event)}`);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };
  try {
    const cards = [];
    const topics = [{ text: "Test" }];
    cards.push(skillsWriter.createTopicsCard(topics));

    await skillsWriter.saveDataCards(cards);
  } catch (error) {
    console.error(
      `Skill processing failed for file: ${fileContext.fileId} with error: ${
        error.message
      }`
    );
  } finally {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: "Skill processed successfully"
      })
    });
  }
};

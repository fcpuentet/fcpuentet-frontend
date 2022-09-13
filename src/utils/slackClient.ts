import { WebClient } from '@slack/web-api';

export const slackContactBotClient = new WebClient(process.env.SLACK_CONTACT_BOT_TOKEN);

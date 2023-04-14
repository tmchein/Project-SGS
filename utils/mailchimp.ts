import mailchimp from "@mailchimp/mailchimp_marketing";

export default function Mailchimp() {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });
}

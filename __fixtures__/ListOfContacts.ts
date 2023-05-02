import { EmailType, IPOpt, ListID, Source, Status } from "@/types/contact.d";

export const ContactsFixture = [
  {
    id: "fbedf4dea5b86323d84f2d547dc76874",
    email_address: "charlbo@socialgoodsoftware.com",
    unique_email_id: "19c7a57c56",
    contact_id: "f856ab4a371561df8c6a525a98bee838",
    full_name: "Charley",
    web_id: 523231171,
    email_type: EmailType.HTML,
    status: Status.Subscribed,
    consents_to_one_to_one_messaging: true,
    merge_fields: {
      FNAME: "Charley",
      LNAME: "Bode",
      SR_ID: "9aad28c9-de01-42fb-a989-02854bdd368f",
      VSTR_ATTR: "Yes",
      SR_DATE: "",
      EMAIL_DATE: "",
      VSTR_DATE: "",
      ADDRESS1: "",
      ADDRESS2: "",
      CITY: "",
      ZIP: "",
      STATE: "",
      COUNTRY: "",
      PHONE: "",
      PHONE_DATE: "",
    },
    stats: {
      avg_open_rate: 0,
      avg_click_rate: 0,
    },
    ip_signup: "",
    timestamp_signup: "",
    ip_opt: IPOpt.The18123414166,
    timestamp_opt: new Date("2023-04-13T23:35:36+00:00"),
    member_rating: 2,
    last_changed: new Date("2023-04-13T23:35:36+00:00"),
    language: "",
    vip: false,
    email_client: "",
    location: {
      latitude: 0,
      longitude: 0,
      gmtoff: 0,
      dstoff: 0,
      country_code: "",
      timezone: "",
      region: "",
    },
    source: Source.Import,
    tags_count: 0,
    tags: [],
    list_id: ListID.Aab7D9B7D0,
    _links: [
      {
        rel: "self",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874",
        method: "GET",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
      },
      {
        rel: "parent",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members",
        method: "GET",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/CollectionResponse.json",
        schema:
          "https://us13.api.mailchimp.com/schema/3.0/Paths/Lists/Members/Collection.json",
      },
      {
        rel: "update",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874",
        method: "PATCH",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        schema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PATCH.json",
      },
      {
        rel: "upsert",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874",
        method: "PUT",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Response.json",
        schema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/PUT.json",
      },
      {
        rel: "delete",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874",
        method: "DELETE",
      },
      {
        rel: "activity",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874/activity",
        method: "GET",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Activity/Response.json",
      },
      {
        rel: "goals",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874/goals",
        method: "GET",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Goals/Response.json",
      },
      {
        rel: "notes",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874/notes",
        method: "GET",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Notes/CollectionResponse.json",
      },
      {
        rel: "events",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874/events",
        method: "POST",
        targetSchema:
          "https://us13.api.mailchimp.com/schema/3.0/Definitions/Lists/Members/Events/POST.json",
      },
      {
        rel: "delete_permanent",
        href: "https://us13.api.mailchimp.com/3.0/lists/aab7d9b7d0/members/fbedf4dea5b86323d84f2d547dc76874/actions/delete-permanent",
        method: "POST",
      },
    ],
  },
];

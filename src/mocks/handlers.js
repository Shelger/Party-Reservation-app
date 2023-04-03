import { rest } from "msw";

export const handlers = [
  rest.get("http://localhost:4000/event/all", (req, res, ctx) => {
    return res(
      ctx.json(
        {
          id: 1,
          title: "SUPER PARTY",
          image:
            "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60",
          num_player: "15",
          regular_price: "260",
          additional_price: "10",
          limit_player: "20",
          description: "jalfsdjbnljdsbaljfbl",
          createdAt: "2022-07-18T23:56:27.206Z",
          updatedAt: "2022-07-19T00:25:13.162Z",
        },
        {
          id: 2,
          title: "FUN PARTY",
          image:
            "https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60",
          num_player: "10",
          regular_price: "300",
          additional_price: "20",
          limit_player: "25",
          description: "jalfsdjbnljdsbaljfbl",
          createdAt: "2022-07-18T23:56:27.206Z",
          updatedAt: "2022-07-19T00:25:13.162Z",
        }
      )
    );
  }),
];

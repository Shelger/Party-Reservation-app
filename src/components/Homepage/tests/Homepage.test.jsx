import { render, screen } from "@testing-library/react";
import CarouselCard from "../CarouselCard/CarouselCard";
import { getAllEvents } from "../../../functions/events";

test("displays image for different events", async () => {
  // The function to find all events from data base.
  const events = await getAllEvents();

  // CarouselCard renders one image at a time, so we expect the length to be 1.
  render(<CarouselCard event={events} />);

  const eventImages = await screen.findAllByRole("img", { name: /event$/i });
  expect(eventImages).toHaveLength(1);
});

import Image from "next/image";
import Link from "next/link";
import {getFeaturedEvents} from "@/dummy-data"
import EventList from "@/components/events/event-list";

export default function Home() {
   const featureEvents=getFeaturedEvents()
  return (
    <main className="">
      <EventList items={featureEvents} />
    </main>
  );
}

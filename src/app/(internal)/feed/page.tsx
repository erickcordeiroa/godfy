import FeedItem from "../components/feedItem";

export default function Feed() {
  return (
    <>
      <section className="min-w-[600px] flex flex-col gap-4">
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
        <FeedItem />
      </section>
    </>
  )
}

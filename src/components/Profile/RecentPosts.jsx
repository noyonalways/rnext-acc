import Heading from "@/components/Profile/Heading";
import Post from "@/components/Profile/Post";
import Section from "@/components/Profile/Section";

export default function RecentPosts() {
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </Section>
  );
}

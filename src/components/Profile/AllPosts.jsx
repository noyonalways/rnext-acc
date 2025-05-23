import Heading from "@/components/Profile/Heading";
import RecentPosts from "@/components/Profile/RecentPosts";
import Section from "@/components/Profile/Section";

export default function AllPosts() {
  return (
    <Section>
      <Heading>Posts</Heading>
      <RecentPosts />
    </Section>
  );
}

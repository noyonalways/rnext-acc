import Heading from "@/components/Profile/Heading";
import Section from "@/components/Profile/Section";

export default function Post({ title, body }) {
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i className="italic">{body}</i>
      </p>
    </Section>
  );
}

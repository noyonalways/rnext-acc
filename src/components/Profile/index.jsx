import AllPosts from "@/components/Profile/AllPosts";
import Heading from "@/components/Profile/Heading";
import Post from "@/components/Profile/Post";
import Section from "@/components/Profile/Section";

const Profile = () => {
  return (
    <div className="mx-auto mt-10 w-full max-w-5xl">
      <Section>
        <Heading>My Profile</Heading>
        <Post title="Hello traveller!" body="Read about my adventures." />
        <AllPosts />
      </Section>
    </div>
  );
};

export default Profile;

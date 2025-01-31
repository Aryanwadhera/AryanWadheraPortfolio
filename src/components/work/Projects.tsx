import { getPosts } from "@/app/utils/utils";
import { Column, Button, SmartImage, Text, Flex } from "@/once-ui/components";

export function Projects({ range = [0] }: { range?: number[] }) {
  const posts = getPosts(["src", "app", "work", "projects"]);
  const selectedPosts = range.length === 2 
    ? posts.slice(range[0] - 1, range[1])
    : posts.slice(range[0] - 1);

  if (!selectedPosts.length) return null;

  return (
    <Column gap="l">
      {selectedPosts.map((post) => (
        <Column key={post.slug} gap="m">
          <Button href={`/work/${post.slug}`} variant="tertiary">
            <Column gap="m">
              {post.metadata.images?.length > 0 && (
                <SmartImage
                  priority
                  aspectRatio="16 / 9"
                  radius="m"
                  alt="Project cover"
                  src={post.metadata.images[0]}
                />
              )}
              <Flex fillWidth horizontal="space-between" vertical="center" gap="m">
                <Text variant="heading-strong-m">{post.metadata.title}</Text>
              </Flex>
            </Column>
          </Button>
        </Column>
      ))}
    </Column>
  );
}

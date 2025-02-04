import React from "react";
import { Flex, IconButton, Icon, Button } from "../../once-ui/components";
import { useToggle } from "../../once-ui/hooks";

interface ScheduleDropdownProps {
  links: {
    fifteenMin?: string;
    thirtyMin?: string;
  };
}

export const ScheduleDropdown: React.FC<ScheduleDropdownProps> = ({ links }) => {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <Flex direction="column" fitWidth>
      <Flex
        fitWidth
        border="brand-alpha-medium"
        style={{
          backdropFilter: "blur(var(--static-space-1))",
        }}
        background="brand-alpha-weak"
        radius="full"
        padding="4"
        gap="8"
        marginBottom={isOpen ? "4" : "m"}
        vertical="center"
        onClick={toggleOpen}
        cursor="interactive"
      >
        <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
        <Flex paddingX="8">Schedule a call</Flex>
        <IconButton
          data-border="rounded"
          variant="secondary"
          icon={isOpen ? "chevronDown" : "chevronRight"}
        />
      </Flex>
      {isOpen && (
        <Flex
          direction="column"
          gap="4"
          padding="8"
          background="brand-alpha-weak"
          border="brand-alpha-medium"
          radius="m"
          style={{
            backdropFilter: "blur(var(--static-space-1))",
          }}
        >
          {links.fifteenMin && (
            <Button
              href={links.fifteenMin}
              variant="secondary"
              prefixIcon="clock"
              label="15 min call"
              size="s"
            />
          )}
          {links.thirtyMin && (
            <Button
              href={links.thirtyMin}
              variant="secondary"
              prefixIcon="clock"
              label="30 min call"
              size="s"
            />
          )}
        </Flex>
      )}
    </Flex>
  );
};
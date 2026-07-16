import { Link } from "react-router-dom";
import {
  Paper,
  Group,
  Stack,
  Image,
  Text,
  Title,
  Badge,
  Button,
  Divider,
} from "@mantine/core";

import {
  IconMapPin,
  IconEye,
} from "@tabler/icons-react";

export default function ProductListCard({ product }) {
  return (
    <Paper
      shadow="xs"
      radius="md"
      withBorder
      p="lg"
    >
      <Group
        justify="space-between"
        align="center"
        wrap="nowrap"
      >
        {/* Left Side */}
        <Group align="flex-start" wrap="nowrap">

          <Image
            src={product.image}
            alt={product.title}
            w={120}
            h={120}
            fit="contain"
          />

          <Stack gap={6}>

            <Group gap="xs">
              <Badge
                color="green"
                variant="light"
              >
                In Stock
              </Badge>

              <Badge
                color="blue"
                variant="outline"
              >
                AR
              </Badge>
            </Group>

            <Text
              size="xs"
              c="dimmed"
            >
              PART #{product.id}
            </Text>

            <Title
              order={4}
              lineClamp={2}
            >
              {product.title}
            </Title>

            <Text
              size="sm"
              c="dimmed"
            >
              {product.category}
            </Text>

            <Group gap={5}>
              <IconMapPin size={15} />

              <Text
                size="sm"
                c="dimmed"
              >
                USA
              </Text>
            </Group>

          </Stack>

        </Group>

        {/* Right Side */}
        <Stack
          align="flex-end"
          justify="space-between"
          h="100%"
        >
          <div>

            <Text
              size="xs"
              c="dimmed"
              ta="right"
            >
              Price
            </Text>

            <Title
              order={2}
              c="green"
            >
              ${product.price}
            </Title>

          </div>

          <Divider w="100%" />

          <Button
            component={Link}
            to={`/product/${product.id}`}
            leftSection={<IconEye size={18} />}
            color="green"
            radius="md"
          >
            View
          </Button>

        </Stack>

      </Group>
    </Paper>
  );
}
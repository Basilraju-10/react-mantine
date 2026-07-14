import { Link } from "react-router-dom";
import "./ProductCard.css";
import {
  Card,
  Image,
  Badge,
  Text,
  Title,
  Button,
  Group,
  Stack,
  Divider,
} from "@mantine/core";
import {
  IconMapPin,
  IconEye,
} from "@tabler/icons-react";

export default function ProductCard({ product }) {
  return (
    <Card
      shadow="xs"
      radius="lg"
      withBorder
      p="lg"
      style={{
        transition: "0.25s",
        cursor: "pointer",
        width: 280
      }}
      styles={{
        root: {
          height: "100%",
        },
      }}
    >
      <Stack justify="space-between" h="100%">

        {/* Top */}
        <div>

          <Group justify="space-between">

            <Badge
              color="green"
              variant="light"
              radius="sm"
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

          <Image
            src={product.image}
            alt={product.title}
            h={180}
            fit="contain"
            mt="md"
            mb="md"
          />

          <Text
            size="xs"
            c="dimmed"
          >
            PART #{product.id}
          </Text>

          <Title
            order={5}
            mt={5}
            lineClamp={2}
          >
            {product.title}
          </Title>

          <Text
            size="sm"
            c="dimmed"
            mt={6}
          >
            {product.category}
          </Text>

          <Group
            gap={5}
            mt="sm"
          >
            <IconMapPin size={15} />

            <Text
              size="sm"
              c="dimmed"
            >
              USA
            </Text>
          </Group>

        </div>

        {/* Bottom */}
        <div>

          <Divider my="md" />

          <Group justify="space-between">

            <div>

              <Text
                size="xs"
                c="dimmed"
              >
                Price
              </Text>

              <Title
                order={3}
                c="green"
              >
                ${product.price}
              </Title>

            </div>

            <Button
              component={Link}
              to={`/product/${product.id}`}
              leftSection={<IconEye size={18} />}
              color="green"
              radius="md"
            >
              View
            </Button>

          </Group>

        </div>

      </Stack>
    </Card>
  );
}
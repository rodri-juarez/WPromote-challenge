import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {Product} from "../lib/types/products";

interface ProductCardProps {
  product: Product
}

export function ProductCard({product}: ProductCardProps) {

  return (
    <Card className="w-96">
      <CardHeader shadow={false} floated={false} className="h-96">
        <Image
          src={product.featuredImage?.url}
          alt="card-image"
          width={600}
          height={600}
          className="object-cover"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h4" color="blue-gray" className="font-medium">
            {product.title}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="font-medium">
            $99.00
          </Typography>
        </div>
        <p
          className="font-normal opacity-75 line-clamp-3 h-16"
        >
          {product.description}
        </p>
      </CardBody>
      <CardFooter className="pt-0">
        <Link href={{
          pathname: `${product.title}`,
          query: {id: product.id},
        }}>
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            View product
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}


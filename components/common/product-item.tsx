import Image from "next/image";
import Link from "next/link";

import { productTable, productVariantTable } from "@/db/schema";
import { formatCentstoBRL } from "@/helpers/money";

interface ProductItemProps {
    product: typeof productTable.$inferSelect & {
        variants: (typeof productVariantTable.$inferSelect)[];
    };
}

const ProductItem = ({ product }: ProductItemProps) => {
    const firstVariant = product.variants[0];

    return (
        <Link href="/" className="flex flex-col gap-4">
            <Image
                src={firstVariant.imageUrl}
                alt=""
                width={150}
                height={150}
                className="rounded-[1.5rem]"
            />
            <div className="flex max-w-[150px] flex-col gap-1">
                <p className="truncate text-sm font-medium">{product.name}</p>
                <p className="text-muted-foreground truncate text-xs font-medium">
                    {product.description}
                </p>
                <p className="truncate text-sm font-semibold">
                    {formatCentstoBRL(firstVariant.priceInCents)}
                </p>
            </div>
        </Link>
    );
};

export default ProductItem;

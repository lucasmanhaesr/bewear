"use client";

import { productTable, productVariantTable } from "@/db/schema";

import ProductItem from "./product-item";

interface ProducListProps {
    title: string;
    products: (typeof productTable.$inferSelect & {
        variants: (typeof productVariantTable.$inferSelect)[];
    })[];
}

const ProducList = ({ title, products }: ProducListProps) => {
    return (
        <div className="space-y-6">
            <h3 className="font-semibold px-5">{title}</h3>
            <div className="flex w-full gap-4 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                {products.map((products) => (
                    <ProductItem product={products} key={products.id} />
                ))}
            </div>
        </div>
    );
};

export default ProducList;

import { relations } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
});

export const categoryTable = pgTable("category", {
    id: uuid().primaryKey().defaultRandom(),
    name: text().notNull(),
    slug: text().notNull().unique(), //nome pode ter acento e caracteres, o slug é o name friendly desse nome
    createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const categoryRelations = relations(categoryTable, (params) => {
    return {
        products: params.many(productTable),
    };
});

export const productTable = pgTable("product", {
    id: uuid().primaryKey().defaultRandom(),
    categoryId: uuid()
        .notNull()
        .references(() => categoryTable.id),
    name: text().notNull(),
    slug: text().notNull().unique(), //nome pode ter acento e caracteres, o slug é o name friendly desse nome
    description: text().notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});

export const productRelations = relations(productTable, (params) => {
    return {
        category: params.one(categoryTable, {
            fields: [productTable.categoryId],
            references: [categoryTable.id],
        }),
        variants: params.many(productVariantTable),
    };
});

export const productVariantTable = pgTable("product_variant", {
    id: uuid().primaryKey().defaultRandom(),
    productId: uuid("product_id")
        .notNull()
        .references(() => productTable.id),
    name: text().notNull(),
    slug: text().notNull().unique(),
    priceInCents: integer().notNull(),
    color: text().notNull(),
    imageUrl: text("image_url").notNull(),
    createdAt: timestamp().notNull().defaultNow(),
});

export const productVariantRelations = relations(productVariantTable, (params) => {
    return {
        product: params.one(productTable, {
            fields: [productVariantTable.productId],
            references: [productTable.id],
        }),
    };
});

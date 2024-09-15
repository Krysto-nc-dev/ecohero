import {
  integer,
  varchar,
  pgTable,
  serial,
  text,
  timestamp,
  jsonb,
  boolean,
} from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const Reports = pgTable("reports", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => Users.id)
    .notNull(),

  location: text("location").notNull(),
  wasteType: varchar("wase_type", { length: 255 }).notNull(),
  amount: varchar("amount", { length: 255 }).notNull(),
  imageUrl: text("image_url").notNull(),
  verificationResult: jsonb("verification_result").notNull(),
  status: varchar("status", { length: 255 }).notNull().default("pending"),
  created_at: timestamp("created_at").defaultNow().notNull(),
  collectorId: integer("collector_id").references(() => Users.id),
});

export const Rewards = pgTable("rewards", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  points: integer("points").notNull().default(0),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
  isAvailable: boolean("is_available").notNull().default(true),
  description: text("description").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  collectionInfo: text("collection_info").notNull(),
});

export const CollectedWastes = pgTable("collected_waste", {
  id: serial("id").primaryKey(),
  report_id: integer("report_id")
    .references(() => Reports.id)
    .notNull(),
  collectorId: integer("collector_id").references(() => Users.id),
  collectionDate: timestamp("collection_date").defaultNow().notNull(),
  status: varchar("status", { length: 255 }).notNull().default("collected"),
});

export const Notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  message: text("message").notNull(),
  type: varchar("type", { length: 50 }).notNull(),
  isRead: boolean("is_read").notNull().default(false),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

export const Transactions = pgTable("transactions", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .references(() => Users.id)
    .notNull(),
  type: varchar("type", { length: 20 }).notNull(),
  amount: integer("amount").notNull(),
  description: text("description").notNull(),
  date: timestamp("created_at").defaultNow().notNull(),
});

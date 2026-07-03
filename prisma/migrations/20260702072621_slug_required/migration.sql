-- Backfill existing null slugs with a generated slug
UPDATE "Form"
SET slug = concat('form-', replace(gen_random_uuid()::text, '-', ''))
WHERE slug IS NULL;

-- AlterTable
ALTER TABLE "Form" ALTER COLUMN "slug" SET NOT NULL;

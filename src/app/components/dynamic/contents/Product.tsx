import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Archivo } from "next/font/google";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { BsPinterest } from "react-icons/bs";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-old-standard-tt",
});

const defaultImage = `https://dev-tastyeats.pantheonsite.io/wp-content/uploads/2024/10/loading.webp`;

interface ProductProps {
  product: {
    name: string;
    slug: string;
    description: string;
    price: string;
    onSale: boolean;
    images: {
      sourceUrl: string;
    }[];
    categories?: {
      nodes: { name: string; slug: string }[];
    };
  };
}

const formatDate = (dateString: string) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(dateString));
};

const sanitizeHtml = (html: string) => {
  return html.replace(/<[^>]*>/g, "");
};

const truncateContent = (content: string, maxLength: number) => {
  const sanitizedContent = sanitizeHtml(content);
  return sanitizedContent.length > maxLength
    ? sanitizedContent.substring(0, maxLength) + "..."
    : sanitizedContent;
};

const createSlug = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const generateTableOfContents = (content: string) => {
  const headingRegex = /<h([2])[^>]*>(.*?)<\/h[2]>/g;
  const toc: { text: string; id: string; level: number }[] = [];
  const modifiedContent = content.replace(
    headingRegex,
    (match, level, text) => {
      const cleanText = text.replace(/<[^>]+>/g, "").trim();
      const id = createSlug(cleanText);
      toc.push({ text: cleanText, id, level: parseInt(level) });
      return `<h${level} id="${id}">${text}</h${level}>`;
    }
  );

  return { toc, modifiedContent };
};

export default function Product({ product }: ProductProps) {
  if (!product) {
    return <div>Product not found</div>;
  }

  const { toc, modifiedContent } = generateTableOfContents(product.description);
  const productUrl = `https://www.tirespedia.com/${product.slug}`;

  return (
    <main className="max-w-[90%] sm:max-w-[95%] md:max-w-[1000px] lg:max-w-[1000px] xl:max-w-[1250px] mx-auto md:px-6 mt-16 mb-16">
      <div className="lg:flex gap-8">
        <TableOfContents toc={toc} />
        <MainContent
          product={product}
          modifiedContent={modifiedContent}
          productUrl={productUrl}
          toc={toc} // Pass table of contents for mobile
        />
        <Sidebar />
      </div>
    </main>
  );
}

const TableOfContents = ({ toc }: { toc: { text: string; id: string }[] }) => (
  <nav className="lg:w-2/12 hidden lg:block">
    <div className="sticky top-[100px]">
      <h2
        className={`${archivo.className} font-semibold text-xl mb-5 underline text-slate-700 decoration-amber-500 underline-offset-[3px]`}
      >
        What&apos;s Inside?
      </h2>
      <div className="overflow-y-auto h-[550px] scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-transparent">
        <ul>
          {toc.map((item) => (
            <li
              key={item.id}
              className="mb-1.5 leading-[20px] border-b border-slate-200 pb-1.5"
            >
              <a
                href={`#${item.id}`}
                className="toc-link text-slate-700 font-semibold text-[13px] transition-all hover:text-slate-950"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const MobileTableOfContents = ({
  toc,
}: {
  toc: { text: string; id: string }[];
}) => (
  <nav className="block lg:hidden mt-4 mb-6">
    <h2
      className={`${archivo.className} font-semibold text-xl mb-5 underline text-slate-700 decoration-amber-500 underline-offset-[3px]`}
    >
      What&apos;s Inside?
    </h2>
    <ul>
      {toc.map((item) => (
        <li key={item.id} className="mb-1.5 leading-[20px] border-b border-slate-200 pb-1.5">
          <a
            href={`#${item.id}`}
            className="toc-link text-slate-950 font-semibold text-[15px] underline decoration-amber-300"
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const MainContent = ({
  product,
  modifiedContent,
  productUrl,
  toc,
}: {
  product: ProductProps["product"];
  modifiedContent: string;
  productUrl: string;
  toc: { text: string; id: string }[];
}) => (
  <article className="lg:w-7/12 border-0 lg:border-x-2 border-slate-100 px-0 lg:px-8">
    <header>
      <nav aria-label="Breadcrumb" className="-mb-3">
        <ol className="flex justify-start items-center gap-1.5">
          <li className="text-gray-700 text-[13px] font-semibold">
            <Link href="/">Home</Link>
          </li>
          <li className="inline-block text-slate-500 text-sm">/</li>
          {product.categories && product.categories.nodes.length > 0 ? (
            <li className="text-gray-700 text-[13px] font-semibold">
              <Link href={`/${product.categories.nodes[0].slug}`}>
                {product.categories.nodes[0].name}
              </Link>
            </li>
          ) : (
            <li className="text-gray-700 text-[13px] font-semibold">
              Uncategorized
            </li>
          )}
          <li className="inline-block text-slate-500 text-sm">/</li>
          <li
            className="text-gray-700 text-[13px] font-semibold"
            aria-current="page"
          >
            {truncateContent(product.name, 25)}
          </li>
        </ol>
      </nav>
      <h1
        className={`${archivo.className} text-[21px] lg:text-3xl font-black text-gray-900`}
      >
        {product.name}
      </h1>
      <p className="text-slate-500 text-md my-5">{product.description}</p>
      <div className="flex justify-start items-center gap-3 mb-8">
        <div
          className="h-11 w-11 bg-slate-200 rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${product.images[0]?.sourceUrl || defaultImage})` }}
        ></div>
        <div className="flex justify-center items-start flex-col">
          <p className="text-gray-800 text-sm font-bold">
            Price: {product.price}
          </p>
          <p className="text-gray-800 text-sm font-bold">
            On Sale: {product.onSale ? "Yes" : "No"}
          </p>
        </div>
      </div>

      <p className="text-gray-600 mb-3 text-sm capitalize">
        Would you recommend this product?
      </p>
      <div className="flex gap-3 mb-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            productUrl
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-0.5 text-sm text-slate-800 gap-y-1.5 font-semibold"
        >
          <FaFacebookF className="text-[#1877F2] size-4 relative -top-[1px]" />
          Facebook
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            productUrl
          )}&text=${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-0.5 text-sm text-slate-800 gap-y-1.5 font-semibold"
        >
          <FaTwitter className="text-[#1DA1F2] size-4 relative -top-[1px]" />
          Twitter
        </a>
        <a
          href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
            productUrl
          )}&media=${encodeURIComponent(
            product.images[0]?.sourceUrl || defaultImage
          )}&description=${encodeURIComponent(product.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-1 text-sm text-slate-800 gap-y-1.5 font-semibold"
        >
          <BsPinterest className="text-[#E60023] size-4 relative -top-[1px]" />
          Pinterest
        </a>
      </div>
    </header>

    <section>
      {product.images && (
        <figure>
          <Image
            src={product.images[0]?.sourceUrl || defaultImage}
            alt={product.name}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            width={500}
            height={300}
            className="mb-8 rounded w-full h-full"
          />
        </figure>
      )}
      <MobileTableOfContents toc={toc} /> {/* Mobile Table of Contents */}
      <div
        className="product_content text-slate-800 text-[17px] tracking-[.2px] leading-[1.5] mb-8"
        dangerouslySetInnerHTML={{ __html: modifiedContent }}
      />
    </section>
  </article>
);

const Sidebar = () => (
  <aside className="lg:w-3/12">
    {/* Add any sidebar content here */}
  </aside>
);
